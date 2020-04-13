require('dotenv').config();
const password = process.env.PASSWORD;
const username = process.env.USERNAME;

module.exports = () => {

    const mongoose = require('mongoose');
    const express = require('express');

    const app = express();

    mongoose.connect(`mongodb:@${username}:${password}//localhost:27017/admin`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !'));

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    });

};

