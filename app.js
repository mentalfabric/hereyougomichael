'use strict';

let mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI.replace('\r', ''));
let db = mongoose.connection;
db.on('open', () =>console.log('Database connected.'));
db.on('error', () =>console.log('Error: Database was not reached.'));

require('./models/guest.schema');
require('./models/table.schema');

var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Promise = require('bluebird'),
    comparePassword = Promise.promisify(require('bcrypt').compare),
    methodOverride = require('method-override'),
    app = express();

var guests = require('./routes/guests');
var tables = require('./routes/tables');

var app = express();

//View rendering, you can rip this out if your creating an API
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/guests', guests);
app.use('/tables', tables);

app.listen(3000, function () {
    console.log(`Server up and running at http://localhost:${process.env.PORT || 3000}`);
});
