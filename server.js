const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const produtos = [];

app.post('/produtos', (req, res) => {
    const produto = req.body;
    produtos.push(produto);
    res.status(201).json(produto);
});

app.get('/produtos', (req, res) => {
    res.status(200).json(produtos);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
