let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI); //resposta da requisição para o endpoint da API 
    livros = await res.json();
    //livros = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livros);

    console.table(livros); //mostra uma tabela com as informações no console
};




