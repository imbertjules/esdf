const recipesController = require('../controllers/recipesController');

module.exports = (app) => {
    app.route('/api/customers')
        .get(recipesController.allRecipes);

    app.route('/api/customers/:_id')
        .delete(recipesController.deleteRecipes);

    console.log('register routes');
};

