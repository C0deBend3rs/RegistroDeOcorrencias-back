const Administrador = require('../models/Administrador');
const Usuario = require('../models/Usuario');
const {Op, QueryTypes} = require('sequelize');
const { use } = require('../routes');

module.exports = {

    async index(req, res) {
        //const adms = await Administrador.findAll();
        const adms = await sequelize.query("SELECT * FROM `administradores`", { type: QueryTypes.SELECT });
        return res.json(adms);
    },

    async search(req, res) {
        const {username} = req.params;
        
        const adms = await Administrador.findAll({
            where: {
                username: username
            },
            include: [{
                association: 'user'
            }]
        },
        );
        
        return res.json(adms);
    },


    async store(req, res) {
       
        const adm = await Administrador.create({
            username: req.body.username,
        });
     
        return res.json(adm);
    }
} 