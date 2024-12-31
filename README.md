# Pokédex Web Page - JS

Esta página web é uma implementação simples de uma Pokédex, construída com **HTML**, **CSS** e **JavaScript**. A Pokédex exibe uma lista de Pokémons, com a possibilidade de carregar mais itens conforme necessário. A aplicação usa a PokéAPI para buscar os dados de cada Pokémon e apresenta as informações de forma organizada e intuitiva.
Foi implementado também, um modal (pop-up) pra exibir alguns detalhes dos Pokemons ao clicar no card de cada Pokemon.

## Tecnologias Utilizadas

-   **HTML**: Estruturação do conteúdo e elementos da página.
-   **CSS**: Design responsivo e estilização usando um tema moderno e minimalista, com suporte a fontes externas (Roboto) e a biblioteca Normalize.css para garantir consistência entre diferentes navegadores.
-   **JavaScript**: Manipulação da DOM, integração com a PokéAPI e implementação da funcionalidade de carregamento dinâmico de Pokémons.

## Funcionalidades

-   **Visualização da lista de Pokémons**: A lista é carregada dinamicamente com a opção de exibir mais Pokémons por meio de um botão de "Load More...".
-   **Paginação simples**: A página permite carregar mais Pokémons sem recarregar a página.
-   **Visualização de detalhes dos Pokémons**: Uma janela é carregada dinamicamente para exibir detalhes do Pokemon ao clicar no card de um Pokemon específico.

## Estrutura do Projeto

-   `index.html`: Estrutura principal da página, incluindo referências aos arquivos CSS e JavaScript.
-   `assets/css/`: Contém os arquivos de estilização (`global.css`, `pokedex.css` e `modal.css`).
-   `assets/js/`: Contém os arquivos JavaScript responsáveis pela lógica da aplicação, incluindo a interação com a PokéAPI (`pokemon-model.js`, `poke-api.js`, `main.js`).

## Como Executar

1.  Clone o repositório ou baixe os arquivos.
2. -   Para executar o projeto corretamente, é necessário rodá-lo em um **servidor local** (isso porque o JavaScript pode enfrentar problemas ao fazer requisições de APIs externas diretamente do sistema de arquivos).
    
    Você pode usar o seguintes método para criar um servidor local:
    
    -   **VSCode com Live Server**:
        -   Instale a extensão **Live Server** no Visual Studio Code.
        -   Abra o projeto no VSCode.
        -   Clique com o botão direito no arquivo `index.html` e selecione a opção **Open with Live Server**.
    
3.   A página será carregada e exibirá uma lista inicial de Pokémons. Para ver mais, clique no botão "Load More...".
