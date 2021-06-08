const { Comment } = require('../models');

const commentdata = [
    {
        comment: 'This is amazing!',
        blog_id: 1,
    },
    {
        comment: 'This is awesome!',
        blog_id: 2,

    },
    {
        comment: 'This is incredible!',
        blog_id: 1,
    },
    {
        comment: 'This is crazy!',
        blog_id: 2,
    },
    {
        comment: 'Handlebars is so weird.',
        blog_id: 1,
    },
    {
        comment: 'CSS is the greatest!',
        blog_id: 2,
    },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;