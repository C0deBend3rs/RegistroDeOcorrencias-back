const { Model, DataTypes } = require('sequelize')

class Instituicao extends Model {
  static init(sequelize) {
    super.init({}, {
      sequelize: sequelize,
      tableName: 'instituicoes'
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

module.exports = Instituicao