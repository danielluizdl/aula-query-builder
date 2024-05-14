const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const agenda = await knex('agenda')
    return res.json(agenda);
})

app.listen(3000);