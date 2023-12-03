# Calculadora de bhaskara 
## Desenvolvedores do Projeto
- <a href="https://github.com/BradKynndy">Brad </a>
- <a href="https://github.com/BrunoHenrique04">Bruno </a>
- <a href="https://github.com/Eduardokpn">Eduardo </a>
- <a href="">Thayna </a>
- <a href="https://github.com/VitorSouzaLuz">Vitor </a>
## Documentação do Código

## Estrutura de Arquivos
- **<a href="https://github.com/AndrowDev/Programacao-Web-ETEC/tree/97c5f5f934e844e31e2addc588e2bfbbc1939285/Trabalho%20Interdiciplinar%201%C2%B0%20Semestre%20ETEC%20-%20HAS">Trabalho Interdiciplinar 1° Semestre ETEC - HAS</a>** Diretório do projeto.
- **index.html:** Página principal da aplicação.
- **calculadora.html:** Página da calculadora de equação de segundo grau.
- **script.js:** Script JavaScript para a lógica da calculadora e interações.
- **dropdown.js:** Script JavaScript para a funcionalidade de dropdown no menu.
- **style.css:** Folha de estilo principal.
- **style2.css:** Folha de estilo focada na pagina da calculadora com personalizações específicas.
- **README.md:** Documentação do código em formato Markdown.

## index.html

### Estrutura HTML
O arquivo `index.html` contém a estrutura básica de uma página HTML. Ele inclui as tags essenciais como `<!DOCTYPE html>`, `<html>`, `<head>`, `<meta>`, `<title>`, `<link>`, `<script>`, `<body>`, `<nav>`, `<div>`, `<a>`, `<button>`, e `<footer>`. 

### Elementos Principais
1. **Menu de Navegação (`<nav>`):** Contém o logotipo e um botão de dropdown.
2. **Conteúdo Principal (`<div class="content">`):** Apresenta informações sobre a aplicação e um botão para acessar a calculadora.
3. **Rodapé (`<footer class="container">`):** Inclui um texto e uma imagem.

## calculadora.html

### Estrutura HTML
O arquivo `calculadora.html` segue uma estrutura semelhante à do `index.html`. Ele compartilha os mesmos elementos principais.

## script.js

### Variáveis Principais
- **Variáveis de Entrada (`a`, `b`, `c`):** Armazenam os valores dos coeficientes da equação de segundo grau.
- **Elementos do DOM (`x1resp`, `x2resp`, `calcBtn`, etc.):** Referenciam elementos HTML para manipulação.

### Funções Principais
1. **`bhaskara()`:** Calcula as raízes da equação de segundo grau utilizando a fórmula de Bhaskara.
2. **`exibirDelta()`:** Exibe o passo a passo do cálculo do delta.
3. **`exibirBaskhara()`:** Exibe o passo a passo do cálculo da fórmula de Bhaskara.
4. **`resetarCampos()`:** Limpa os campos e mensagens.

### Event Listeners
- **`calcBtn`:** Chama a função `bhaskara` ao clicar no botão de calcular.
- **Auto Scroll:** Rola a página automaticamente para seções específicas ao clicar em determinados elementos.

### Pop-up de Dica
- Um pop-up de dica é exibido ao carregar a página, incentivando o usuário a explorar a calculadora.

## dropdown.js

### Funções
- **`dropDown()`:** Mostra/oculta o conteúdo do dropdown ao clicar no botão correspondente.

### Event Listeners
- **`dropDownBtn`:** Ativa a função `dropDown` ao clicar no botão.

## style.css e style2.css

Ambos os arquivos contêm regras de estilo para a aplicação. O `style2.css` inclui personalizações adicionais, como estilos para o coach mark e a página de calculadora.

### style2.css
- **`@import url('style.css');`** Importa classes do css como a classe menu e as fontes
