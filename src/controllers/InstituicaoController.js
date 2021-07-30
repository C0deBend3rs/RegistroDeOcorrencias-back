const Instituicao = require('../models/Instituicao');
const {Op} = require('sequelize');

module.exports = {

    async index(req, res) {
        const instituicoes = await Instituicao.findAll();
        return res.json(instituicoes);
    },

    async search(req, res) {
        const {user_id} = req.params
        const instituicoes = await Instituicao.findAll({
            attributes: ['id', 'nome'],
            include: {association: 'filiais', attributes:[], include:{
                association: 'usuarios', where: {id:user_id}, attributes:[]
            }}
        })

        return res.json(instituicoes)
    },

    async store(req, res) {
        const adm = await Administrador.findByPk(req.body.adm_criador);
        if(!adm){
            return res.status(400).json({error: "Adm not found"});
        }

        const {nome, adm_criador, data_fund} = req.body;
         
        const instituicao = await Instituicao.create({
            nome, 
            id_criador: adm_criador,
            data_fund,
        });
     
        return res.json(instituicao);
    }
} 