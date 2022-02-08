const express = require("express");
const app = express();

app.listen(3001, () => {//manda solicitação front (http) - recebe as requisiçoes da porta "3000", juntamente com uma função
  console.log("Aplicação Iniciada"); //avisa que esta rodando
});
