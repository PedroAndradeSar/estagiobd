const { Router } = require("express"); //chamar a função o recurso Router {desestruturando} da função express
const router = Router(); // criar rotas de forma ordenada e organizada.

//Devolver uma lista de objetos ou um objeto
router.get("/", (req, res) => {
  //essa rota tem como metodo get, com as vareaveis de REQuisição e RESposta.
  res.json([
    {
      nome: "Pedro",
    },
    {
      nome: "Henrique",
    },
  ]);
});

//Criar um recurso novo
router.post("/", (req, res) => {
  console.log(req.body); //metodo usado para enchergar a msg realziada no post
  res.send("Rota para criar produto");
});

//Atualizar um recurso existente
router.put("/:id", (req, res) => {
  //para definir os parametros da rota é colocado "/:"
  let id = req.params.id; // é usado a vareavel REQuisição juntamente com a "parans" que são as vareaveis que trafega pela url no caso "parans.id" - pois esta sendo a mesma propriedade em cima.
  res.send("Rota para atualizar um recurso existente" + id); //concatenar o ID
});

//Remover um recurso existente
router.delete("/:id", (req, res) => {
  let id = req.params.id; // a função let serve
  res.send("Rota para deletar um recurso existente");
});

module.exports = router;
