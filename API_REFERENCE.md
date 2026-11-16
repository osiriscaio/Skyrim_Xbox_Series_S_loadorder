# Referência Técnica de Dados, Estado e Automação (`API_REFERENCE.md`)

**Versão:** `v2.1.1`

Embora o **Cockpit Skyrim SE 2026 — Xbox Series S** seja uma aplicação web `100%` estática hospedada no GitHub Pages (sem backend proprietário nem coleta de dados), este documento especifica formalmente os **3 contratos técnicos** utilizados pelo painel:
1. Schema do Manifesto Binário Auditado (`data/verified_v2_85_manifest.json` e `window.MODS`).
2. Schema de Persistência Local (`localStorage` + Exportação/Importação JSON).
3. Endpoints Públicos da **Bethesda.net UGC Mods REST API v2** acionados exclusivamente no navegador do próprio usuário pelos scripts opcionais de automação da aba *Ajuste / Hotfix V2.1*.

---

## 1. Contrato do Manifesto de Mods (`data/verified_v2_85_manifest.json`)

Cada um dos `85` itens ordenados de `#01` a `#85` segue a estrutura auditada diretamente nos cabeçalhos binários `.ckm` / `TES4` / `.bsa`:

```json
{
  "id": 36,
  "bnetId": "9d94d88d-0275-45c0-8083-ecede3c8cbf1",
  "legacyId": 4143740,
  "title": "Vanilla Armor Replacer | By NordwarUA",
  "author": "Raxxinate",
  "published": true,
  "deleted": false,
  "marketplace": false,
  "bytes": 490425179,
  "sizeMb": 467.71,
  "files": [
    "DIS_Replacer.esp",
    "DIS_Replacer.bsa"
  ],
  "deps": [
    "Skyrim.esm",
    "Update.esm",
    "Dawnguard.esm",
    "Dragonborn.esm"
  ]
}
```

| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | `number` (`1..85`) | Posição estrita na Logical Load Order (`LLO2`), onde `1` = topo e `85` = rodapé no Xbox. |
| `bnetId` | `string` (UUID v4) | Identificador canônico do pacote Xbox em `https://creations.bethesda.net/en/skyrim/details/{bnetId}`. |
| `legacyId` | `number \| null` | ID numérico legado (pré-2024) usado como metadado secundário de *bookmark*. |
| `bytes` / `sizeMb` | `number` | Tamanho binário real do arquivo `.ckm` de Xbox (`XBOXSERIESX` / `XBOXONE`). |
| `files` | `string[]` | Plugins (`.esm`/`.esp`/`.esl`) e arquivos `.bsa` extraídos na partição `Data\` do console. |
| `deps` | `string[]` | Lista de *Master Files* (`TES4/MAST`) exigidos acima da posição `id`. |

---

## 2. Contrato de Estado do Usuário (`localStorage` & Backup `.json`)

- **Chave `localStorage`:** `skyrim_se_2026_xbox_cockpit_v2_ultra`
- **Formato de Exportação (`skyrim_se_2026_xbox_progresso.json`):**

```json
{
  "mods": {
    "1": { "web": true, "dl": true, "ord": true },
    "14": { "web": true, "dl": false, "ord": false }
  },
  "calib": {
    "c1": true,
    "c2": true,
    "c3": false
  }
}
```

### Regras de Cascata de Estado (`toggleStage(id, stage)`)
- Marcar `ord = true` (`3. #LLO`) marca automaticamente `web = true` e `dl = true`.
- Marcar `dl = true` (`2. Xbox`) marca automaticamente `web = true`.

---

## 3. Funções Públicas da Interface (`index.html`)

| Função Global | Parâmetros | Comportamento |
| :--- | :--- | :--- |
| `switchTab(tab)` | `'llo' \| 'size' \| 'auto' \| 'enb'` | Alterna entre Ordem LLO2, Ordem por Tamanho, Ajuste/Automação e Calibração In-Game. |
| `toggleStage(id, stage)` | `id: 1..85`, `stage: 'web' \| 'dl' \| 'ord'` | Alterna etapa concluída do mod, recalcula barras de progresso/espaço e salva no `localStorage`. |
| `markWebOnOpen(id)` | `id: 1..85` | Marca `web = true` de forma assíncrona (`80ms`) ao seguir o link nativo `<a target="_blank">` sem bloquear a navegação mobile. |
| `copyText(txt, label)` | `txt: string`, `label: string` | Cópia resiliente em 3 níveis: `navigator.clipboard.writeText` (HTTPS GitHub Pages) → `document.execCommand('copy')` → Modal selecionável. |
| `exportState()` / `importState(ev)` | — | Exporta ou restaura o progresso completo entre PC e celular via arquivo `.json`. |

---

## 4. Endpoints Bethesda.net Consumidos pelos Scripts de Console (`Aba 3`)

Os scripts gerados na aba **3. Ajuste / Hotfix V2.1** executam **exclusivamente dentro da aba autenticada do usuário** em `https://creations.bethesda.net/en/skyrim/library` (nenhuma credencial transita pelo GitHub Pages):

| Método & Endpoint (`https://api.bethesda.net`) | Finalidade | Payload / Query |
| :--- | :--- | :--- |
| `PUT /dwemer/attunement/v1/authenticate` | Renova/obtém o `idToken` (`Bearer`) a partir do cookie de sessão da Bethesda caso não esteja em memória na árvore React/Riot. | `{}` (`credentials: "include"`) |
| `GET /ugcmods/v2/content/subscribe` | Lista paginada dos mods atualmente inscritos na `My Library` do Xbox (`product=SKYRIM&page=1..10&size=100`). | Query string + Header `x-bnet-product: SKYRIM` |
| `PUT /ugcmods/v2/content/{bnetId}/preference` | Inscreve (`subscribe: true`) ou remove (`subscribe: false`) um pacote específico na `My Library` sincronizada com o console. | `{"preferences": {"subscribe": true \| false}}` |
