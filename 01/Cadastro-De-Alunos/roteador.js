const express = require('express');
const alunos = require('./controladores/alunos');
const intermediarios = require('./intermediarios');

const rotas = express.Router();

// rotas.get('/', test);
rotas.get('/alunos', alunos.listaAlunos);
rotas.get('/alunos/:id', intermediarios.verificaSeIdENumero, alunos.listaAlunoPorId);
rotas.post('/alunos', alunos.cadastraAluno);
rotas.delete('/alunos/:id', intermediarios.verificaSeIdENumero, alunos.deletarAluno);
rotas.put('/alunos/:id', intermediarios.verificaSeIdENumero, alunos.atualizaAluno);
rotas.patch('/alunos/:id/nome', intermediarios.verificaSeIdENumero, alunos.atualizaNomeDoAluno);
rotas.patch('/alunos/:id/sobrenome', intermediarios.verificaSeIdENumero, alunos.atualizaSobrenomeDoAluno);
rotas.patch('/alunos/:id/idade', intermediarios.verificaSeIdENumero, alunos.atualizaIdadeDoAluno);
rotas.patch('/alunos/:id/curso', intermediarios.verificaSeIdENumero, alunos.atualizaCursoDoAluno);

module.exports = rotas;