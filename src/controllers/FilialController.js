const Filial = require('../models/Filial');
const Instituicao = require("../models/Instituicao");

module.exports = {

    async index(req, res) {
        const filiais = await Filial.findAll({include: {association: 'instituicao'}});
        return res.json(filiais);
    },

    async search(req, res){
        const {instituicao_id} = req.params;

        const user = await Instituicao.findByPk(instituicao_id);

        const filiais = await Filial.findAll({
            attributes: ['id', 'nome'],
            include: {association: 'instituicao', where: {id: instituicao_id}, attributes:[]},
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