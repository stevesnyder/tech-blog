const { User } = require('../models');

const userData = [
    {
        username: 'steve',
        password: '$2b$10$F3rcu8eg2UUxyfHIWYMxK.uAZoEDTmXiyS6RmRbLamYkqLF/EN7Va',
    },
    {
        username: 'larry',
        password: '$2b$10$F3rcu8eg2UUxyfHIWYMxK.uAZoEDTmXiyS6RmRbLamYkqLF/EN7Va',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;