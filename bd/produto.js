mododule.exports = (sequelize, DataType) => {
  //sequelize é utilizado como parametro da função
  const Produto = sequelize.define("produto", {
    //novos parametros a serem passados primeiro modelo = "produto" | o segundo são os OBJETOS que irão colocar os atributos como "id_name - id_produtos - id_valor etc"
    id_name: {
      type: DataType.INTERGER, //DATATYPE  = uma classe, um objeto
      allowNull: false, // deixar o campo nulo, se for true ele pode ser nulo, se for false ele nao pode ser nulo
      primaryKey: true, // atributo relacionado a uma chave primaria
      autoIncrement: true, // esse campo ira ser gerado altomaticamente pelo bando de dados.
    },
    id_produto: {
      type: DataType.INTERGER,
      allowNull: false,
      key
    },
    id_valor: {
      type: DataType.BITVARYRING,
      allowNull: false,
    },
    data: {
      type: DataType.BITVARYRING,
      allowNull: false,
    },
    foto: {
      type: DataType.TEXT,
      allowNull: false,
    },
    cor: {
      type: DataType.INTERGER,
      allowNull: false,
    },
    marca: {
      type: DataType.INTERGER,
      allowNull: false,
    },
  }, {
      tableName: "produto", // equivale ao nome da tambela
      timestamps: false, //recurso do tempo (data e hora)
  });
  return Produto;
};
