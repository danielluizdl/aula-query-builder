const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    // const agenda = await knex.raw('agenda')('select * from agenda')
    // const agenda = await knex('agenda').where('id', 5)
    // const agenda = await knex('agenda').where('id', !=, 5)
    const agenda = await knex('agenda').where({ id: 5 })
    return res.json(agenda);
})

app.listen(3000);