const express = require("express");
const rotas = require("./rotas");

const app = express();

// O express.json() serve para o servidor aceitar apenas dados/informções no formato JSON
app.use(express.json());

app.use(rotas);

app.listen(3000);
