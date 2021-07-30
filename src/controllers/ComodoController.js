const Comodo = require('../models/Comodo');
const Usuario = require("../models/Usuario");

module.exports = {

    async index(req, res) {
        const comodos = await Comodo.findAll();
        return res.json(comodos);
    },

    async search(req, res){
        const {predio_id} = req.params;

        const comodos = await Comodo.findAll({
            attributes: ['id', 'nome'],
            include: {association: 'predio', where: {id: predio_id}, attributes:[]},
        })

        return res.json(comodos);
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