const db = require('./connection');
const { Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { categoryName: 'Electronics' },
        { categoryName: 'Furniture' },
        { categoryName: 'Clothing' },
        { categoryName: 'Books' },
        { categoryName: 'Household Supplies' },
        { categoryName: 'Bikes' },
        { categoryName: 'Toys' },
        { categoryName: 'Sports' },
        { categoryName: 'Other' }
    ]);

    console.log('categories seeded');

//   
process.exit();

});