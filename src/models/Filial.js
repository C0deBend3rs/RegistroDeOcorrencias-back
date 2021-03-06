const {Model, DataTypes, Sequelize} = require('sequelize');

class Filial extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING(64),
            data_fund: DataTypes.DATE,
            cidade: DataTypes.STRING(255),
            estado: DataTypes.STRING(2),
            rua: DataTypes.STRING(255),
            cep: DataTypes.STRING(8),
            numero: DataTypes.INTEGER,
            nome_diretor: DataTypes.STRING(64),
            tel_fixo: DataTypes.STRING(16),
            tel_cel: DataTypes.STRING(16)
        }, {
            sequelize,
            tableName: 'filiais'
        })
    }

    static associate(models) {
        this.belongsTo(models.Instituicao, {foreignKey: 'id_instituicao', as: 'instituicao'});
        this.belongsTo(models.Administrador, {foreignKey: 'id', as: 'adm_criador'});
        this.hasMany(models.Predio, {foreignKey: 'id', as: 'predios'});
        this.hasMany(models.Espaco_Aberto, {foreignKey: 'id', as: 'espacos_abertos'});
        this.belongsToMany(models.Usuario, {foreignKey: 'id_filial', through: 'usuario_filial', as: 'usuarios'});
    }
}

module.exports = Filial;