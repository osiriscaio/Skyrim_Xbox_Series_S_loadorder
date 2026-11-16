# Changelog

Todas as mudanças relevantes deste projeto são documentadas neste arquivo, seguindo o padrão [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/) e [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [2.1.0] - 2026-11-16

### Adicionado
- **Publicação Oficial via GitHub Pages (`index.html` + `.github/workflows/pages.yml`):** Cockpit interativo autossuficiente com `assets/tailwindcss.min.js` local (zero dependências externas de terceiros), metadados mobile PWA (`theme-color`, ícone vetorial) e pipeline automatizado de validação + publicação.
- **`#14 Cheat Room (XB1)` (`39c6a829-bfca-4af7-9588-3745e23d6e9c` • `1,25 MB`):** Sala utilitária segura via magia `Cheat Teleport` para inspeção de armaduras comuns, ajuste de XP/Skills/Perks e reset de inventário de seguidores.
- **Hotfix Cirúrgico In-Place (Mobile 1-Toque & Desktop Console API):** Card dedicado na aba *Ajuste / Hotfix V2.1* com 4 botões diretos para celular (sem necessidade de PC/`F12`) e script REST API v2 de ~3 segundos para atualizar apenas 2 mods sem limpar o *Reserved Space* nem reordenar os outros 83 itens.
- **Suíte Automatizada Gatekeeper (`scripts/validate_repo.js` / `npm test`):** Validação local e em CI da sintaxe JavaScript (`node:vm`), integridade de dependências `TES4/MAST`, orçamento binário (`12,44 GiB / 15,00 GB`) e auditoria anti-vazamento de dados locais.

### Corrigido
- **Renderização de Armaduras Comuns em `2K` (`#36 Vanilla Armor Replacer | By NordwarUA` • `467,71 MB`):** Substituído o par antigo `#35 2K Realistic Armors` + `#36 Vanilla Armor Replacer - No overlap` (cujo BSA recortado deixava `128` ponteiros `.nif` órfãos no `.esp` — tornando o Capacete de Ferro invisível — e omitia `textures\armor_replacer\iron\bootsiron.dds`, corrompendo a cor das Botas de Aço da Lydia) pelo pacote integral `9d94d88d-0275-45c0-8083-ecede3c8cbf1` (`822` arquivos BSA auditados, `0` ausentes).
- **Responsividade Mobile-First & Acessibilidade WCAG 2.2 AA (`360px` / `390px`):**
  - Removido o `sticky` do cabeçalho completo que ocupava ~85% da altura útil em telas verticais; agora apenas a barra compacta de 4 abas (`grid 2×2` visível sem corte lateral) permanece fixa no topo.
  - Redimensionados todos os `435` controles interativos para mínimo de `44×44px` no celular (WCAG 2.5.8), com campos de busca em `16px` (anti-zoom iOS Safari).
  - Substituído `window.open()` síncrono por links `<a target="_blank">` nativos com marcação assíncrona e implementado fallback triplo de área de transferência (`navigator.clipboard` → `execCommand('copy')` → modal selecionável).
  - Unificado o agrupamento visual da *Zona 2* (`#10` a `#14`).

---

## [2.0.0] - 2026-11-16

### Adicionado
- **Edição "PC-Ultra Medieval Grandioso (`2K + 3D`)" (`85` Mods • `12,34 GiB`):** Salto gráfico para o teto de `15 GB` do Xbox Series S com *SMIM Full PC* (`907,5 MB`), *High Poly Project Full* (`348,6 MB`), *FYX AIO 3D*, *Nordic Stonewalls 2K*, *SRP Architecture 2K Parte 1 & 2* (`3,19 GB`), *Illustrious Whiterun v4.0 2K Complex Material*, *Skyking Fantasia Landscapes*, *Nature of the Wild Lands 2.31*, *Alpine Forest of Whiterun Valley*, *Skoglendi Green Tundra* (100% denso), *Origins of Forest 3D*, *Fortified Whiterun*, *Capital Whiterun Expansion*, *The Great Cities Bundle*, suíte *NordWarUA 2K*, *Pandorable Mega Pack*, *Fluffworks 2K* e *DAWN v2*.
- **Script `Smart-Sync V2` via REST API v2:** Automação de console para poda automática da lista V1 e inscrição verificada dos 85 pacotes V2 na `creations.bethesda.net`.

---

## [1.0.0] - 2026-11-15

### Adicionado
- **Estudo de Viabilidade Arquitetural (`15 GB` Edition)** e primeira versão econômica da Load Order (`56` Mods • `5,97 GiB`), com resolução de travamento de menus `.swf` via `#10 Nordic SkyHUD` e patch `#53 Lux - Free Creation Club Content Patch`.
