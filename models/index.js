const Post = require('./post')
const Comment = require('./comment')
const User= require('./user')

// Post model associations
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
  
  // Comment model associations
  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  User.hasMany(Post, {
    foreignKey: 'user_id',
  });

  User.hasMany(Comment, {
    foreignKey: 'user_id',
  });
  
  module.exports = {
    Post,
    Comment,
    User,
  }