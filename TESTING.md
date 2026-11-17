# Guia de Testes e Auditoria de Qualidade (`TESTING.md`)

**Versão Auditada:** `v2.3.1`

---

## 1. Execução Rápida da Suíte Automatizada (`npm test`)

Na raiz do repositório (`Node.js >= 20`, zero pacotes externos necessários):

```powershell
npm test
```

O script `scripts/validate_repo.js` executa 5 baterias determinísticas (também executadas automaticamente no GitHub Actions antes de qualquer publicação no GitHub Pages):

1. **Compilação & Execução JavaScript (`node:vm`):** Extrai todos os blocos `<script>` de `index.html`, valida sintaxe estrita e executa a inicialização completa em DOM simulado, compilando também os 3 scripts gerados dinamicamente (`hotfixArmorScriptBox`, `clearLibraryScriptBox` e `automationScriptBox`).
2. **Paridade Estrita de Manifesto (`82/82`):** Garante que `window.MODS` em `index.html` e `data/verified_v2_manifest.json` possuam exatamente `82` itens com `id` sequencial (`1..82`) e `bnetId` (UUIDs) 100% idênticos.
3. **Linker Binário `TES4/MAST` (`0` Missing Masters / `0` Order Violations):** Verifica todas as dependências `deps` de cada um dos `82` pacotes contra os arquivos `.esm`/`.esp`/`.esl` providos pelos slots anteriores + jogo base SE 1.6 gratuito (`Skyrim.esm`, `Update.esm`, `Dawnguard.esm`, `HearthFires.esm`, `Dragonborn.esm`, `ccBGSSSE001-Fish.esm`, `ccBGSSSE025-AdvDSGS.esm`, `ccBGSSSE037-Curios.esl`, `ccQDRSSE001-SurvivalMode.esl`, `_ResourcePack.esl`).
4. **Orçamento do Xbox Series S (`15,00 GB` Cap & Regra do Espaço Duplo):** Confirma tamanho total `11,06 GiB` (`< 15,00 GiB`) e folga livre `3,94 GiB` (mais que o dobro do maior pacote individual de `1,62 GiB` — *SRP Architecture 2K - Part 1*).
5. **Auditoria de Segurança & Higiene de Repositório:** Varre todos os arquivos versionados garantindo `0` caminhos locais de máquina (diretórios de usuário do sistema), `0` tokens privados e presença de `assets/tailwindcss.min.js`.

---

## 2. Evidências Empíricas Homologadas na `v2.3.0`

| Auditoria | Escopo | Resultado |
| :--- | :--- | :--- |
| **Arquitetura Híbrida de Armaduras (`#31`–`#36`)** | Auditoria binária `.ckm` de `#32 Simply Realistic Armors & Weapons` (`4f64358b-a5df-4790-bac1-4ac33cf114da` • `676,68 MB`, `Deps: Skyrim.esm, Update.esm`, `0` arquivos `.swf` perigosos) carregando acima de `#33 New Legion 2k` e `#34 Sons of Skyrim 2k` | **Aprovado (`82/82` mods; `11,06 GiB` total; `3,94 GiB` livres; coesão nível 1–80 + ícones de inventário consistentes)** |
| **Calibração de VRAM Xbox Series S (`8,0 GB` GDDR6) & `Cheat Room.esp`** | `#14 Super Smim'd 1k`, `#15 HPP 1K`, `#55 Fabled Forests 1k`, adjacência `#45 CFPAO -> #46 XP32 -> #47 GDB` e isolamento de `#81 Cheat Room (XB1)` (`427 REFR`, `54 CONT`) | **Aprovado (`~2,5+ GB` de VRAM ativa economizados no corredor de Whiterun e nas cidades; `0` erros `TES4/MAST`)** |
| **Auditoria Multi-Viewport & WCAG 2.2 AA (`design_audit.mjs` v2.1)** | Renderização real via Chromium Headless em `360×800`, `390×844`, `768×1024`, `1024×768`, `1440×900` e `1920×1080` (contraste AA, colisão `sticky`, overflow horizontal `0px` e alvos de toque mobile `>= 44×44px`) | **Aprovado (`0 high · 0 medium · 0 low · 0 console errors`)** |
| **Segurança de Interface Xbox (`.swf`)** | Inspeção de todos os pacotes quanto a `startmenu.swf` e `bethesdanetlogin.swf` | **Aprovado (`0` arquivos de menu inicial/login alterados)** |
