const Predio = require('../models/Predio');
const Filial = require("../models/Filial");

module.exports = {

    async index(req, res) {
        const predios = await Predio.findAll();
        return res.json(predios);
    },

    async search(req, res){
        const {filial_id} = req.params;

        const filial = await Filial.findByPk(filial_id);

        const predios = await Predio.findAll({
            attributes: ['id', 'nome'],
            include: {association: 'filial', where: {id: filial_id}, attributes:[]},
        })

        return res.json(predios);
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