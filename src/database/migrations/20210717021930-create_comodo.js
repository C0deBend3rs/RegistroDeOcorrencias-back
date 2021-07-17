'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('comodos', { 
      id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_predio: {
        type:  Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'predios', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      andar: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      nome: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      id_criador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'administradores', key: 'id'},
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 

    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('comodos');

  }
};
