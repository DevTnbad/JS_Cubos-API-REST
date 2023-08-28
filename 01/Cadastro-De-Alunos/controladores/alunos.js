let { alunos, contadorIdAlunos } = require('../dados/bancoDeDados')
const cursos = require('../dados/cursos')

const listaAlunos = (req, res) => {
    return res.status(200).json(alunos);
}
const listaAlunoPorId = (req, res) => {
    const { id } = req.params;

    const alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });
    if (!alunoEncontrado) {
        return res.status(404)
            .json({ mensagem: 'O aluno não foi encontrado.' });
    }

    return res.status(200).json(alunoEncontrado)
}

const cadastraAluno = (req, res) => {
    let { nome, sobrenome, idade, curso } = req.body;

    if (nome === undefined || sobrenome === undefined || idade === undefined || curso === undefined) {
        return res.status(400)
            .json({ mensagem: "O preenchimento de todos os campos é obrigatório." })
    }
    if (nome.trim() === "" || sobrenome.trim() === "" || curso.trim() === "") {
        return res.status(400)
            .json({ mensagem: "Os campos nome, sobrenome e curso nao podem esta vazios ou conter somente espaços." })
    }
    if (idade < 18) {
        return res.status(400)
            .json({ mensagem: "Idade menor que a permitida." })
    }

    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    sobrenome = sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1).toLowerCase();
    curso = curso.charAt(0).toUpperCase() + curso.slice(1).toLowerCase();
    idade = idade;

    if (!cursos.includes(curso)) {
        return res.status(400)
            .json({ mensagem: "Curso inválido." })
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

    const alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!alunoEncontrado) {
        return res.status(404).json({ mensagem: 'O aluno a ser excluído não foi encontrado' })
    }

    alunos.splice(alunos.indexOf(alunoEncontrado), 1);
    return res.status(200).send();

}

const atualizaAluno = (req, res) => {
    let id = Number(req.params.id);
    id = Number(id);

    const { nome, sobrenome, idade, curso } = require = req.body;

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400)
            .json({ mensagem: 'O preenchimento de todos os dados é obrigatório.' })
    }

    if (!cursos.includes(curso)) {
        return res.status(404)
            .json({ mensagem: "O curso informado é Inválido." })
    }

    const alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === id;
    });

    if (!alunoEncontrado) {
        return res.status(404)
            .json({ mensagem: "O aluno a ser atualizado não foi encontrado" })
    }

    alunoEncontrado.nome = nome;
    alunoEncontrado.sobrenome = sobrenome;
    alunoEncontrado.idade = Math.floor(idade);
    alunoEncontrado.curso = curso;

    return res.status(200).send();
}

const atualizaNomeDoAluno = (req, res) => {
    const id = req.params.id;
    let { nome } = req.body;

    const alunoEnconrado = alunos.find(aluno => {
        return aluno.id === Number(id);
    })
    if (!alunoEnconrado) {
        return res.status(404)
            .json({ mensagem: 'Aluno nao encontrado.' })
    }
    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    alunoEnconrado.nome = nome;

    return res.status(204).send();
}

const atualizaSobrenomeDoAluno = (req, res) => {
    const id = req.params.id;
    let { sobrenome } = req.body;

    const alunoEnconrado = alunos.find(aluno => {
        return aluno.id === Number(id);
    })
    if (!alunoEnconrado) {
        return res.status(404)
            .json({ mensagem: 'Aluno nao encontrado.' })
    }
    sobrenome = sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1).toLowerCase();
    alunoEnconrado.sobrenome = sobrenome;

    return res.status(204).send();
}

const atualizaIdadeDoAluno = (req, res) => {
    const id = req.params.id;
    let { idade } = req.body;

    const alunoEnconrado = alunos.find(aluno => {
        return aluno.id === Number(id);
    })
    if (!alunoEnconrado) {
        return res.status(404)
            .json({ mensagem: 'Aluno nao encontrado.' })
    }

    if (idade < 18) {
        return res.status(400)
            .json({ mensagem: "Idade menor que a permitida." })
    }
    alunoEnconrado.idade = Math.floor(idade);

    return res.status(204).send();
}

const atualizaCursoDoAluno = (req, res) => {
    const id = req.params.id;
    let { curso } = req.body;

    const alunoEnconrado = alunos.find(aluno => {
        return aluno.id === Number(id);
    })
    if (!alunoEnconrado) {
        return res.status(404)
            .json({ mensagem: 'Aluno nao encontrado.' })
    }
    curso = curso.charAt(0).toUpperCase() + curso.slice(1).toLowerCase();

    if (!cursos.includes(curso)) {
        return res.status(404)
            .json({ mensagem: "O curso informado é Inválido." })
    }

    alunoEnconrado.curso = curso;

    return res.status(204).send();
}

module.exports = {
    listaAlunos,
    listaAlunoPorId,
    cadastraAluno,
    deletarAluno,
    atualizaAluno,
    atualizaNomeDoAluno,
    atualizaSobrenomeDoAluno,
    atualizaIdadeDoAluno,
    atualizaCursoDoAluno,
}