const { Category } = require('../models');

const resolvers = {
    Query: {
        categories: async () => {
            return Category.findAll();
        }
    }
};