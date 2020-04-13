const recipesController = require('../controllers/recipesController').RecipesController;

let ctrl = new recipesController();

module.exports = (app) => {
    app.route('/api/customers')
        .get(ctrl.allRecipes);

    app.route('/api/customers/:_id')
        .delete(ctrl.deleteRecipes);

    console.log('register routes');
};

