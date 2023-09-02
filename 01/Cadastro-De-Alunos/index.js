const express = require('express');
const rotas = require('./roteador');
const app = express();
const intermediarios = require('./intermediarios')

app.use(express.json());
app.use(intermediarios.validaSenha);
app.use(rotas);

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor Cadastro-de-Alunos Up na porta ${porta}`);
})