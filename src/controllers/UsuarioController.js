const Usuario = require('../models/Usuario');
const {Op} = require('sequelize');

module.exports = {

    async index(req, res) {
        const users = await Usuario.findAll();

        return res.json(users);
    },

    async search(req, res) {
        const {username} = req.params;
        
        const user = await Usuario.findOne({
            where: {
                username: username
            }
        });

        if(!user){
            return res.status(400).json({error: 'User not found'})
        }

        return res.json(user);
    },


    async store(req, res) {
       
        const user = await Usuario.create({
            username: req.body.username,
            username_criador: req.body.username_criador
        });
     
        return res.json(user);
    }
} 