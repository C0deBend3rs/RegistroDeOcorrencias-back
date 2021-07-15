const Usuario = require('./usuario')
const Administrador = require('./administrador')



function initModels(connection) {
  Usuario.init(connection)
  Administrador.init(connection)

  Usuario.associate(connection.models)
  Administrador.associate(connection.models)
}

module.exports = { initModels }