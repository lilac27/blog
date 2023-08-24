const { Comment } = require('../models');

const commentData = [
    {
        text: 'hello this is a test',
        date_created: '2023-08-10',
        user_id: 1,
        post_id: 1,
    },
    {
        text: 'hello this is another test',
        date_created: '2023-08-10',
        user_id: 2,
        post_id: 2,
    },
];

const seedComments = () => {
    return Comment.bulkCreate(commentData);
};

module.exports = seedComments;