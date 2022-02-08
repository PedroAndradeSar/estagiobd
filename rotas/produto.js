const { Router } = require("express"); //chamar a função o recurso Router {desestruturando} da função express
const router = Router(); // criar rotas de forma ordenada e organizada.

//Devolver uma lista de objetos ou um objeto
router.get("/", (req, res) => { //essa rota tem como metodo get, com as vareaveis de REQuisição e RESposta.
  res.json([
    {
      nome: "Pedro",
    },
    {
      nome: "Henrique",
    },
  ]);
});

module.exports = router;
