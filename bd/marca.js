module.exports = (sequelize, DataTypes) => {
  const Marca = sequelize.define(
    "marca",
    {
      id_marca: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      marca: {
        type: DataType.INTEGER,
        allowNull: false,
        references: {
          model: "produto",
          key: "id",
        },
      },
    },
    {
      tableName: "marca",
      timestamps: fase,
    }
  );

  return Marca;
};
