const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ FALHA: ${msg}`);
    process.exit(1);
  }
}

console.log('=== SUÍTE DE VALIDAÇÃO SKYRIM XBOX SERIES S LOAD ORDER (v2.1.0) ===');

// 1. Verificar arquivos essenciais
for (const rel of [
  'index.html',
  'assets/tailwindcss.min.js',
  'data/verified_v2_85_manifest.json',
  'docs/load_order_fotorrealista_2026_xbox_series_s.md',
  'docs/estudo_viabilidade_skyrim_2026_xbox_series_s.md',
  'docs/planning/plano_impl_v1.md',
  'README.md',
  'API_REFERENCE.md',
  'CHANGELOG.md',
  'TESTING.md',
  '.dockerignore',
  '.nojekyll'
]) {
  assert(fs.existsSync(path.join(ROOT, rel)), `Arquivo obrigatório ausente: ${rel}`);
}
console.log('✅ 1/5 Estrutura obrigatória de arquivos verificada.');

// 2. Validar sintaxe e execução do index.html em VM isolada
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
assert(html.includes('./assets/tailwindcss.min.js'), 'index.html deve carregar ./assets/tailwindcss.min.js localmente');
const inlineScripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
assert(inlineScripts.length === 2, `Esperados 2 scripts inline em index.html, encontrados ${inlineScripts.length}`);

for (let i = 0; i < inlineScripts.length; i++) {
  new vm.Script(inlineScripts[i], { filename: `index-inline-${i}.js` });
}

const elements = {};
const sandbox = {
  window: { open: () => {}, isSecureContext: true },
  document: {
    body: { appendChild: () => {}, removeChild: () => {} },
    documentElement: { style: { setProperty: () => {} } },
    createElement: () => ({ style: {}, setAttribute: () => {}, focus: () => {}, select: () => {}, setSelectionRange: () => {}, click: () => {} }),
    execCommand: () => true,
    getElementById: (id) => {
      if (!elements[id]) {
        elements[id] = {
          textContent: '',
          innerHTML: '',
          value: '',
          style: {},
          setAttribute: () => {},
          classList: { add: () => {}, remove: () => {}, toggle: () => {} }
        };
      }
      return elements[id];
    }
  },
  localStorage: { getItem: () => null, setItem: () => {} },
  navigator: { clipboard: { writeText: async () => {} } },
  getComputedStyle: () => ({ getPropertyValue: () => '#0b0f17' }),
  setTimeout,
  clearTimeout
};
vm.runInNewContext(inlineScripts[1], sandbox);

for (const boxId of ['hotfixArmorScriptBox', 'clearLibraryScriptBox', 'automationScriptBox']) {
  const snippet = elements[boxId]?.textContent || '';
  assert(snippet.length > 500, `Script gerado vazio em #${boxId}`);
  new vm.Script(snippet, { filename: `${boxId}.js` });
}
console.log('✅ 2/5 Sintaxe JS e geradores de automação validados via node:vm.');

// 3. Paridade estrita entre index.html MODS e data/verified_v2_85_manifest.json
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/verified_v2_85_manifest.json'), 'utf8'));
assert(manifest.length === 85 && sandbox.MODS.length === 85, 'Manifesto deve conter exatos 85 mods.');
for (let i = 0; i < 85; i++) {
  assert(manifest[i].id === i + 1 && sandbox.MODS[i].id === i + 1, `ID fora de sequência na posição ${i + 1}`);
  assert(manifest[i].bnetId === sandbox.MODS[i].bnetId, `Divergência de UUID no slot #${i + 1}`);
}
assert(sandbox.MODS[13].bnetId === '39c6a829-bfca-4af7-9588-3745e23d6e9c', 'Slot #14 deve ser Cheat Room (XB1)');
assert(sandbox.MODS[35].bnetId === '9d94d88d-0275-45c0-8083-ecede3c8cbf1', 'Slot #36 deve ser Vanilla Armor Replacer Full 2K');
console.log('✅ 3/5 Paridade estrita 85/85 UUIDs confirmada.');

// 4. Validação de dependências TES4/MAST e orçamento de 15 GiB
const provided = new Map([
  ['skyrim.esm', 0], ['update.esm', 0], ['dawnguard.esm', 0], ['hearthfires.esm', 0], ['dragonborn.esm', 0],
  ['ccbgssse001-fish.esm', 0], ['ccbgssse025-advdsgs.esm', 0], ['ccbgssse037-curios.esl', 0],
  ['ccqdrsse001-survivalmode.esl', 0], ['_resourcepack.esl', 0]
]);
let totalBytes = 0;
let maxBytes = 0;
for (const m of manifest) {
  totalBytes += m.bytes;
  if (m.bytes > maxBytes) maxBytes = m.bytes;
  for (const f of (m.files || [])) {
    if (/\.(esp|esm|esl)$/i.test(f)) provided.set(f.toLowerCase(), m.id);
  }
}
for (const m of manifest) {
  for (const dep of (m.deps || [])) {
    const slot = provided.get(dep.toLowerCase());
    assert(slot !== undefined, `Master ausente em #${m.id} (${m.title}): ${dep}`);
    assert(slot <= m.id, `Violação de ordem LLO2 em #${m.id} (${m.title}): requer ${dep} posicionado depois (#${slot})`);
  }
}
const totalGib = totalBytes / (1024 ** 3);
const freeGib = 15.0 - totalGib;
const maxGib = maxBytes / (1024 ** 3);
assert(totalGib < 15.0 && freeGib > maxGib, `Orçamento inválido: total=${totalGib.toFixed(2)} GiB, livre=${freeGib.toFixed(2)} GiB, maior=${maxGib.toFixed(2)} GiB`);
console.log(`✅ 4/5 Linker TES4/MAST (0 erros) e orçamento (${totalGib.toFixed(2)} GiB / 15,00 GB, livre ${freeGib.toFixed(2)} GiB) aprovados.`);

// 5. Higiene e segurança (sem caminhos locais de usuário nem termos indevidos)
const textFiles = [
  'index.html', 'README.md', 'API_REFERENCE.md', 'CHANGELOG.md', 'TESTING.md',
  'docs/load_order_fotorrealista_2026_xbox_series_s.md',
  'docs/estudo_viabilidade_skyrim_2026_xbox_series_s.md',
  'docs/planning/plano_impl_v1.md',
  '.agents/PROJECT_MEMORY.md'
];
for (const rel of textFiles) {
  const content = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  assert(!/C:[/\\]Users[/\\]/i.test(content), `Caminho local detectado em ${rel}`);
  assert(!/E:[/\\]Projetos[/\\]/i.test(content), `Caminho local E:\\Projetos detectado em ${rel}`);
  assert(!/conversation:\/\//i.test(content), `Link interno conversation:// detectado em ${rel}`);
  assert(!/\bVTI\b/.test(content), `Sigla corporativa indevida detectada em ${rel}`);
}
console.log('✅ 5/5 Auditoria de higiene, privacidade e segurança aprovada (0 vazamentos).');
console.log('🎯 TODOS OS TESTES PASSARAM COM 100% DE SUCESSO!');
