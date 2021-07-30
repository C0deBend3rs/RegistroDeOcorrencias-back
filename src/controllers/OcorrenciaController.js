const Ocorrencia = require('../models/Ocorrencia');
const Ocorrencia_Comodo = require('../models/Ocorrencia_Comodo');
const Ocorrencia_Espaco_Aberto = require('../models/Ocorrencia_Espaco_Aberto');

module.exports = {

    async index(req, res) {
        const ocorrencias = await Ocorrencia.findAll();
        return res.json(ocorrencias);
    },

    async search(req, res){
        const {ocorrencia_id} = req.params;

        const ocorrencia = await Ocorrencia.findByPk(ocorrencia_id);

        return res.json(ocorrencia);
    },

    async store(req, res) {
        const {titulo, desc, prioridade, espaco, comodo, userId, url} = req.body;

        const ocorrencia = await Ocorrencia.create({
            descricao: desc,
            titulo,
            prioridade,
            id_criador: userId,
            url
        });

        if(espaco != -1){
            const ocorrencia_esp_aberto = await Ocorrencia_Espaco_Aberto.create({
                id_ocorrencia: ocorrencia.id,
                id_espaco_aberto: espaco
            })
        }else{
            const ocorrencia_comodo = await Ocorrencia_Comodo.create({
                id_ocorrencia: ocorrencia.id,
                id_comodo: comodo
            })
            
        }
     
        return res.json(ocorrencia);
    }
} 