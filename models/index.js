//import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//association methods for the Sequelize models to create relationships between them
//A user can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//A post belongs to a single user
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

//A user can have many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//A comment belongs to a single user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

//A post can have many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

//A comment belongs to a single post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { User, Post , Comment};