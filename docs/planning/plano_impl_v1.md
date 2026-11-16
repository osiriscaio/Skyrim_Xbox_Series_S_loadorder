# Plano de Implantação v1 (`plano_impl_v1.md`) — Publicação do Repositório e GitHub Pages (`v2.1.0`)

**Data:** 16 de novembro de 2026  
**Versão Alvo:** `v2.1.0`  
**Repositório:** `https://github.com/osiriscaio/Skyrim_Xbox_Series_S_loadorder`

---

## 1. Objetivo
Estruturar, auditar, documentar e publicar a versão `v2.1.0` do projeto **Skyrim SE 2026 Photorealistic — Cockpit & Load Order Xbox Series S** no GitHub, disponibilizando o painel interativo responsivo (mobile + desktop) diretamente via **GitHub Pages** (`https://osiriscaio.github.io/Skyrim_Xbox_Series_S_loadorder/`).

## 2. Escopo de Entregáveis (`v2.1.0`)
1. **Aplicação Estática Autossuficiente (`index.html` + `assets/tailwindcss.min.js`):**
   - Painel interativo Mobile-First (aprovado em `360px`, `390px`, `768px`, `1024px`, `1440px` e `1920px` com `0` alertas WCAG 2.2 AA).
   - Manifesto LLO2 V2.1 com `85` Creations (`12,44 GiB` / `15,00 GB`), incluindo `#14 Cheat Room (XB1)` e `#36 Vanilla Armor Replacer | By NordwarUA` (`467,71 MB` Full `2K` sem cortes).
   - Persistência em `localStorage`, exportação/importação JSON, botões 1-toque mobile e geradores de script REST API v2 para navegador desktop.
2. **Dados & Documentação Técnica Sanitizada (`data/` & `docs/`):**
   - `data/verified_v2_85_manifest.json`: metadados binários verificados (`bnetId`, `legacyId`, `bytes`, `files`, `deps`).
   - `docs/load_order_fotorrealista_2026_xbox_series_s.md`: blueprint completo V2.1 + protocolo cirúrgico *In-Place* + guia do *Cheat Room*.
   - `docs/estudo_viabilidade_skyrim_2026_xbox_series_s.md`: estudo arquitetural comparativo do hardware do Xbox Series S e limites da Creation Engine.
3. **Governança, Testes e CI/CD GitHub Pages:**
   - `scripts/validate_repo.js` (`npm test`): valida sintaxe JS em `vm`, paridade dos 85 UUIDs, integridade de *masters*/ordem LLO2, teto de orçamento (`< 15 GiB`) e varredura anti-vazamento de segredos/caminhos locais.
   - `.github/workflows/pages.yml` + `.nojekyll`: pipeline oficial de deploy no GitHub Pages condicionado à aprovação integral de `npm test`.
   - Documentação mandatória sincronizada: `README.md`, `API_REFERENCE.md`, `CHANGELOG.md` e `TESTING.md`.
