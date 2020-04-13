const recipesController = require('../controllers/recipesController');
const express = require('express');
const app = express();

app.route('/api/customers')
    .get(recipesController.allRecipes);

app.route('/api/customers/:_id')
    .delete(recipesController.deleteRecipes);
