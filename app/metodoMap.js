//map retorna um NOVO array, não altera o original

function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => { //map precisa retornar algo
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //faz uma cópia de todo o array para outro objeto, alterando apenas o preço
    });
    return livrosComDesconto;
}