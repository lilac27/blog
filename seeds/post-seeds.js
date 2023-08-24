const { Post } = require('../models');

const postData = [
    {
        title: 'test1',
        description: 'this is a test for seeding purposes',
        date_created: '2023-08-10',
        user_id: 1,
    },
    {
        title: 'test2',
        description: 'this is another test. I love tests!',
        date_created: '2023-08-10',
        user_id: 2,
    }
]

const seedPosts = () => {
    return Post.bulkCreate(postData);
};

module.exports = seedPosts;