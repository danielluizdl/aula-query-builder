const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    // const agenda = await knex.raw('agenda')('select * from agenda')
    // const agenda = await knex('agenda').where('id', 5)
    // const agenda = await knex('agenda').where('id', !=, 5)
    // const agenda = await knex('agenda').where({ id: 5 }).first()
    // const agenda = await knex('agenda').whereNull('email')
    // const agenda = await knex('agenda').whereNotNull('email')
    // const agenda = await knex('agenda').whereBetween('id', [10, 13]).orderBy('id', 'desc')
    // const agenda = await knex('agenda').distinct('email')

    // const agenda = await knex('agenda').whereNull('email').count('id')
    // const agenda = await knex('agenda').whereNull('email').sum('id')
    // const agenda = await knex('agenda').whereNull('email').avg('id')
    // const agenda = await knex('agenda').whereNull('email').min('id')
    const agenda = await knex('agenda').whereNull('email').max('id')

    return res.json(agenda);
})

app.listen(3000);