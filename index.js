const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());//onitegração com o banco de dados 
app.use(express.json());//recurso que converte o body no que iremos usar, no caso o "json", pega as informaçoes e salva no banco de dados, para acessar os valores das variaveis usa o req.body.

const produto = require("./rotas/produto"); //usado para chamar a rota de produtos
const {sequelize} = require("./bd"); //Usado para realizar a rota para o banco de dados utilizando o metodo sequilize     *ESTA DANDO ERRO**

app.get('/', (req, res) => { //quando quer solicitar para o servidor
   res.send({mensagem: "Bem vindo"});  //faz a saida da ação, (resposta)
});

app.use('/produto', produto	); //criar um ponto de entrada para a rota - criando o recurso produto.

app.listen(3001, () => { //manda solicitação front (http) - recebe as requisiçoes da porta "3000", juntamente com uma função
  console.log("Aplicação Iniciada"); //avisa que esta rodando
});
