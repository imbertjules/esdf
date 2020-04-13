const Customers = require('../models/customers');

module.exports = {

    allRecipes: (req, res, next) => {
        Customers.find()
            .then(customers => res.status(200).json(customers))
            .catch(error => res.status(400).json({ error }));
    },

    deleteRecipes: (req, res, next) => {
        Customers.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
    }

};

