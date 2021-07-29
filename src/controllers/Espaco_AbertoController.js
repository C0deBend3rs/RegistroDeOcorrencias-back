const Espaco_Aberto = require('../models/Espaco_Aberto');
const Filial = require('../models/Filial');

module.exports = {

    async index(req, res) {
        const espacos = await Espaco_Aberto.findAll();
        return res.json(espacos);
    },

    async search(req, res){
        const {filial_id} = req.params;

        const espacos = await Espaco_Aberto.findAll({
            attributes: ['id', 'nome'],
            include: {association: 'filial', where: {id: filial_id}, attributes:[]},
        })

        return res.json(espacos);
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