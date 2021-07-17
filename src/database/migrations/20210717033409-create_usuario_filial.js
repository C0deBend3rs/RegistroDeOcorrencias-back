'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('usuario_filial', { 
      id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      usuario: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: { model: 'usuarios', key: 'id'},
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
      created_at: {
        type:  Sequelize.DATE,
        primaryKey: false,
        allowNull: false,
      },
      updated_at: {
        type:  Sequelize.DATE,
        primaryKey: false,
        allowNull: false,
      },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('usuario_filial');

  }
};
