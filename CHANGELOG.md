# Changelog

Todas as mudanças relevantes deste projeto são documentadas neste arquivo, seguindo o padrão [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/) e [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [2.3.0] - 2026-11-17

### Alterado
- **Arquitetura Híbrida de Armaduras e Armas — Caminho B (`82` Mods • `11,06 GiB` / `15,00 GB` • `~3,94 GiB` livres):**
  - Substituídos `Just Shields (on Back) - SE Edition` (`2,20 MB`), `Believable weapons` (`33,57 MB`), `(Updated) Xavbio Retextures AiO (No CC)` (`671,89 MB`) e `Vanilla Armor Replacer | By NordwarUA` (`467,71 MB`) por **`#32 Simply Realistic Armors & Weapons`** (`4f64358b-a5df-4790-bac1-4ac33cf114da` • `legacyId: 4313632` • `676,68 MB` por *BraccaMykar79*), posicionado imediatamente abaixo de `#31 Optimized Quality CubeMaps` e acima de `#33 New Legion 2k (SWF)` e `#34 Sons of Skyrim (SWF) 2k`.
  - Unifica 100% da direção de arte medieval histórica até o fim de jogo (*Orcish, Elven, Glass, Daedric Noble, Dragonbone/Dragonscale, Stalhrim* + armas *Billyro*), restaura a consistência das miniaturas 3D no menu de inventário (`_go.nif`) e reduz o peso total em mais **`~499 MB`** mantendo os guardas e facções em `2K`.
- **Manifesto Canônico Version-Agnostic (`data/verified_v2_manifest.json`) & Persistência por UUID:**
  - Renomeado o manifesto binário para `data/verified_v2_manifest.json` e migrada a chave interna de `state.mods` no `localStorage` para `bnetId` (UUID) com fallback retrocompatível por `id`.

### Adicionado
- **Card de Upgrade Cirúrgico V2.3 (Mobile 1-Toque & Desktop Console API):** 5 botões mobile diretos na aba *3. Ajuste / Sync V2.3* + script REST API v2 para realizar a transição V2.2 → V2.3 sem limpar os `15 GB`.

---

## [2.2.0] - 2026-11-17

### Corrigido
- **Crash de Memória Unificada (`8,0 GB` GDDR6) na Floresta de Whiterun (`~2,3 GB` de VRAM Ativa Economizados):**
  - Substituído `#59 [XB1] Nature Of The Wild Lands 2.31` (`396,15 MB`, árvores de `~20.000` polígonos e cascas `2K` sem compressão BC7 que excediam o teto físico de `~8,0 GB` do Xbox Series S ao multiplicar centenas de árvores com `#59 Alpine Forest of Whiterun Valley`) por **`#58 Fabled Forests Author's Choice 1k`** (`89eaa99c-9dc5-4dcc-8c4f-b73ea19b567d` • `91,79 MB`), que preserva os posicionamentos densos de floresta fechada (*NotWL + Ulvenwald*) usando malhas 3D leves *Happy Little Trees* (`~2.500` polígonos) e LODs embutidos.
  - Substituído `#16 Static Mesh Improvement Mod SE XB1` (`907,54 MB` BC3 legado de 2016) por **`#15 Super Smim'd 1k`** (`87294b6e-6e9d-410c-91ed-6bb9fccac15e` • `502,65 MB` BC7 moderno + ponte/treliças 3D de Whiterun).
  - Substituído `#17 LucidAPs' High Poly Project` (`348,56 MB` `2K`) por **`#16 LucidAPs' High Poly Project (v5.x) - 1K (with Fixes)`** (`48f7c830-d51d-4e34-910f-80a9166cbcce` • `142,54 MB` BC7, mesmas malhas 3D com `-75%` de VRAM).
- **Crash ao Conjurar `Cheat Teleport` (3 Causas Combinadas Eliminadas):**
  - Liberação do headroom de VRAM na transição `MoveTo()` para os `427` objetos 3D (`REFR`) e `54` cofres (`CONT`) de `Cheat Room.esp`.
  - **Ordem Nemesis Estrita (`#48`–`#50`):** Movido `Comprehensive First Person Animation Overhaul - CFPAO` para `#48`, colando `#49 XP32 Maximum Skeleton Special Extended Plus` diretamente em `#50 GDB's The Revenge` conforme exigência do autor.
  - **Isolamento de `FormID` (`#84`):** Movido `Cheat Room (XB1)` de `#14` para `#84` (logo acima de `#85 Alternate Perspective`), evitando deslocamento de slots hexadecimais acima dele, documentando o protocolo obrigatório de **Hard Reset ("Reiniciar Console") + `New Game`**.

### Adicionado
- **Hotfix Cirúrgico V2.2 (Mobile 1-Toque & Desktop Console API):** 6 botões mobile diretos na aba *3. Hotfix Anti-Crash V2.2* + script REST API v2 para substituir apenas os 3 pacotes sem apagar os `15 GB` do console, elevando a folga livre para **`3,46 GiB`** (`11,54 GiB` / `15,00 GB`).

---

## [2.1.1] - 2026-11-16

### Alterado
- **Sincronização do Gatekeeper de CI (`scripts/validate_repo.js`) & Disparo do GitHub Pages:** Atualizada a lista de arquivos auditados no `npm test` para refletir a remoção do estudo preliminar em `docs/` e acionar o deploy contínuo em `https://osiriscaio.github.io/Skyrim_Xbox_Series_S_loadorder/`.

---

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
