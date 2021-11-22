const { gql} = require('apollo-server-express');

//  create typeDefs 
const typeDefs = gql`
    type Category {
        _id: ID
        categoryName: String
    },
    type Query {
        categories: [Category]
    }
`;
module.exports = typeDefs;