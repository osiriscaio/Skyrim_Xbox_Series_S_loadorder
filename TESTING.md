# Guia de Testes e Auditoria de Qualidade (`TESTING.md`)

**Versão Auditada:** `v2.2.0`

---

## 1. Execução Rápida da Suíte Automatizada (`npm test`)

Na raiz do repositório (`Node.js >= 20`, zero pacotes externos necessários):

```powershell
npm test
```

O script `scripts/validate_repo.js` executa 5 baterias determinísticas (também executadas automaticamente no GitHub Actions antes de qualquer publicação no GitHub Pages):

1. **Compilação & Execução JavaScript (`node:vm`):** Extrai todos os blocos `<script>` de `index.html`, valida sintaxe estrita e executa a inicialização completa em DOM simulado, compilando também os 3 scripts gerados dinamicamente (`hotfixArmorScriptBox`, `clearLibraryScriptBox` e `automationScriptBox`).
2. **Paridade Estrita de Manifesto (`85/85`):** Garante que `window.MODS` em `index.html` e `data/verified_v2_85_manifest.json` possuam exatamente `85` itens com `id` sequencial (`1..85`) e `bnetId` (UUIDs) 100% idênticos.
3. **Linker Binário `TES4/MAST` (`0` Missing Masters / `0` Order Violations):** Verifica todas as dependências `deps` de cada um dos `85` pacotes contra os arquivos `.esm`/`.esp`/`.esl` providos pelos slots anteriores + jogo base SE 1.6 gratuito (`Skyrim.esm`, `Update.esm`, `Dawnguard.esm`, `HearthFires.esm`, `Dragonborn.esm`, `ccBGSSSE001-Fish.esm`, `ccBGSSSE025-AdvDSGS.esm`, `ccBGSSSE037-Curios.esl`, `ccQDRSSE001-SurvivalMode.esl`, `_ResourcePack.esl`).
4. **Orçamento do Xbox Series S (`15,00 GB` Cap & Regra do Espaço Duplo):** Confirma tamanho total `11,54 GiB` (`< 15,00 GiB`) e folga livre `3,46 GiB` (mais que o dobro do maior pacote individual de `1,62 GiB` — *SRP Architecture 2K - Part 1*).
5. **Auditoria de Segurança & Higiene de Repositório:** Varre todos os arquivos versionados garantindo `0` caminhos locais de máquina (diretórios de usuário do sistema), `0` tokens privados e presença de `assets/tailwindcss.min.js`.

---

## 2. Evidências Empíricas Homologadas na `v2.2.0`

| Auditoria | Escopo | Resultado |
| :--- | :--- | :--- |
| **Calibração de VRAM Xbox Series S (`8,0 GB` GDDR6) & `Cheat Room.esp`** | Substituição dos 3 gargalos de memória não-comprimida/alta poligonagem (`#15 Super Smim'd 1k`, `#16 HPP 1K`, `#58 Fabled Forests 1k`), adjacência `#48 CFPAO -> #49 XP32 -> #50 GDB` e isolamento de `#84 Cheat Room (XB1)` (`427 REFR`, `54 CONT`) | **Aprovado (`11,54 GiB` total; `~2,3 GB` de VRAM ativa liberados no corredor de Whiterun; `0` erros `TES4/MAST`)** |
| **Integridade Binária `.bsa` / `.nif` / `.dds` (`#35`)** | Verificação das `472` malhas `.nif` e `350` texturas `.dds` do pacote `Vanilla Armor Replacer \| By NordwarUA` (`9d94d88d-0275-45c0-8083-ecede3c8cbf1`) | **Aprovado (`0 / 333` malhas `.nif` faltantes; `0 / 358` texturas `.dds` faltantes)** |
| **Auditoria Multi-Viewport & WCAG 2.2 AA (`design_audit.mjs` v2.1)** | Renderização real via Chromium Headless em `360×800`, `390×844`, `768×1024`, `1024×768`, `1440×900` e `1920×1080` (contraste AA, colisão `sticky`, overflow horizontal `0px` e alvos de toque mobile `>= 44×44px`) | **Aprovado (`0 high · 0 medium · 0 low · 0 console errors`)** |
| **Segurança de Interface Xbox (`.swf`)** | Inspeção de todos os pacotes quanto a `startmenu.swf` e `bethesdanetlogin.swf` | **Aprovado (`0` arquivos de menu inicial/login alterados)** |
