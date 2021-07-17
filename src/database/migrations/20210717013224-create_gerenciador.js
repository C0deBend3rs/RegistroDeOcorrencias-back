'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('gerenciadores', { 
      username: {
        type:  Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
        references: { model: 'usuarios', key: 'username'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('gerenciadores');

  }
};
