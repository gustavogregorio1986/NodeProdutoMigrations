const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbProduto','root','fazenda',
{
    dialect:'mysql', host:'localhost'
});

module.exports = componenteSequelize;