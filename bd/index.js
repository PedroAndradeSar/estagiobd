const { Sequelize } = require(" sequelize "); //chama so pacote sequelize, realizando a desestruturação.

const options = { //usado para chamar as requisiçoes para fazer a comunicação com o banco de dados. - é usado as credenciais abaixo do pg.admin.
  username: "postgres", //nome padrão
  password: "pedro1",
  host: "localhost",
  dialect: "postgres", //definir qual banco sera usado, no caso o pgadmin(postgre)
  database: "viptech", //nome do banco
};

const sequelize = new Sequelize(options); //usado para fazer a conexão, instancia da conexão [sequelize = variavel que recebe a conexão e Sequelize é a classe da biblioteca (options = as opçoes para se conectar)]

sequelize
  .authenticate()//authenticate = Metodo(FUNÇÃ0) de autenticação
  .then(() => {// devolve a promessa = .then (caso de certo ele ira execultar o que esta dentro do .then)
     
    console.log("Conectado ao Banco de Dados com Sucesso"); //deu certo
  })
  .catch((erro) => {// .catch = usado para capturar algum erro ou problema
    console.log(erro);// deu errado
  });

  module.exports = { sequelize, Sequelize };  //contem as aplicaçoes de dados e pode ser carregado em qualquer momento da aplicação [ sequelize = vareavel que recebe a conexão - Sequelize =  contem a biblioteca]
