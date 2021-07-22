const { Model, DataTypes } = require('sequelize')

class Gerenciador extends Model {
  static init(sequelize) {
    super.init({}, {
      sequelize: sequelize,
      tableName: 'gerenciadores'
    })
  }

  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: {
        field:"username"
      }, as: "usuario"
    })
  }
}

module.exports = Gerenciador