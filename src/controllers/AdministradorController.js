const Administrador = require('../models/Administrador');
const Usuario = require('../models/Usuario');

module.exports = {

    async index(req, res) {
        const adms = await Administrador.findAll();
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
            id: req.body.id_user,
            username: req.body.username
        });
     
        return res.json(adm);
    }
} 