const {Produto, sequelize} = require("../bd");
//const Produto = require("../bd/produto");

let controller = {};

//criar produto com os seguntes requisitos
controller.criar = async ( foto, nome, valor, cor, marca) => {
    try{
        console.log("teste put");
       return await Produto.create({
       
        foto,
        nome,
        valor,
     
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
controller.atualizar = async (id_produto, { foto, nome, valor,  cor, marca }) => {
    // console.log("teste put");
    try {
        // console.log("teste put");
    return await Produto.update(
    {
        foto,
        nome,
        valor,
        cor,
        marca,
    },
    {
        where: {
            id_produto,
        }
    })
    } catch (erro) { 
        // console.log(erro)
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