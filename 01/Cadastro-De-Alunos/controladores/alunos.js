let { alunos, contadorIdAlunos } = require('../dados/bancoDeDados')
const cursos = require('../dados/cursos')

const listaAlunos = (req, res) => {
    return res.status(200).json(alunos);
}
const listaAlunoPorId = (req, res) => {
    const { id } = req.params;
    const alunoEncontrado = req.aluno;

    return res.status(200).json(alunoEncontrado)
}

const cadastraAluno = (req, res) => {
    let { nome, sobrenome, idade, curso } = req.body;

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: "O preenchimento de todos os campos é obrigatório." })
    }
    if (nome.trim() === "" || sobrenome.trim() === "" || curso.trim() === "") {
        return res.status(400).json({ mensagem: "Os campos nome, sobrenome e curso nao podem esta vazios ou conter somente espaços." })
    }
    if (idade < 18) {
        return res.status(400).json({ mensagem: "Idade menor que a permitida." })
    }

    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    sobrenome = sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1).toLowerCase();
    curso = curso.charAt(0).toUpperCase() + curso.slice(1).toLowerCase();
    idade = idade;

    if (!cursos.includes(curso)) {
        return res.status(400).json({ mensagem: "Curso inválido." })
    }

    const aluno = {
        id: contadorIdAlunos++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(aluno)
    return res.status(201).send();
}

const deletarAluno = (req, res) => {
    const { id } = req.params;
    const alunoEncontrado = req.aluno;

    alunos.splice(alunos.indexOf(alunoEncontrado), 1);
    return res.status(200).send();

}

const atualizaAluno = (req, res) => {
    let id = Number(req.params.id);
    const alunoEncontrado = req.aluno;
    id = Number(id);

    const { nome, sobrenome, idade, curso } = require = req.body;

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: 'O preenchimento de todos os dados é obrigatório.' })
    }

    if (!cursos.includes(curso)) {
        return res.status(404).json({ mensagem: "O curso informado é Inválido." })
    }

    alunoEncontrado.nome = nome;
    alunoEncontrado.sobrenome = sobrenome;
    alunoEncontrado.idade = Math.floor(idade);
    alunoEncontrado.curso = curso;

    return res.status(204).send();
}

const atualizaPropriedadeDoAluno = (req, res) => {
    const id = req.params.id;
    let { nome, sobrenome, idade, curso } = req.body;
    const alunoEncontrado = req.aluno;

    nome !== undefined
        ? nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase() : nome;
    sobrenome !== undefined
        ? sobrenome = sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1).toLowerCase() : sobrenome;
    idade !== undefined
        ? idade = Math.floor(idade) : idade;
    curso !== undefined
        ? curso = curso.charAt(0).toUpperCase() + curso.slice(1).toLowerCase() : curso;

    if (curso && !cursos.includes(curso)) {
        return res.status(404)
            .json({ mensagem: "O curso informado é Inválido." })
    }

    alunoEncontrado.nome = nome ?? alunoEncontrado.nome;
    alunoEncontrado.sobrenome = sobrenome ?? alunoEncontrado.sobrenome;
    alunoEncontrado.idade = idade ?? alunoEncontrado.idade;
    alunoEncontrado.curso = curso ?? alunoEncontrado.curso;

    return res.status(204).send();
}

module.exports = {
    listaAlunos,
    listaAlunoPorId,
    cadastraAluno,
    deletarAluno,
    atualizaAluno,
    atualizaPropriedadeDoAluno,
}