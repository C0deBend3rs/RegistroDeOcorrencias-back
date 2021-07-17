const {Op} = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res){


        const users = await User.findAll({
            attributes: ['name', 'nusp'], 
            where: {
                nusp: {
                    [Op.gte]: 10716532
                }
            },
            include: [
                {association: 'addresses', where:{street: 'Rua das Marias'}},
                {association: 'techs', 
                required: false,
                attributes: ['name'],
                where: {
                    name: {
                        [Op.iLike]: 'React%'
                    }
                }}
            ]
        })

        return res.json(users);
    }
}