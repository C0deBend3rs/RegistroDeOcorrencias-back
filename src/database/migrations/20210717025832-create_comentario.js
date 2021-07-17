'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('comentarios', { 
      id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      usuario: {
        type:  Sequelize.INTEGER,
        //primaryKey: true,
        allowNull: false,
        references: { model: 'usuarios', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ocorrencia: {
        type:  Sequelize.INTEGER,
        //primaryKey: true,
        allowNull: false,
        references: { model: 'ocorrencias', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      texto: {
        type:  Sequelize.STRING(500),
        allowNull: true,
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

    await queryInterface.addConstraint('comentarios', {
      fields:  ['usuario', 'ocorrencia', 'created_at'],
      type: 'unique',
      name: 'unique_constraint_name'
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('comentarios');

  }
};
