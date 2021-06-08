 const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

// User.hasMany(Blog, {
//     foreignKey: 'user_id'
// });

//Blog belongs to user, delete posts delete of user
Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
});

// Comment.belongsTo(Blog, {
//     foreignKey: 'blog_id',
//     onDelete: "CASCADE"
// });

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: "CASCADE"
})

module.exports = { Blog, Comment, User };