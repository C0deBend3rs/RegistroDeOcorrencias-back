'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('solicitantes', { 
      id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_criador: {
        type:  Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: { model: 'usuarios', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

    await queryInterface.dropTable('solicitantes');

  }
};
