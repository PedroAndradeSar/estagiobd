const express = require("express");
const app = express();

const produto = require("./rotas/produto"); //usado para chamar a rota de produtos

app.get('/', (req, res) => { //quando quer solicitar para o servidor
   res.send({mensagem: "Bem vindo"});  //faz a saida da ação, (resposta)
});

app.use('/produto', produto	); //criar um ponto de entrada para a rota - criando o recurso produto.

app.listen(3001, () => { //manda solicitação front (http) - recebe as requisiçoes da porta "3000", juntamente com uma função
  console.log("Aplicação Iniciada"); //avisa que esta rodando
});
