const Filial = require('../models/Filial');
const Usuario = require("../models/Usuario");

module.exports = {

    async index(req, res) {
        const filiais = await Filial.findAll();
        return res.json(filiais);
    },

    async search(req, res){
        const {user_id} = req.params;

        const user = await Usuario.findByPk(user_id);

        const filiais = await Filial.findAll({
            attributes: ['id', 'nome'],
            include: {association: 'usuarios', where: {id: user_id}, attributes:[]},
        })

        return res.json(filiais);
    },

    async store(req, res) {
        const adm = await Administrador.findByPk(req.body.adm_criador);
        if(!adm){
            return res.status(400).json({error: "Adm not found"});
        }
         
        const instituicao = await Instituicao.create({
            nome: req.body.nome,
            id_criador: req.body.adm_criador,
            data_fund: req.body.data_fund,
        });
     
        return res.json(instituicao);
    }
} 