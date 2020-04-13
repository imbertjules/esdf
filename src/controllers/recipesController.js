const AbstractController = require('./AbstractController').AbstractController;
const Customers = require('../models/customers');

class RecipesController extends AbstractController{

    allRecipes(req, res) {
        Customers.find()
            .then(customers => res.send(customers))
            .catch(() => this.throwError(error, res));
    }

    deleteRecipes (req, res) {
        Customers.deleteOne({ _id: req.params.id })
            .then(() => res.send({ message: 'Objet supprimé !'}))
            .catch(() => this.throwError(error, res));
    }

}

module.exports.RecipesController = RecipesController;

