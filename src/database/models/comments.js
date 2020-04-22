'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    prNumber: DataTypes.INTEGER,
    commentAuthor: DataTypes.STRING,
    prAuthor: DataTypes.STRING,
    prId: DataTypes.INTEGER,
    commentTopic: DataTypes.STRING,
    commentCreatedAt: DataTypes.DATE,
    commentType: DataTypes.STRING
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
  };
  return comments;
};