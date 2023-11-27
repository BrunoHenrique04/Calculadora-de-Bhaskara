# Documentação do Código

## Variáveis

- **a, b, c:** Armazenam os valores dos elementos de uma equação quadrática, sendo `a` o coeficiente quadrático, `b` o coeficiente linear e `c` o termo constante.
- **x1resp, x2resp:** Elementos de resposta para as raízes da equação quadrática.
- **calcBtn:** Botão de cálculo para acionar a função `bhaskara`.
- **deltaLousa, baskLousa, calcX1Position, calcX2Position, xResp, express, delt, logo:** Elementos do DOM para manipulação e exibição dos resultados e informações no HTML.

## Auto Scroll

- Funções associadas aos eventos de clique nos elementos `delt` (delta) e `express` (expressão), que realizam um scroll suave até as seções correspondentes na página.

## Cálculo de Bhaskara

- **bhaskara:** Função principal que realiza o cálculo das raízes da equação quadrática e chama funções auxiliares para exibição dos passos do cálculo.
- **exibirDelta:** Exibe na lousa os passos para o cálculo do delta.
- **exibirBaskhara:** Exibe na lousa os passos para o cálculo da fórmula de Bhaskara e apresenta as raízes calculadas.
- **resetarCampos:** Limpa os campos de resposta e informações, preparando o ambiente para um novo cálculo.

## PopUp de Dica

- **DOMContentLoaded:** Evento que dispara a exibição de um "coach mark" (dica) ao carregar a página.
- **exibirCoachMark:** Exibe o "coach mark" ao carregar a página.
- **fecharCoachMark:** Fecha o "coach mark" quando acionado.

## Considerações

- O código é uma implementação de uma calculadora de raízes de equações quadráticas, incluindo a exibição passo a passo do cálculo no formato de uma lousa.
- Há manipulação do DOM para exibir informações de forma interativa.
- Foram adicionados eventos de scroll suave para melhorar a experiência do usuário ao clicar em diferentes seções da página.
- O código está organizado em funções para facilitar a manutenção e compreensão.

Lembre-se de manter a documentação atualizada conforme o código é modificado ou evoluído.