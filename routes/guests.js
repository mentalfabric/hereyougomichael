'use strict';

var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Guest = mongoose.model('Guest');


router.get('/', (req,res,next) => {
    Guest.find({})
        .then( guest => {
            res.json(guest);
        });
});

router.post('/newGuest', (req,res,next) => {
    let newGuest = new Guest(req.body);
    newGuest.save()
        .then( guest => {
            res.json(guest)
        })
        .catch(next);
});

router.get('/landingpage', (req,res,next) => {
    res.render('landingpage');
});

router.get('/waitinglist', (req,res,next) => {
    res.render('waitinglist');
});

module.exports = router;