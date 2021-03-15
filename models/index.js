const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
// create associations
User.hasMany(Post, {
    foreignKey: 'post_id'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id' 
  });
  
Post.hasMany(Comment, {
    foreignKey: 'comment_id'
  });

  Comment.belongsTo(Post, {
    foreignKey: 'post_id' 
  });
  
User.hasMany(Comment, {
    foreignKey: 'comment_id'
  });

  Comment.belongsTo(User, {
    foreignKey: 'user_id' 
  });
  
   
 
 
  
   
  
   
  
module.exports = { User, Post, Comment };






