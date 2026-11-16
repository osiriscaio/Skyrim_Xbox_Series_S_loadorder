# PROJECT MEMORY — Skyrim Xbox Series S Load Order (`v2.1.0`)

## Visão Geral do Projeto
Repositório autoral dedicado à engenharia, auditoria binária (`.ckm`/`.esp`/`.bsa`) e automação do **Load Order LLO2 V2.1 ("PC-Ultra Medieval Grandioso `2K + 3D`")** para *Skyrim Special Edition Padrão* (Jogo Base + 4 Creations gratuitas do patch 1.6, zero dependência paga de *Anniversary Edition*) no **Xbox Series S** dentro do limite de **15,00 GB** de *Reserved Space*.

- **Repositório Remoto:** `https://github.com/osiriscaio/Skyrim_Xbox_Series_S_loadorder`
- **Cockpit Publicado (GitHub Pages):** `https://osiriscaio.github.io/Skyrim_Xbox_Series_S_loadorder/`
- **Versão Atual:** `v2.1.1` (`85` Creations verificadas • `12,44 GiB` / `15,00 GB` • `~2,56 GiB` livres para a Regra do Espaço Duplo)

## Decisões Arquiteturais Consolidadas
1. **Proteção contra Lockout de Interface (`.swf`):** Mods de UI obsoletos contendo `startmenu.swf` ou `bethesdanetlogin.swf` (ex.: *Nordic UI - Updated*) bloqueiam o menu *Creations* pós-dezembro/2023. Utilizamos exclusivamente `#10 Nordic SkyHUD` (HUD in-game pura).
2. **Integridade Binária de Armaduras Comuns (`v2.1.0`):** O pacote recortado *Vanilla Armor Replacer - No overlap* (`162 MB`) continha `128` ponteiros `.nif` órfãos no `DIS_Replacer.esp` e omitia `textures\armor_replacer\iron\bootsiron.dds` exigida pelas Botas de Aço (`boots1f_1.nif`). Substituído em `#36` pelo pacote integral `Vanilla Armor Replacer | By NordwarUA` (`467,71 MB` Full `2K`, `822` arquivos BSA verificados, `0` ausentes) + `#14 Cheat Room (XB1)` (`1,25 MB`).
3. **Arquitetura Mobile-First & Zero-Dependência Externa no GitHub Pages:**
   - Runtime CSS (`assets/tailwindcss.min.js`) servido localmente no mesmo domínio do GitHub Pages + fallback CSS semântico embutido.
   - Cabeçalho rola naturalmente em grade `2×2` no celular; apenas a barra de abas (`grid 2×2` no mobile) permanece `sticky top-0`.
   - Todos os alvos interativos respeitam `>= 44×44px` no mobile (WCAG 2.5.8), inputs usam `16px` (anti-zoom iOS Safari), links de mod usam `<a target="_blank">` nativo e a cópia possui fallback em 3 camadas.
4. **Automação Dual (Mobile 1-Toque + PC REST API v2):**
   - No celular: botões diretos de 1 toque para ajustes cirúrgicos sem precisar de Console `F12`.
   - No navegador desktop: scripts `Smart-Sync V2.1`, `Hotfix Cirúrgico V2.1` e `Clear Library` consumindo `PUT /ugcmods/v2/content/{uuid}/preference` com o `Bearer idToken` da sessão autenticada do próprio usuário.
