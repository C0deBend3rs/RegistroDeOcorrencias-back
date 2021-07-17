const User = require('../models/User');
const {Op} = require('sequelize');

module.exports = {

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async search(req, res) {
        const {user_id} = req.params;

        const users = await User.findAll({
            where: {
                id:{
                    [Op.eq]: user_id
                }

            }
        });

        return res.json(users);
    },


    async store(req, res) {
        const {name, nusp} = req.body;

        const user = await User.create({name, nusp});

        return res.json(user);
    }
} 