# Plano de Implantação `v2.2.0` — Estabilização de VRAM (`8,0 GB` GDDR6) na Floresta de Whiterun & `Cheat Teleport`

## 1. Diagnóstico Forense de Causa Raiz (`v2.1.x`)
1. **Crash ao aproximar da Floresta de Whiterun (`VRAM Tipping Point`):**
   - O aumento do *Reserved Space* para `15,00 GB` em disco SSD não expandiu o pool unificado de memória RAM+VRAM do Xbox Series S (`~8,0 GB` utilizáveis sob o Hypervisor GDK).
   - No corredor externo de Whiterun (`5×5` células carregadas simultaneamente), `#59 [XB1] Nature Of The Wild Lands 2.31` (`396,15 MB`, malhas de PC com `~20.000` polígonos por árvore e cascas `2K` sem compressão BC7) era instanciado centenas de vezes pelo `#60 Alpine Forest of Whiterun Valley` em conjunto com `Static Mesh Improvement Mod SE XB1` (`907,54 MB` BC3 legado de 2016) + `LucidAPs' High Poly Project` (`348,56 MB` `2K`) + `SRP 2K` + `Illustrious Whiterun 2K` + `Fortified/Capital Whiterun` + `JK's` + `NordWarUA 2K` + `Pandorable Mega Pack`.
2. **Crash ao conjurar `Cheat Teleport`:**
   - **Pico de transição de célula (`MoveTo`):** `Cheat Room.esp` instância `427` referências 3D (`REFR`) e `54` cofres (`CONT`) com todos os itens do jogo enquanto a célula externa permanece em memória.
   - **Adjacência Nemesis (`XP32` → `GDB`):** `CFPAO` posicionado entre `#49 XP32` e `#51 GDB's The Revenge` violava a regra de adjacência estrita do grafo de comportamento em magias equipadas na mão.
   - **Estabilidade de `FormID`:** Inserir `Cheat Room.esp` no topo (`#14`) deslocava os prefixos hexadecimais dos plugins subsequentes em saves existentes sem *Hard Reset* do console.

## 2. Intervenções Cirúrgicas Implementadas (`v2.2.0`)
1. **Substituição 1 (`#15`):** `Static Mesh Improvement Mod SE XB1` (`907,54 MB`) → `Super Smim'd 1k` (`87294b6e-6e9d-410c-91ed-6bb9fccac15e`, `502,65 MB` BC7).
2. **Substituição 2 (`#16`):** `LucidAPs' High Poly Project` (`348,56 MB`) → `LucidAPs' High Poly Project (v5.x) - 1K (with Fixes)` (`48f7c830-d51d-4e34-910f-80a9166cbcce`, `142,54 MB` BC7).
3. **Substituição 3 (`#58`):** `[XB1] Nature Of The Wild Lands 2.31` (`396,15 MB`) → `Fabled Forests Author's Choice 1k` (`89eaa99c-9dc5-4dcc-8c4f-b73ea19b567d`, `91,79 MB` — posicionamentos densos *NotWL + Ulvenwald* com malhas 3D leves *Happy Little Trees* e LOD embutido).
4. **Reordenação Nemesis (`#48`–`#50`):** `CFPAO` movido para `#48`, colando `#49 XP32` diretamente em `#50 GDB's The Revenge`.
5. **Isolamento de Slot (`#84`):** `Cheat Room (XB1)` movido para `#84` (imediatamente acima de `#85 Alternate Perspective`), preservando prefixos `FormID` de `#01` a `#83`.
6. **Automação Mobile & Desktop:** Card *Hotfix V2.2* atualizado com 6 botões mobile de 1 toque + script REST API v2 e novo total binário de **`11,54 GiB` (`3,46 GiB` livres)**.
