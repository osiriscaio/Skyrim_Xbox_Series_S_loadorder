# Plano de Implantação `v2.3.0` — Arquitetura Híbrida de Armaduras (`Simply Realistic Armors & Weapons` + Facções `NordWarUA 2K`)

## 1. Motivação Técnica & Estética (Caminho B Híbrido)
1. **Coesão Medieval Total (`Nível 1` → `Nível 80`):** Na versão `v2.2.0`, os conjuntos de alto nível (*Orcish, Elven, Glass, Daedric, Dragonbone/Dragonscale, Stalhrim*) mantinham a geometria fantasia original do Skyrim (apenas retexturizada pelo `#33 Xavbio Retextures AiO`), destoando das armaduras históricas iniciais/intermediárias.
2. **Consistência de Miniaturas 3D no Inventário (`_go.nif`):** O pacote *Vanilla Armor Replacer* remodelava apenas os `ArmorAddons` de corpo (`_0.nif`/`_1.nif`), mantendo diversos *ground/world models* originais no menu de inventário. O `Simply Realistic Armors & Weapons` substitui diretamente as malhas/texturas nos caminhos originais do jogo, alinhando inventário e corpo.
3. **Redução Adicional de Disco e VRAM (`-499 MB` líquidos / `-3` slots):** Substituir `Just Shields` (`2,20 MB`) + `Believable weapons` (`33,57 MB`) + `Xavbio AiO` (`671,89 MB`) + `Vanilla Armor Replacer` (`467,71 MB`) = `1.175,37 MB` por um único pacote (`#32 Simply Realistic Armors & Weapons` • `676,68 MB`) reduz o tamanho total de `11,54 GiB` para **`11,06 GiB`** (`3,94 GiB` livres!).

## 2. Alterações Binárias Auditadas (`82` Creations)
- **Removidos (`4`):**
  - `7fa3fed7-6cd6-4035-bf10-5c0ba80fddf1` (`Just Shields (on Back) - SE Edition` — removido preventivamente pois os escudos do *Simply Realistic* não possuem nós `SWF`).
  - `95372fdb-5774-4e70-92bf-ea0b386b2b00` (`Believable weapons (sheathed greatswords)` — substituído pelas armas *Billyro* embutidas no `#32`).
  - `3b1908d3-b4b2-4d42-9351-5bf3532c798a` (`(Updated) Xavbio Retextures AiO (No CC)`).
  - `9d94d88d-0275-45c0-8083-ecede3c8cbf1` (`Vanilla Armor Replacer | By NordwarUA`).
- **Adicionado (`1`) em `#32`:**
  - `4f64358b-a5df-4790-bac1-4ac33cf114da` (`Simply Realistic Armors & Weapons` • `legacyId: 4313632` • `676,68 MB` • *BraccaMykar79*), posicionado logo abaixo de `#31 Optimized Quality CubeMaps` e imediatamente acima de `#33 New Legion 2k (SWF)` e `#34 Sons of Skyrim (SWF) 2k`.
- **Persistência Resiliente no Painel (`localStorage`):** Chaves de progresso migradas para `bnetId` (UUID) com fallback retrocompatível por `id`, evitando perda de marcações quando números de slot mudam entre versões.
