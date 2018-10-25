const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extend: true }));
app.use(express.static(path.join(__dirname, 'public')));

//jQuery
app.use(express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
