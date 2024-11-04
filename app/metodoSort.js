//array não é uma ordenação estável
//em sort é feito um teste para definir a ordem porque ele ordena automaticamente pela ordem do unicode
// a - b = menor pro maior || b - a = maior pro menor

const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreço);

function ordenarLivrosPorPreço() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
};

