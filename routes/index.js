var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')



router.get('/',function(req,res){
    res.render('index')
})

router.get('/about',function(req,res){
    res.render('about')
})

router.get('/aims',function(req,res){
    res.render('aims')
})

router.get('/contact',function(req,res){
    res.render('contact')
})


router.get('/events',function(req,res){
    res.render('events')
})

router.get('/fees',function(req,res){
    res.render('fees')
})

router.get('/gallery',function(req,res){
    res.render('gallery')
})








module.exports = router;