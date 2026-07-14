# ✈️ MCDU / FMS Simulator

Um simulador interativo e responsivo de uma **CDU (Control Display Unit)** de um **FMS (Flight Management System)** real, desenvolvido para rodar diretamente no navegador. 

Este projeto foi construído unindo duas paixões: o desenvolvimento front-end moderno e a aviação comercial.

---

## 🚀 Demonstração

O projeto está publicado e pronto para ser testado!
🔗 **[Acesse o Simulador Online aqui](https://caiosmoura.github.io/mcdu-fms-simulator/)**

---

## 🛠️ Funcionalidades e Regras de Aviação Implementadas

O simulador imita o comportamento real de inserção de dados de voo na página de inicialização (`FLIGHT PLAN INIT`):

1. **Etapas Dinâmicas de Voo:** O fluxo de inserção de dados segue estritamente a ordem: 
   `ORIGIN (Origem)` ➔ `DEST (Destino)` ➔ `ROUTE (Rota)` ➔ `ALTITUDE (Altitude)`.
2. **Validação de Códigos ICAO:** O sistema valida de forma inteligente as entradas de Origem e Destino, exigindo exatamente os **4 caracteres** padrão da aviação (ex: `SBBR`, `SBGO`).
3. **Limites Inteligentes no Scratchpad:** O campo de digitação abaixo da tela (scratchpad) limita o texto em 4 caracteres nas etapas de ICAO e até 6 caracteres para rotas e altitudes, evitando estouro de layout.
4. **Reinicialização Completa:** Ao completar todo o plano de voo e pressionar o botão **EXEC**, o plano de voo é concluído e o próximo clique em **EXEC** reinicia os sistemas, limpando a tela para um novo voo.

---

## ⌨️ Mapeamento de Teclas (Teclado Físico vs. Virtual)

Você pode interagir com o simulador clicando diretamente nos botões da tela ou utilizando o teclado físico do seu computador. Veja as equivalências de comando:

| Teclado Físico (PC) | Botão no Painel | Função no Sistema |
| :--- | :--- | :--- |
| **Letras A-Z e Números 0-9** | Teclas Alfanuméricas | Insere caracteres no scratchpad |
| **Backspace** | `CLR` (Clear) | Limpa o scratchpad de uma vez |
| **Enter** | `EXEC` (Execute) | Confirma o dado inserido / Reinicia o plano no final |

---

## 🎨 Design Responsivo & Tecnologia

O layout foi milimetricamente desenhado para se parecer com o hardware original das aeronaves da Boeing/Airbus, contando com:
* **Efeito CRT:** Tela com brilho em verde fósforo simulando os monitores analógicos clássicos.
* **Proporção Preservada:** Utilização de `aspect-ratio: 4 / 3` e fontes com `clamp()` para garantir que a tela e os botões fiquem proporcionais e fáceis de ler no celular, tablet ou computador.
* **Efeito de Clique Mecânico:** Botões com efeitos tridimensionais (sombras internas e profundidade) que reagem visualmente ao clique do mouse ou ao acionamento por teclado físico.

---

## 💻 Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da CDU.
* **CSS3 Moderno:** Flexbox, CSS Grid para o teclado alfanumérico e design fluido.
* **JavaScript (Vanilla):** Manipulação da DOM, escuta de eventos globais de teclado e lógica de estados para o plano de voo.

---

## 📦 Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/CaioSMoura/mcdu-fms-simulator.git](https://github.com/CaioSMoura/mcdu-fms-simulator.git)
