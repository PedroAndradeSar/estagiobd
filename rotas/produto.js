const { Router } = require("express"); //chamar a função o recurso Router {desestruturando} da função express
const router = Router();// criar rotas de forma ordenada e organizada.
const { criar, buscarPorId, remover, atualizar, listar  } = require("../controllerBD/produto")//rota para chamar o controller / produto
const model = require('../bd/index')

//Devolver uma lista de objetos ou um objeto
router.get("/:id_produto?", async (req, res) => {//essa rota tem como metodo get, com as vareaveis de REQuisição e RESposta.
  try {
    const { id_produto } = req.params;

    const resultado = id_produto ? await buscarPorId(id_produto) : await listar();

    res.send(resultado);
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ erro });
  }
});

//Criar um recurso novo
router.post("/", async (req, res) => {
  try {
    const { foto, nome, valor, cor, marca } = req.body;

    const resultado = await criar(foto, nome, valor,  cor, marca );

    res.send(resultado);
  } catch (erro) {
    res.status(500).send({ erro });
  }
  // } = req.body;
  // const { id_name, id_produto, id_valor, data, foto, cor, marca } = req.body;

  // const produto = await criar( id_name, id_produto, id_valor, data, foto, cor, marca );
  // console.log(produto)
});

//Atualizar um recurso existente
router.put("/:id_produto", async (req, res) => {//para definir os parametros da rota é colocado "/:"
 
  try{
    let id_produto = req.params.id; // é usado a vareavel REQuisição juntamente com a "parans" que são as vareaveis que trafega pela url no caso "parans.id" - pois esta sendo a mesma propriedade em cima. 
    let dados = req.body;
     

    await atualizar(id_produto, dados);console.log("teste put");
    const resultado = await buscarPorId(id_produto);

    res.send(resultado);
    // res.send("Rota para atualizar um recurso existente" + id); //concatenar o ID
  } catch (erro) {
    res.status(500).send({ erro });
  }
});

//Remover um recurso existente
router.delete("/:id_produto", async (req, res) => {
  // let id = req.params.id; // a função let serve
  // res.send("Rota para deletar um recurso existente");
  try {
    await remover(req.params.id);

    res.send();
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ erro });
  }
});

module.exports = router;
