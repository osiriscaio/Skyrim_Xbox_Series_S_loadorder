# PROJECT MEMORY — Skyrim Xbox Series S Load Order (`v2.2.0`)

## Visão Geral do Projeto
Repositório autoral dedicado à engenharia, auditoria binária (`.ckm`/`.esp`/`.bsa`) e automação do **Load Order LLO2 V2.2 ("PC-Ultra Medieval Grandioso `2K + 3D VRAM-Safe`")** para *Skyrim Special Edition Padrão* (Jogo Base + 4 Creations gratuitas do patch 1.6, zero dependência paga de *Anniversary Edition*) no **Xbox Series S**, calibrado simultaneamente para os **15,00 GB** de *Reserved Space* em SSD e para o teto físico de **`~8,0 GB` de memória unificada GDDR6 (RAM + VRAM)**.

- **Repositório Remoto:** `https://github.com/osiriscaio/Skyrim_Xbox_Series_S_loadorder`
- **Cockpit Publicado (GitHub Pages):** `https://osiriscaio.github.io/Skyrim_Xbox_Series_S_loadorder/`
- **Versão Atual:** `v2.2.0` (`85` Creations verificadas • `11,54 GiB` / `15,00 GB` • `~3,46 GiB` livres para a Regra do Espaço Duplo)

## Decisões Arquiteturais Consolidadas
1. **Proteção contra Lockout de Interface (`.swf`):** Mods de UI obsoletos contendo `startmenu.swf` ou `bethesdanetlogin.swf` (ex.: *Nordic UI - Updated*) bloqueiam o menu *Creations* pós-dezembro/2023. Utilizamos exclusivamente `#10 Nordic SkyHUD` (HUD in-game pura).
2. **Integridade Binária de Armaduras Comuns (`#35`):** O pacote recortado *Vanilla Armor Replacer - No overlap* (`162 MB`) continha `128` ponteiros `.nif` órfãos no `DIS_Replacer.esp` e omitia `textures\armor_replacer\iron\bootsiron.dds` exigida pelas Botas de Aço (`boots1f_1.nif`). Substituído em `#35` pelo pacote integral `Vanilla Armor Replacer | By NordwarUA` (`467,71 MB` Full `2K`, `822` arquivos BSA verificados, `0` ausentes).
3. **Estabilização de VRAM `8,0 GB` GDDR6 na Floresta de Whiterun & `Cheat Teleport` (`v2.2.0`):**
   - No corredor externo de Whiterun (`5×5` células), `#59 Nature of the Wild Lands` (`396 MB`, `~20.000` polígonos/árvore) multiplicado pelo `Alpine Forest` + `SMIM Full 2016` (`907,5 MB` BC3) + `HPP Full 2K` (`348,6 MB`) excedia os `~8,0 GB` unificados do Series S tanto ao aproximar da floresta quanto no pico `MoveTo()` dos `427` objetos + `54` cofres do `Cheat Room`.
   - Solução definitiva: `#15 Super Smim'd 1k` (`502,65 MB` BC7), `#16 LucidAPs' High Poly Project 1K` (`142,54 MB` BC7) e `#58 Fabled Forests Author's Choice 1k` (`91,79 MB` — posicionamentos densos *NotWL + Ulvenwald* com malhas 3D leves *Happy Little Trees* + LODs), liberando `~2,3 GB` de VRAM ativa sem perder texturas `2K` de cidades e armaduras.
   - Ordem Nemesis estrita: `#48 CFPAO` posicionado acima de `#49 XP32` → `#50 GDB's The Revenge` (adjacentes). `#84 Cheat Room (XB1)` posicionado no rodapé acima de `#85 Alternate Perspective` para nunca deslocar prefixos `FormID` de `#01`–`#83`.
4. **Arquitetura Mobile-First & Zero-Dependência Externa no GitHub Pages:**
   - Runtime CSS (`assets/tailwindcss.min.js`) servido localmente no mesmo domínio do GitHub Pages + fallback CSS semântico embutido (nota: o estudo preliminar `estudo_viabilidade_skyrim_2026_xbox_series_s.md` foi intencionalmente removido de `docs/` no repositório remoto pelo autor e não deve ser recriado lá).
   - Cabeçalho rola naturalmente em grade `2×2` no celular; apenas a barra de abas (`grid 2×2` no mobile) permanece `sticky top-0`.
   - Todos os alvos interativos respeitam `>= 44×44px` no mobile (WCAG 2.5.8), inputs usam `16px` (anti-zoom iOS Safari), links de mod usam `<a target="_blank">` nativo e a cópia possui fallback em 3 camadas.
5. **Automação Dual (Mobile 1-Toque + PC REST API v2):**
   - No celular: 6 botões diretos de 1 toque para o *Hotfix Anti-Crash V2.2* sem precisar de Console `F12`.
   - No navegador desktop: scripts `Smart-Sync V2.2`, `Hotfix V2.2` e `Clear Library` consumindo `PUT /ugcmods/v2/content/{uuid}/preference` com o `Bearer idToken` da sessão autenticada do próprio usuário.
