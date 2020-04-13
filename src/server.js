require ('./init.js')();
require('dotenv').config({ path: 'src/.env' });
require('./routeur/recipesRouter');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT;


app.use(bodyParser.json());


app.listen(port, () => console.log(`Server running on port ${port}`));