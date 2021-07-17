const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');
const Usuario = require('../models/Usuario');
const Administrador = require('../models/Administrador');
const Instituicao = require('../models/Instituicao');
const Gerenciador = require('../models/Gerenciador');
const Solicitante = require('../models/Solicitante');



const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);
Usuario.init(connection);
Administrador.init(connection);
Instituicao.init(connection);
Gerenciador.init(connection);
Solicitante.init(connection);



User.associate(connection.models);
Address.associate(connection.models); 
Tech.associate(connection.models); 
Usuario.associate(connection.models);
Administrador.associate(connection.models);
Instituicao.associate(connection.models);
Gerenciador.associate(connection.models);
Solicitante.associate(connection.models);


module.exports = connection;

