const express = require('express');
const rotas = require('./roteador');
const app = express();
// const middleware = require('./intermediarios')

app.use(express.json());
// app.use(middleware.validaSenha);
app.use(rotas);

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor Biblioteca-Online Up na porta ${porta}`);
})