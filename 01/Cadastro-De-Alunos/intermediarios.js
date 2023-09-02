const validaSenha = (req, res, next) => {
    const senhaCorreta = "cubos123";
    const { senha } = req.query
    if (!senha || senhaCorreta.localeCompare(senha) !== 0) {
        return res.status(401).json({ mensagem: "A senha está incorreta." })
    }
    next();
}

const verificaSeIdENumero = (req, res, next) => {
    const { id } = req.params;
    const { alunos } = require('./dados/bancoDeDados')
    if (isNaN(Number(id))) {
        return res.status(400)
            .json({ mensagem: 'O ID deve ser um número válido.' });
    }
    const alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });
    if (!alunoEncontrado) {
        return res.status(404)
            .json({ mensagem: 'O aluno não foi encontrado.' });
    }
    req.aluno = alunoEncontrado;
    next();
}

const formataDados = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;
    nome !== undefined
        ? nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase() : nome;
    sobrenome !== undefined
        ? sobrenome = sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1).toLowerCase() : sobrenome;
    idade !== undefined
        ? idade = Math.floor(idade) : idade;
    curso !== undefined
        ? curso = curso.charAt(0).toUpperCase() + curso.slice(1).toLowerCase() : curso;

    req.alunoNome = nome;
    req.alunoSobrenome = sobrenome;
    req.alunoIdade = idade;
    req.alunoCurso = curso;
}
module.exports = {
    validaSenha,
    verificaSeIdENumero,
    formataDados,
};