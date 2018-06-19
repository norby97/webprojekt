const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require('./routes/users');
const games = require('./routes/games');
const config = require('./config/database.js');
const app = express();

//csatlakozas az adatbazishoz
mongoose.connect(config.database);

//ha sikeres a csatlakozas az adatbazishoz
mongoose.connection.on('connected', () => {
  console.log('Connect succesfull on : '+ config.database);
});

//ha nem sikeres a csatlakozas az adatbazishoz
mongoose.connection.on('error', (err) => {
  console.log('Connect failed because : '+ err);
});

//port amelyiken elerheto a szerver
const port = 3000;

//aktivalja a body-parsert amivel kiveszunk a formbol infot
app.use(bodyParser.json());

//cors = el lehet erni barmilyen domain-rol
app.use(cors());

//beallitom a statikus mappat
app.use(express.static(path.join(__dirname, 'public')));

//session beallitasa
app.use(passport.initialize());
app.use(passport.session());

//atadjuk a passport.js - nek a passport objektumot
require('./config/passport')(passport);

//akarmi ami localhost:3000/users/*barmi* az abba a fajlba lesz
app.use('/users', users);
app.use('/games',games);

//alap path lekezeles
app.get('/', (req, res) => {
  res.send("");
});

//itt inditom el a szervert a megfelelo porton
app.listen(port, () => {
  console.log('Servert started at port: ' + port);
});
