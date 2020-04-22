'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prNumber: {
        type: Sequelize.INTEGER
      },
      commentAuthor: {
        type: Sequelize.STRING
      },
      prAuthor: {
        type: Sequelize.STRING
      },
      prId: {
        type: Sequelize.INTEGER
      },
      commentTopic: {
        type: Sequelize.STRING
      },
      commentCreatedAt: {
        type: Sequelize.DATE
      },
      commentType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments');
  }
};