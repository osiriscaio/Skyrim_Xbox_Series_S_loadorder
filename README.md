# Skyrim SE 2026 "PC-Ultra Medieval Grandioso (2K + 3D VRAM-Safe)" — Xbox Series S Load Order & Cockpit (`v2.2.0`)

[![Deploy Cockpit to GitHub Pages](https://github.com/osiriscaio/Skyrim_Xbox_Series_S_loadorder/actions/workflows/pages.yml/badge.svg)](https://github.com/osiriscaio/Skyrim_Xbox_Series_S_loadorder/actions/workflows/pages.yml)

Curadoria técnica, auditoria binária (`.ckm` / `.esp` / `.bsa`) e **Cockpit Interativo Mobile-First** para transformar *Skyrim Special Edition Padrão* (Jogo Base + 4 Creations gratuitas nativas do patch 1.6, **sem exigir o upgrade pago Anniversary Edition**) em uma experiência medieval fotorrealista comparável ao PC (*Nolvus / Lorerim*) no **Xbox Series S**, calibrada cirurgicamente tanto para o teto de **15,00 GB** de *Reserved Space* em SSD quanto para o teto físico de **`~8,0 GB` de memória unificada GDDR6 (RAM + VRAM)** do console.

---

## 🌐 Acesse o Painel Interativo (Celular, Tablet ou PC)

👉 **Cockpit Online (GitHub Pages):** **[https://osiriscaio.github.io/Skyrim_Xbox_Series_S_loadorder/](https://osiriscaio.github.io/Skyrim_Xbox_Series_S_loadorder/)**

- **Feito para usar no sofá pelo celular** enquanto ordena no controle do Xbox Series S (`360px` a `1920px`, botões `>= 44×44px`, zero bloqueio de tela por cabeçalho fixo, salvamento automático no navegador e exportação/importação `.json`).
- **Dica Mobile (App de Tela Inicial):** No Safari (iPhone) ou Chrome (Android), abra o link acima e escolha **"Adicionar à Tela de Início"** para usá-lo em tela cheia como aplicativo de bordo.

---

## 🚀 Destaques Implementados na Versão `v2.2.0` (Anti-Crash Floresta de Whiterun & `Cheat Teleport`)

1. **Calibração de VRAM Unificada (`~2,3 GB` de RAM/VRAM Ativa Liberados no Corredor de Whiterun, Zero Downgrade em Cidades/Armaduras `2K`):**
   - **`#15 Super Smim'd 1k` (`502,65 MB` BC7):** Substitui o antigo *SMIM SE 2016* sem compressão (`907,54 MB` BC3), mantendo 100% da geometria 3D + ponte/treliças 3D de Whiterun com metade da pressão de memória.
   - **`#16 LucidAPs' High Poly Project (v5.x) - 1K (with Fixes)` (`142,54 MB` BC7):** Mesmas malhas 3D esculpidas do pacote `2K` (`348,56 MB`), reduzindo em `-75%` o custo de VRAM de *clutter* em cidades e na transição para os `427` objetos do *Cheat Room*.
   - **`#58 Fabled Forests Author's Choice 1k` (`91,79 MB`):** Substitui o pesado *Nature of the Wild Lands 2.31* (`396,15 MB`, árvores de `~20.000` polígonos que estouravam os `8,0 GB` do Series S ao multiplicar centenas de instâncias com `#59 Alpine Forest of Whiterun Valley`), combinando os mesmos posicionamentos densos de floresta fechada (*NotWL + Ulvenwald*) com malhas 3D *Happy Little Trees* (`~2.500` polígonos) e LODs embutidos a `60 FPS` estáveis.
2. **Blindagem do `Cheat Teleport` & Ordem Nemesis Estrita (`#48`–`#50` e `#84`):**
   - **Adjacência `#49 XP32` → `#50 GDB's The Revenge`:** `#48 CFPAO` foi movido para cima do `XP32`, eliminando falhas do grafo de animações Nemesis ao conjurar magias equipadas na mão em 1ª pessoa (como `Cheat Teleport`).
   - **`#84 Cheat Room (XB1)` no Rodapé:** Reposicionado de `#14` para `#84` (imediatamente acima do `#85 Alternate Perspective`), impedindo qualquer deslocamento de prefixos hexadecimais `FormID` nos mods `#01`–`#83`.
3. **Hotfix Cirúrgico In-Place V2.2 (Mobile 1-Toque & Desktop `F12`):**
   - **Pelo Celular (Zero PC / Zero `F12`):** 6 botões diretos na aba **`3. Hotfix Anti-Crash V2.2`** para desmarcar os 3 pacotes antigos e adicionar os 3 novos em segundos, sem precisar limpar os `15 GB` do console.
   - **Pelo PC (`F12` Console):** Script cirúrgico REST API v2 (~3s) + Script completo `Smart-Sync V2.2` (`85/85` mods).
4. **Integridade Mantida da `v2.1.0`:**
   - `#35 Vanilla Armor Replacer | By NordwarUA` (`467,71 MB` Full `2K`, `822` arquivos BSA auditados, `0` malhas/texturas ausentes) e interface 100% responsiva WCAG 2.2 AA com `assets/tailwindcss.min.js` local.

---

## 📊 Resumo Técnico do Manifesto `v2.2.0`

| Métrica | Valor Auditado |
| :--- | :--- |
| **Edição Compatível** | *Skyrim Special Edition Padrão* (1.6+ com *Fishing*, *Rare Curios*, *Saints & Seducers* e *Survival Mode*) |
| **Total de Creations (LLO2)** | **`85` mods** (`#01` no topo → `#85` no rodapé) |
| **Tamanho Binário Total (`.ckm`)** | **`11,54 GiB`** (`12,39 GB`) de **`15,00 GB`** |
| **Folga Livre (Regra do Espaço Duplo)** | **`~3,46 GiB` livres** (mais que o dobro do maior pacote individual de `1,62 GiB` — download em lote de 1 clique 100% seguro) |
| **Orçamento de Memória Unificada Series S** | **Calibrado abaixo do teto de `~8,0 GB` GDDR6** no corredor `Whiterun + Floresta Alpina` e na transição `Cheat Teleport` |
| **Integridade `TES4/MAST` & `.swf`** | **`0` masters faltantes • `0` violações de ordem • `0` conflitos `.swf` no menu *Creations*** |

---

## 📂 Estrutura do Repositório

```text
├── index.html                                           # Cockpit Interativo V2.2 (GitHub Pages)
├── assets/
│   └── tailwindcss.min.js                               # Motor de estilos local (zero dependência externa)
├── data/
│   └── verified_v2_85_manifest.json                     # Manifesto binário completo dos 85 mods (V2.2)
├── docs/
│   ├── load_order_fotorrealista_2026_xbox_series_s.md   # Blueprint LLO2 V2.2 + Hotfix Anti-Crash & Cheat Room
│   └── planning/
│       ├── plano_impl_v1.md                             # Plano de implantação v2.1.0
│       └── plano_impl_v2.md                             # Plano de estabilização de VRAM v2.2.0
├── scripts/
│   └── validate_repo.js                                 # Suíte automatizada Gatekeeper (npm test)
├── API_REFERENCE.md                                     # Contratos JSON, LocalStorage e REST API v2
├── CHANGELOG.md                                         # Histórico de versões (v1.0.0 -> v2.2.0)
└── TESTING.md                                           # Evidências binárias, JS VM, VRAM e WCAG 2.2 AA
```

---

## 🛠️ Validação Local

```powershell
# Executa a bateria de integridade JS, manifesto 85/85, dependências TES4/MAST e segurança
npm test
```

Consulte também:
- 📖 [Blueprint Completo LLO2 V2.2 & Guia Anti-Crash](docs/load_order_fotorrealista_2026_xbox_series_s.md)
- 🔌 [Referência Técnica (`API_REFERENCE.md`)](API_REFERENCE.md)
- 🧪 [Relatório de Testes (`TESTING.md`)](TESTING.md)
