const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');
const Questions = require('../models/game');

//game oldal
router.get('/game', (req ,res, next) =>{
  //lekerem azokat kerdeseket amelyeknek helyes valasz 1,2,3 vagy 4
  const helyesszam = Math.floor((Math.random() *100) % 4 +1);
 Questions.find({helyes:helyesszam}, function (err, eredmeny) {
   if(err) throw err;
   if (!eredmeny) {
     return res.json({succes:false, msg:"Cannot find any question!!!"});
   }
   else {
     //ezekbol a kerdesekbol visszateritek egyet random
     const randomkerdes = Math.floor((Math.random() * eredmeny.length ));
     return res.json({
              eredmeny1: {
              kerdes  : eredmeny[randomkerdes].kerdes,
              valasz1 : eredmeny[randomkerdes].valasz1,
              valasz2 : eredmeny[randomkerdes].valasz2,
              valasz3 : eredmeny[randomkerdes].valasz3,
              valasz4 : eredmeny[randomkerdes].valasz4,
              helyes  : eredmeny[randomkerdes].helyes
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
   if(err) res.json({succes : false, msg:'Unsuccesfull question insert!!! Please fill all the fields!!!'});
      else res.json({succes : true, msg:'Succesfull question insert!!!'});
    });
});

//pontszam lementese
router.post('/savegame', (req, res, next) =>{
  const aktfelhasznalonev = req.body.felhasznalonev;
  const ujPontszam = req.body.pontszam;
  //console.log(felhasznalonev + ujPontszam);
  const insert = {$set : {pontszam : ujPontszam}};
  const quety = {felhasznalonev : aktfelhasznalonev};
  Questions.updateOne(query,insert ,function (err, eredmeny) {
    if(err) throw err;
    if (!eredmeny) {
      return res.json({succes:false, msg:"Cannot update scores!!!"});
    }
    else {
      return res.json({succes:false, msg:"Scores updated succesfully!!!"});;
    }
});

});
module.exports = router;
