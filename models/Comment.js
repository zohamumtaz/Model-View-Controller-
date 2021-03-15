const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comment extends Model {}
Comment.init({
 
  comment_text: {
      type: DataTypes.STRING,
      validate: {
          len: [3]
      }
  } 
}, {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'comment'
});
module.exports = Comment;






