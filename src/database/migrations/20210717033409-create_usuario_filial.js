'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('usuario_filial', { 
      usuario: {
        type:  Sequelize.STRIG(20),
        primaryKey: true,
        allowNull: false,
        references: { model: 'usuarios', key: 'username'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_filial: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: { model: 'filiais', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('usuario_filial');

  }
};
