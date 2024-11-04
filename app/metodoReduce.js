//metódo reduce executa uma função reducer fornecida por você para cada elemento do array, retornando apenas um valor
//acumulador = acc
//valor atual = cur
//index atual = idx
//array original = src
//maiorPreco = precos.reduce((acc, cur) => acc > cur ? acc : cur);

//reduce = combinar dois valores e devolver um único

function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2); //começa com valor 0
}