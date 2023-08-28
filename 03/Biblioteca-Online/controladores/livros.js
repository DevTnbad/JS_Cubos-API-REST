let livros = require('../dados/bancoDeDados')

const listaLivros = (req, res) => {
    return res.status(200).json(livros);
}
const listaLivroPorId = (req, res) => {
    const { id } = req.params;
    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    }
    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id);
    });
    if (!livroEncontrado) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado." });
    }

    return res.status(200).json(livroEncontrado)
}

const adicionarLivro = (req, res) => {
    let { titulo, autor, ano, numPaginas } = req.body;
    const novoId = (livros[livros.length - 1].id + 1);

    if (titulo === undefined || autor === undefined || ano === undefined || numPaginas === undefined) {
        return res.status(400).json({ mensagem: "O preenchimento de todos os campos é obrigatório." })
    }
    if (titulo.trim() === "" || autor.trim() === "") {
        return res.status(400).json({ mensagem: "Os campos nome, sobrenome e curso nao podem esta vazios ou conter somente espaços." })
    }

    const livro = {
        id: novoId,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(livro)
    return res.status(201).json(livro);
}

const substituirLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;
    const livroEncontrado = livros.find((livro) => livro.id === Number(id));
    if (!livroEncontrado) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser substituído para o ID informado." });
    }

    livroEncontrado.titulo = titulo;
    livroEncontrado.autor = autor;
    livroEncontrado.ano = ano;
    livroEncontrado.numPaginas = numPaginas;

    return res.status(200).json({ mensagem: "Livro substituído." });
}
const atualizaLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;
    const livroEncontrado = livros.find((livro) => livro.id === Number(id));
    if (!livroEncontrado) {
        return res.status(404).json({ mensagem: "Não existe livro a ser alterado para o ID informado." });
    }

    livroEncontrado.titulo = !titulo ? livroEncontrado.titulo : titulo;
    livroEncontrado.autor = !autor ? livroEncontrado.autor : autor;
    livroEncontrado.ano = !ano ? livroEncontrado.ano : ano;
    livroEncontrado.numPaginas = !numPaginas ? livroEncontrado.numPaginas : numPaginas;

    return res.status(200).json({ mensagem: "Livro alterado." });
}

const deletarLivro = (req, res) => {
    const { id } = req.params;

    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id);
    })
    if (!livroEncontrado) {
        return res.status(404).json({ mensagem: "Não existe livro a ser removido para o ID informado." })
    }

    livros.splice(livros.indexOf(livroEncontrado), 1);
    return res.status(200).json({ mensagem: "Livro removido." });

}

module.exports = {
    listaLivros,
    listaLivroPorId,
    adicionarLivro,
    substituirLivro,
    atualizaLivro,
    deletarLivro
}