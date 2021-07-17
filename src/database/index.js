const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Administrador = require('../models/Administrador');
const Instituicao = require('../models/Instituicao');
const Gerenciador = require('../models/Gerenciador');
const Solicitante = require('../models/Solicitante');
const Filial = require('../models/Filial');
const Predio = require('../models/Predio');
const Comodo = require('../models/Comodo');
const Espaco_Aberto = require('../models/Espaco_Aberto');
const Ocorrencia = require('../models/Ocorrencia');
const Comentario = require('../models/Comentario');
const Ocorrencia_Espaco_Aberto = require('../models/Ocorrencia_Espaco_Aberto');
const Ocorrencia_Comodo = require('../models/Ocorrencia_Comodo');




const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Administrador.init(connection);
Instituicao.init(connection);
Gerenciador.init(connection);
Solicitante.init(connection);
Filial.init(connection);
Predio.init(connection);
Comodo.init(connection);
Espaco_Aberto.init(connection);
Ocorrencia.init(connection);
Comentario.init(connection);
Ocorrencia_Espaco_Aberto.init(connection);
Ocorrencia_Comodo.init(connection);





Usuario.associate(connection.models);
Administrador.associate(connection.models);
Instituicao.associate(connection.models);
Gerenciador.associate(connection.models);
Solicitante.associate(connection.models);
Filial.associate(connection.models);
Predio.associate(connection.models);
Comodo.associate(connection.models);
Espaco_Aberto.associate(connection.models);
Ocorrencia.associate(connection.models);
Comentario.associate(connection.models);
Ocorrencia_Espaco_Aberto.associate(connection.models);
Ocorrencia_Comodo.associate(connection.models);




module.exports = connection;

