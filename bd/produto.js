module.exports = (sequelize, DataType) => {
  //sequelize é utilizado como parametro da função
  const Produto = sequelize.define("produto", {
    //novos parametros a serem passados primeiro modelo = "produto" | o segundo são os OBJETOS que irão colocar os atributos como "id_name - id_produtos - id_valor etc"
    id_produto: {
      type: DataType.INTEGER, //DATATYPE  = uma classe, um objeto
      allowNull: false, // deixar o campo nulo, se for true ele pode ser nulo, se for false ele nao pode ser nulo
      primaryKey: true, // atributo relacionado a uma chave primaria
      autoIncrement: true, // esse campo ira ser gerado altomaticamente pelo bando de dados.
    },
    foto: {
      type: DataType.TEXT,
      allowNull: false,
    },
    nome: {
      type: DataType.STRING(200),
      allowNull: false,
    },
    valor: {
      type: DataType.DOUBLE,
      allowNull: false,
    },
    data: {
      type: DataType.DATE,
      // allowNull: false,
      toDefaultValue: new (Date),
    },
    cor: {
      type: DataType.STRING(200),
      allowNull: false,
    },
    marca: {
      type: DataType.STRING(200),
      allowNull: false,  
    },
  }, 
  {
      tableName: "produto", // equivale ao nome da tambela
      timestamps: false, //recurso do tempo (data e hora)
  });
  return Produto;
};
