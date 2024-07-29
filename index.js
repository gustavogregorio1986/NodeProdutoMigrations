(async() => 
{
    const database = require('./db');
    const produto = require('./produto');

    await database.sync();

    await produto.create(
        {
            Nome: 'Primeiro Teste',
            DataCriacao: Date()
        }
    )

    await produto.create(
        {
            Nome: 'Segundo Teste',
            DataCriacao: Date()
        }
    )

    await produto.create(
        {
            Nome: 'Terceiro Teste',
            DataCriacao: Date()
        }
    )

    const alterProd = await produto.findByPk(2);
    alterProd.Nome = "Arquivo Alterado";
    await alterProd.save();

    produto.destroy({where: {id: 1}})
})();