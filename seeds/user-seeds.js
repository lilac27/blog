const { User } = require('../models');

const userData = [
    {
        id: 1,
        name: 'Lilac Jonas',
        email: 'testtest@gmail.com',
        password: 'testtest',
    },
    {
        id: 2,
        name: 'Josh Jonas',
        email: 'test@gmail.com',
        password: 'test',
    }
]

const seedUsers = () => {
    return User.bulkCreate(userData);
};

module.exports = seedUsers;