# Skyrim SE 2026 "PC-Ultra Medieval Híbrido & VRAM-Safe" — Xbox Series S Load Order & Cockpit (`v2.3.0`)

[![Deploy Cockpit to GitHub Pages](https://github.com/osiriscaio/Skyrim_Xbox_Series_S_loadorder/actions/workflows/pages.yml/badge.svg)](https://github.com/osiriscaio/Skyrim_Xbox_Series_S_loadorder/actions/workflows/pages.yml)

Curadoria técnica, auditoria binária (`.ckm` / `.esp` / `.bsa`) e **Cockpit Interativo Mobile-First** para transformar *Skyrim Special Edition Padrão* (Jogo Base + 4 Creations gratuitas nativas do patch 1.6, **sem exigir o upgrade pago Anniversary Edition**) em uma experiência medieval fotorrealista comparável ao PC (*Nolvus / Lorerim*) no **Xbox Series S**, calibrada cirurgicamente tanto para o teto de **15,00 GB** de *Reserved Space* em SSD quanto para o teto físico de **`~8,0 GB` de memória unificada GDDR6 (RAM + VRAM)** do console.

---

## 🌐 Acesse o Painel Interativo (Celular, Tablet ou PC)

👉 **Cockpit Online (GitHub Pages):** **[https://osiriscaio.github.io/Skyrim_Xbox_Series_S_loadorder/](https://osiriscaio.github.io/Skyrim_Xbox_Series_S_loadorder/)**

- **Feito para usar no sofá pelo celular** enquanto ordena no controle do Xbox Series S (`360px` a `1920px`, botões `>= 44×44px`, zero bloqueio de tela por cabeçalho fixo, salvamento automático resiliente por UUID no navegador e exportação/importação `.json`).
- **Dica Mobile (App de Tela Inicial):** No Safari (iPhone) ou Chrome (Android), abra o link acima e escolha **"Adicionar à Tela de Início"** para usá-lo em tela cheia como aplicativo de bordo.

---

## 🚀 Destaques Implementados na Versão `v2.3.0` (Caminho B Híbrido: `Simply Realistic` + Guardas `2K`)

1. **Coesão Medieval Total do Nível 1 ao 80 + Miniaturas 3D Consistentes no Inventário (`#32`):**
   - Substituídos `Just Shields (on Back)` (`2,2 MB`), `Believable weapons` (`33,6 MB`), `Xavbio Retextures AiO` (`671,9 MB`) e `Vanilla Armor Replacer` (`467,7 MB`) pelo pacote unificado **`#32 Simply Realistic Armors & Weapons`** (`676,68 MB` • *BraccaMykar79* • UUID `4f64358b-a5df-4790-bac1-4ac33cf114da`).
   - Remodela não apenas Ferro, Aço, Couro e Ébano, mas também **Orc, Élfica, Vidro, Daédrica Nobre, Osso/Escama de Dragão e Stalhrim + Armas Billyro**, eliminando os modelos fantasia de 2011 e alinhando os modelos 3D giratórios do inventário (`_go.nif`) ao visual vestido no corpo.
2. **Arquitetura Híbrida com Guardas & Legião em `2K` (`#33`–`#36`):**
   - Carregando imediatamente **abaixo** do `#32`, permanecem `#33 New Legion 2k (SWF)` (`111,7 MB`), `#34 Sons of Skyrim (SWF) 2k` (`342,4 MB`), `#35 Unplayable Faction Armors 2k` e `#36 Legacy of Ysgramor 2k` — mantendo os guardas de todas as capitais, Stormcloaks, Legião Imperial e Companheiros em `2K` de última geração!
   - Economia adicional líquida de **`~499 MB`** e `-3` plugins, baixando a lista para **`82` Creations (`11,06 GiB` / `~3,94 GiB` livres)**.
3. **Estabilidade de VRAM `8,0 GB` GDDR6 Preservada da `v2.2.0`:**
   - `#14 Super Smim'd 1k` (`502,65 MB` BC7), `#15 LucidAPs' High Poly Project 1K` (`142,54 MB` BC7), `#55 Fabled Forests Author's Choice 1k` (`91,79 MB`), ordem Nemesis `#45 CFPAO` → `#46 XP32` → `#47 GDB's The Revenge` e `#81 Cheat Room (XB1)` isolado no rodapé.
4. **Persistência Resiliente por UUID & Automação Dual (`Aba 3`):**
   - As marcações locais (`1. Web`, `2. Xbox`, `3. #LLO`) agora são indexadas pelo `bnetId` (UUID) de cada mod com migração automática retrocompatível, preservando seu progresso mesmo quando slots mudam de número.

---

## 📊 Resumo Técnico do Manifesto `v2.3.0`

| Métrica | Valor Auditado |
| :--- | :--- |
| **Edição Compatível** | *Skyrim Special Edition Padrão* (1.6+ com *Fishing*, *Rare Curios*, *Saints & Seducers* e *Survival Mode*) |
| **Total de Creations (LLO2)** | **`82` mods** (`#01` no topo → `#82` no rodapé) |
| **Tamanho Binário Total (`.ckm`)** | **`11,06 GiB`** (`11,87 GB`) de **`15,00 GB`** |
| **Folga Livre (Regra do Espaço Duplo)** | **`~3,94 GiB` livres** (mais que o dobro do maior pacote individual de `1,62 GiB` — download em lote de 1 clique 100% seguro) |
| **Orçamento de Memória Unificada Series S** | **Calibrado abaixo do teto de `~8,0 GB` GDDR6** no corredor `Whiterun + Floresta Alpina`, nas cidades e no `Cheat Teleport` |
| **Integridade `TES4/MAST` & `.swf`** | **`0` masters faltantes • `0` violações de ordem • `0` conflitos `.swf` no menu *Creations*** |

---

## 📂 Estrutura do Repositório

```text
├── index.html                                           # Cockpit Interativo V2.3 (GitHub Pages)
├── assets/
│   └── tailwindcss.min.js                               # Motor de estilos local (zero dependência externa)
├── data/
│   └── verified_v2_manifest.json                        # Manifesto binário canônico dos 82 mods (V2.3)
├── docs/
│   ├── load_order_fotorrealista_2026_xbox_series_s.md   # Blueprint LLO2 V2.3 + Guias de Upgrade & Cheat Room
│   └── planning/
│       ├── plano_impl_v1.md                             # Plano de implantação v2.1.0
│       ├── plano_impl_v2.md                             # Plano de estabilização de VRAM v2.2.0
│       └── plano_impl_v3.md                             # Plano da arquitetura híbrida de armaduras v2.3.0
├── scripts/
│   └── validate_repo.js                                 # Suíte automatizada Gatekeeper (npm test)
├── API_REFERENCE.md                                     # Contratos JSON, LocalStorage por UUID e REST API v2
├── CHANGELOG.md                                         # Histórico de versões (v1.0.0 -> v2.3.0)
└── TESTING.md                                           # Evidências binárias, JS VM, VRAM e WCAG 2.2 AA
```

---

## 🛠️ Validação Local

```powershell
# Executa a bateria de integridade JS, manifesto 82/82, dependências TES4/MAST e segurança
npm test
```

Consulte também:
- 📖 [Blueprint Completo LLO2 V2.3 & Guia Caminho B Híbrido](docs/load_order_fotorrealista_2026_xbox_series_s.md)
- 🔌 [Referência Técnica (`API_REFERENCE.md`)](API_REFERENCE.md)
- 🧪 [Relatório de Testes (`TESTING.md`)](TESTING.md)
