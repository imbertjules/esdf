const recipesController = require('../controllers/recipesController');


app.route('/api/customers')
    .get(recipesController.allRecipes);

app.route('/api/customers/:_id')
    .delete(recipesController.deleteRecipes);
