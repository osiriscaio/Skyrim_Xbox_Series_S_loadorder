# PROJECT MEMORY — Skyrim Xbox Series S Load Order (`v2.3.0`)

## Visão Geral do Projeto
Repositório autoral dedicado à engenharia, auditoria binária (`.ckm`/`.esp`/`.bsa`) e automação do **Load Order LLO2 V2.3 ("PC-Ultra Medieval Híbrido & VRAM-Safe")** para *Skyrim Special Edition Padrão* (Jogo Base + 4 Creations gratuitas do patch 1.6, zero dependência paga de *Anniversary Edition*) no **Xbox Series S**, calibrado simultaneamente para os **15,00 GB** de *Reserved Space* em SSD e para o teto físico de **`~8,0 GB` de memória unificada GDDR6 (RAM + VRAM)**.

- **Repositório Remoto:** `https://github.com/osiriscaio/Skyrim_Xbox_Series_S_loadorder`
- **Cockpit Publicado (GitHub Pages):** `https://osiriscaio.github.io/Skyrim_Xbox_Series_S_loadorder/`
- **Versão Atual:** `v2.3.0` (`82` Creations verificadas • `11,06 GiB` / `15,00 GB` • `~3,94 GiB` livres para a Regra do Espaço Duplo)

## Decisões Arquiteturais Consolidadas
1. **Proteção contra Lockout de Interface (`.swf`):** Mods de UI obsoletos contendo `startmenu.swf` ou `bethesdanetlogin.swf` (ex.: *Nordic UI - Updated*) bloqueiam o menu *Creations* pós-dezembro/2023. Utilizamos exclusivamente `#09 Nordic SkyHUD` (HUD in-game pura).
2. **Arquitetura Híbrida de Armaduras e Armas — Caminho B (`v2.3.0`):**
   - Substituídos `Just Shields`, `Believable weapons`, `Xavbio Retextures AiO` e `Vanilla Armor Replacer` por **`#32 Simply Realistic Armors & Weapons`** (`4f64358b-a5df-4790-bac1-4ac33cf114da` • `legacyId: 4313632` • `676,68 MB` por *BraccaMykar79*), carregando imediatamente abaixo de `#31 Optimized Quality CubeMaps` e acima de `#33 New Legion 2k (SWF)`, `#34 Sons of Skyrim (SWF) 2k`, `#35 Unplayable Faction Armors 2k` e `#36 Legacy of Ysgramor 2k`.
   - Benefício triplo: (a) remodela também os sets de fim de jogo (*Orcish, Elven, Glass, Daedric Noble, Dragonbone/Dragonscale, Stalhrim*) eliminando modelos fantasia de 2011; (b) alinha os *ground/world models* (`_go.nif`) no menu de inventário ao traje vestido no corpo; (c) economiza mais `~499 MB` e `-3` plugins mantendo Guardas e Legião Imperial em `2K`.
3. **Estabilização de VRAM `8,0 GB` GDDR6 na Floresta de Whiterun & `Cheat Teleport` (`v2.2.0+`):**
   - `#14 Super Smim'd 1k` (`502,65 MB` BC7), `#15 LucidAPs' High Poly Project 1K` (`142,54 MB` BC7) e `#55 Fabled Forests Author's Choice 1k` (`91,79 MB` — posicionamentos densos *NotWL + Ulvenwald* com malhas 3D leves *Happy Little Trees* + LODs).
   - Ordem Nemesis estrita: `#45 CFPAO` posicionado acima de `#46 XP32` → `#47 GDB's The Revenge` (adjacentes). `#81 Cheat Room (XB1)` posicionado no rodapé acima de `#82 Alternate Perspective` para nunca deslocar prefixos `FormID` de `#01`–`#80`.
4. **Arquitetura Mobile-First, Persistência por UUID & Zero-Dependência Externa no GitHub Pages:**
   - Runtime CSS (`assets/tailwindcss.min.js`) servido localmente no mesmo domínio do GitHub Pages + fallback CSS semântico embutido (nota: `estudo_viabilidade_skyrim_2026_xbox_series_s.md` foi removido de `docs/` no repositório remoto pelo autor e não deve ser recriado lá).
   - Progresso no `localStorage` indexado por `bnetId` (UUID) com fallback retrocompatível por `id`.
   - Todos os alvos interativos respeitam `>= 44×44px` no mobile (WCAG 2.5.8), inputs usam `16px` (anti-zoom iOS Safari), links de mod usam `<a target="_blank">` nativo e a cópia possui fallback em 3 camadas.
5. **Automação Dual (Mobile 1-Toque + PC REST API v2):**
   - No celular: 5 botões diretos de 1 toque para o *Upgrade V2.3* sem precisar de Console `F12`.
   - No navegador desktop: scripts `Smart-Sync V2.3`, `Upgrade V2.3` e `Clear Library` consumindo `PUT /ugcmods/v2/content/{uuid}/preference` com o `Bearer idToken` da sessão autenticada do próprio usuário.
