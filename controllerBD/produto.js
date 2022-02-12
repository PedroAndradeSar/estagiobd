const {Produto, sequelize} = require("../bd");
const Produto = require("../bd/produto");

let controller = {};

controller.criar = async ( id_produto, foto, nome, valor, data, cor, marca) => {
    try{
       return await Produto.create({
        id_produto,
        foto,
        nome,
        valor,
        data,
        cor,
        marca
        });
    } catch (erro) {
        console.log(erro);
        throw erro;
    }
};
controller.listar = async () => {
    try {
        return await Produto.findAll({
            attributes: ["id_produto", "foto", "nome", "valor", "data", "cor", "marca"],
            order: [["nome", "DESC"]],
        });
    } catch (erro) {
        throw erro;
    }
};
controller.buscarPorId = async (id_produto) => {
    try {
        return await Produto.findByPk(id_produto);
    }catch (erro) {
        throw erro;
    }
};
controller.atualizar = async (id, { id_produto, foto, nome, valor, data, cor, marca }) => {
    try {
    return await Produto.update(
    {
        id_produto,
        foto,
        nome,
        valor,
        data,
        cor,
        marca,
    },
    {
        where: {
            id_produto
        }
    })
    } catch (erro) {
        throw erro;
    }
};
controller.remover = async (id_produto) => {
    try {
        return await Produto.destroy({
            where: {
                id_produto,
            },
        })
    } catch (erro) {
        throw erro;
    }
};

module.exports = controller;