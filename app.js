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

var routes = require('./routes/index');
var users = require('./routes/users');
var guests = require('./routes/guests');
var tables = require('./routes/tables');


var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/guests', guests);
app.use('/tables', tables);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


app.listen(3000, function () {
    console.log(`Server up and running at http://localhost:${process.env.PORT || 3000}`);
});
