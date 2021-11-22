const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
});

const Category = model('Category', CategorySchema);
module.exports = Category;