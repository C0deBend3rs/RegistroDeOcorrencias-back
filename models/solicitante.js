const { Model, DataTypes } = require('sequelize')

class Solicitante extends Model {
  static init(sequelize) {
    super.init({}, {
      sequelize: sequelize,
      tableName: 'solicitantes'
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

module.exports = Solicitante