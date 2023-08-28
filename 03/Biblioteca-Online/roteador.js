const express = require('express');
const { listaLivros, listaLivroPorId, adicionarLivro, substituirLivro, atualizaLivro, deletarLivro } = require('./controladores/livros');

const rotas = express.Router();

// rotas.get('/', test);
rotas.get('/livros', listaLivros);
rotas.get('/livros/:id', listaLivroPorId);
rotas.post('/livros', adicionarLivro);
rotas.put('/livros/:id', substituirLivro);
rotas.patch('/livros/:id', atualizaLivro);
rotas.delete('/livros/:id', deletarLivro);

module.exports = rotas;