const express = require('express');

const app = express();

//banco de dados
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
];

app.use(express.json());

const consultarLista = (req, res) => {
    return res.status(200).json(convidados)
}

const consultarConvidadoPorNome = (req, res) => {
    const { nome } = req.params;

    const convidadoEncontrado = convidados.find((convidado) => {
        return convidado === nome;
    })
    if (!convidadoEncontrado) {
        return res.status(404).json({ mensagem: "O convidado buscado não está presente na lista." })
    } else {
        return res.status(200).json({ mensagem: "Convidado presente." })
    }

}

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    if (convidados.includes(nome)) {
        return res.status(200).json({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." });
    }
    convidados.push(nome);
    return res.status(200).json({ "mensagem": "Convidado adicionado." });

}

const deletarConvidado = (req, res) => {
    const { nome } = req.params;

    if (!convidados.includes(nome)) {
        return res.status(200).json({ "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." })
    }
    convidados.splice(nome, 1);
    return res.status(200).json({ "mensagem": "Convidado removido." });
}

//rotas
app.get('/convidados', consultarLista);
app.get('/convidados/:nome', consultarConvidadoPorNome);
app.post('/convidados', adicionarConvidado);
app.delete('/convidados/:nome', deletarConvidado);

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor Lista de Convidados Up, na porta ${porta}`);
})