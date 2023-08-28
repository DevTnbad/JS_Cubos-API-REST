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
    if (isNaN(Number(id))) {
        return res.status(400)
            .json({ mensagem: 'O ID deve ser um número válido.' });
    }
    next();
}
module.exports = {
    validaSenha,
    verificaSeIdENumero,
};