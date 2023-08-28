const validaSenha = (req, res, next) => {
    const senhaCorreta = "cubos123";
    const { senha } = req.query
    if (!senha || senhaCorreta.localeCompare(senha) !== 0) {
        return res.status(401).json({ mensagem: "A senha está incorreta." })
    }
    next();
}



module.exports = {
    validaSenha,
};