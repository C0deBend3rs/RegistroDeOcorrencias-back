const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const AdministradorController = require('./controllers/AdministradorController');
/*
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');
*/

const routes = express.Router();


routes.post('/users', UsuarioController.store);   
routes.get('/users', UsuarioController.index);
routes.get('/users/:username', UsuarioController.search);


routes.post('/adms', AdministradorController.store);  
routes.get('/adms', AdministradorController.index);   
routes.get('/adms/:username', AdministradorController.search);   


/* 
routes.post('/users', UserController.store);  
routes.get('/users/:user_id', UserController.search);  

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);
*/
module.exports = routes;