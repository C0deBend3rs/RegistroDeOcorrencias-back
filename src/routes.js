const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const AdministradorController = require('./controllers/AdministradorController');
const InstituicaoController = require('./controllers/InstituicaoController');
const FilialController = require('./controllers/FilialController');
const PredioController = require('./controllers/PredioController');
const ComodoController = require('./controllers/ComodoController');
const Espaco_AbertoController = require('./controllers/Espaco_AbertoController');
const OcorrenciaController = require('./controllers/OcorrenciaController');

const routes = express.Router();


routes.post('/users/register', UsuarioController.store);   
routes.post('/users/login', UsuarioController.login);  
routes.get('/users', UsuarioController.index);


routes.post('/adms', AdministradorController.store);  
routes.get('/adms', AdministradorController.index);   
routes.get('/adms/:username', AdministradorController.search);   

routes.get('/instituicoes', InstituicaoController.index);
routes.get('/instituicoes/:user_id', InstituicaoController.search);
routes.post('/instituicoes', InstituicaoController.store);

routes.get('/filiais', FilialController.index);   
routes.get('/filiais/:instituicao_id', FilialController.search);   

routes.get('/predios', PredioController.index);
routes.get('/predios/:filial_id', PredioController.search);

routes.get('/comodos', ComodoController.index);
routes.get('/comodos/:predio_id', ComodoController.search);

routes.get('/espaco-aberto', Espaco_AbertoController.index);
routes.get('/espaco-aberto/:filial_id', Espaco_AbertoController.search);


routes.get('/ocorrencias', OcorrenciaController.index);
routes.post('/ocorrencias', OcorrenciaController.store);


module.exports = routes;    