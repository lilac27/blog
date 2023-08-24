const Post = require('./post')
const Comment = require('./comment')
const User= require('./user')

// Post model associations
Post.hasMany(Comment, {
    foreignKey: 'post_id',
  });
  
  // Comment model associations
  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  module.exports = {
    Post,
    Comment,
    User,
  }