const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');
const Questions = require('../models/game');


//game oldal
router.get('/game', (req ,res, next) =>{
 Questions.find({}, function (err, eredmeny) {
   if(err) throw err;
   if (!eredmeny) {
     return res.json({succes:false, msg:"Cannot find any question!!!"});
   }
   else {
     return res.json({
              eredmeny1: {
              kerdes  : eredmeny[0].kerdes,
              valasz1 : eredmeny[0].valasz1,
              valasz2 : eredmeny[0].valasz2,
              valasz3 : eredmeny[0].valasz3,
              valasz4 : eredmeny[0].valasz4,
              helyes  : eredmeny[0].helyes
              }
           });
   }
 });
});

//uj kerdes hozzaadasa
router.post('/addquestion',(req ,res, next) =>{
  let ujKerdes = new Questions ({
     kerdes :  req.body.kerdes,
     valasz1 : req.body.valasz1,
     valasz2 : req.body.valasz2,
     valasz3 : req.body.valasz3,
     valasz4 : req.body.valasz4,
     helyes : req.body.helyes
  });

  Questions.addQuestion(ujKerdes, (err) =>{
   if(err) res.json({succes : false, msg:'Unsuccesfull question insert!!!'});
      else res.json({succes : true, msg:'Succesfull question insert!!!'});
    });
});

module.exports = router;
