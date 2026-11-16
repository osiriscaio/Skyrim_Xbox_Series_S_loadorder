# Skyrim SE 2026 "PC-Ultra Medieval Grandioso (2K + 3D)" — Xbox Series S Load Order & Cockpit (`v2.1.0`)

[![Deploy Cockpit to GitHub Pages](https://github.com/osiriscaio/Skyrim_Xbox_Series_S_loadorder/actions/workflows/pages.yml/badge.svg)](https://github.com/osiriscaio/Skyrim_Xbox_Series_S_loadorder/actions/workflows/pages.yml)

Curadoria técnica, auditoria binária (`.ckm` / `.esp` / `.bsa`) e **Cockpit Interativo Mobile-First** para transformar *Skyrim Special Edition Padrão* (Jogo Base + 4 Creations gratuitas nativas do patch 1.6, **sem exigir o upgrade pago Anniversary Edition**) em uma experiência medieval fotorrealista comparável ao PC (*Nolvus / Lorerim*) no **Xbox Series S**, aproveitando o novo teto oficial de **15,00 GB** de *Reserved Space*.

---

## 🌐 Acesse o Painel Interativo (Celular, Tablet ou PC)

👉 **Cockpit Online (GitHub Pages):** **[https://osiriscaio.github.io/Skyrim_Xbox_Series_S_loadorder/](https://osiriscaio.github.io/Skyrim_Xbox_Series_S_loadorder/)**

- **Feito para usar no sofá pelo celular** enquanto ordena no controle do Xbox Series S (`360px` a `1920px`, botões `>= 44×44px`, zero bloqueio de tela por cabeçalho fixo, salvamento automático no navegador e exportação/importação `.json`).
- **Dica Mobile (App de Tela Inicial):** No Safari (iPhone) ou Chrome (Android), abra o link acima e escolha **"Adicionar à Tela de Início"** para usá-lo em tela cheia como aplicativo de bordo.

---

## 🚀 Destaques Implementados na Versão `v2.1.0`

1. **Correção Binária Integral das Armaduras Comuns em `2K` (`#36`):**
   - Substituído o antigo par recortado (`#35 2K Realistic Armors` + `#36 Vanilla Armor Replacer - No overlap`, que possuía `128` ponteiros `.nif` órfãos no `.esp` e ausência da textura `bootsiron.dds` exigida pelas Botas de Aço da Lydia) pelo pacote completo sem cortes **`Vanilla Armor Replacer | By NordwarUA`** (`467,71 MB` • `822` arquivos BSA auditados, **`0` malhas ou texturas ausentes**).
2. **Adição do `#14 Cheat Room (XB1)` (`1,25 MB`) + Guia Prático:**
   - Sala segura via magia `Cheat Teleport` para inspecionar todos os conjuntos comuns de armaduras em `2K`, ajustar XP/Skills/Perks nos painéis de parede e recarregar inventário de seguidores em saves em andamento.
3. **Hotfix Cirúrgico In-Place (Sem Apagar nem Reordenar o Load Order Atual):**
   - **Pelo Celular (Zero PC / Zero `F12`):** 4 botões diretos de 1 toque na aba **`3. Ajuste / Hotfix V2.1`** para desmarcar os 2 pacotes antigos e inscrever os 2 novos na `creations.bethesda.net` em segundos.
   - **Pelo PC (`F12` Console):** Script cirúrgico REST API v2 (~3s) + Script completo `Smart-Sync V2.1` (`85/85` mods em ~20s).
   - **Simetria de Slots (`#37` → `#85` inalterados):** Como saem 2 mods e entram 2 mods (`#14 Cheat Room` e `#36 Vanilla Armor Replacer`), toda a sequência de `#37` até `#85` mantém exatamente a mesma numeração!
4. **Redesign Responsivo Mobile-First & Autossuficiente (WCAG 2.2 AA):**
   - Remoção do cabeçalho `sticky` gigante no celular (apenas a barra compacta `2×2` com as 4 abas fica fixa no topo, liberando ~90% da tela).
   - Todos os `435` botões calibrados para toque (`>= 44×44px`), busca `16px` anti-zoom no iOS, abertura via `<a target="_blank">` nativo sem bloqueio de pop-up e `assets/tailwindcss.min.js` servido localmente no próprio GitHub Pages.

---

## 📊 Resumo Técnico do Manifesto `v2.1.0`

| Métrica | Valor Auditado |
| :--- | :--- |
| **Edição Compatível** | *Skyrim Special Edition Padrão* (1.6+ com *Fishing*, *Rare Curios*, *Saints & Seducers* e *Survival Mode*) |
| **Total de Creations (LLO2)** | **`85` mods** (`#01` no topo → `#85` no rodapé) |
| **Tamanho Binário Total (`.ckm`)** | **`12,44 GiB`** (`13,36 GB`) de **`15,00 GB`** |
| **Folga Livre (Regra do Espaço Duplo)** | **`~2,56 GiB` livres** (superior ao maior pacote individual de `1,62 GiB` — download em lote de 1 clique 100% seguro) |
| **Integridade `TES4/MAST` & `.swf`** | **`0` masters faltantes • `0` violações de ordem • `0` conflitos `.swf` no menu *Creations*** |

---

## 📂 Estrutura do Repositório

```text
├── index.html                                           # Cockpit Interativo V2.1 (GitHub Pages)
├── assets/
│   └── tailwindcss.min.js                               # Motor de estilos local (zero dependência externa)
├── data/
│   └── verified_v2_85_manifest.json                     # Manifesto binário completo dos 85 mods
├── docs/
│   ├── load_order_fotorrealista_2026_xbox_series_s.md   # Blueprint LLO2 V2.1 + Guia In-Place & Cheat Room
│   ├── estudo_viabilidade_skyrim_2026_xbox_series_s.md  # Estudo de arquitetura Xbox Series S (15 GB)
│   └── planning/
│       └── plano_impl_v1.md                             # Plano de implantação versionado
├── scripts/
│   └── validate_repo.js                                 # Suíte automatizada Gatekeeper (npm test)
├── API_REFERENCE.md                                     # Contratos JSON, LocalStorage e REST API v2
├── CHANGELOG.md                                         # Histórico de versões (v1.0.0 -> v2.1.0)
└── TESTING.md                                           # Evidências binárias, JS VM e WCAG 2.2 AA
```

---

## 🛠️ Validação Local

```powershell
# Executa a bateria de integridade JS, manifesto 85/85, dependências TES4/MAST e segurança
npm test
```

Consulte também:
- 📖 [Blueprint Completo LLO2 V2.1 & Guia de Ajuste Cirúrgico](docs/load_order_fotorrealista_2026_xbox_series_s.md)
- 🔌 [Referência Técnica (`API_REFERENCE.md`)](API_REFERENCE.md)
- 🧪 [Relatório de Testes (`TESTING.md`)](TESTING.md)
