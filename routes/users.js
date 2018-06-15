 const express = require('express');
 const router = express.Router();
 const passport = require('passport');
 const jwt = require('jsonwebtoken');
 const User = require('../models/user');
 const Questions = require('../models/game');
 const config = require('../config/database');

 //regisztracio
 router.post('/register',(req ,res, next) =>{
   let ujFelhasznalo = new User ({
      nev: req.body.nev,
      felhasznalonev: req.body.felhasznalonev,
      email : req.body.email,
      jelszo : req.body.jelszo,
      pontszam : 0
   });
    User.addUser(ujFelhasznalo, (err) =>{
     if(err) res.json({succes : false, msg:'Unsuccesfull registration!!!'});
        else res.json({succes : true, msg:'Succesfull registration!!!'});
   });

 });

//login
router.post('/login',(req ,res, next) =>{
  const felhasznalonev = req.body.felhasznalonev;
  const jelszo = req.body.jelszo;

  User.getUserByUsername(felhasznalonev , (err, felhasznalo) => {
    if(err) throw err;
    //ha nem letezik a felahasznalo akkor uzenetet kuldunk vissz ellenben checkoljuk a jelszavat
    if(!felhasznalo) return res.json({succes:false, msg:"Wrong username!!!"});

    User.jelszoEllenorzes(jelszo, felhasznalo.jelszo, (err, ok) => {
      if(err) throw err;
      if(ok)
      {
        const token = jwt.sign({data: felhasznalo}, config.secret,{
            expiresIn: 3600  //1 ora mulva lejar a session
        });
        res.json({
          succes: true,
          token: 'JWT ' + token,
          felhasznalo: {
            id : felhasznalo._id,
            nev : felhasznalo.nev,
            felhasznalonev: felhasznalo.felhasznalonev,
            email : felhasznalo.email,
            pontszam : felhasznalo.pontszam
          }
        });
      }
      else {
        return res.json({succes: false, msg: "Wrong password!!!"});
      }

    });
  });
});

 //profil oldal
 router.get('/profile',passport.authenticate('jwt', {session: false} ), (req ,res, next) =>{
   res.json({felhasznalo: req.user});
 });

 //game oldal
 router.get('/game', (req ,res, next) =>{
  Questions.find({}, function (err, eredmeny) {
    if(err) throw err;
    if (!eredmeny) {
      return res.json({succes:false, msg:"Baj van!!!"});
    } else {
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


 module.exports = router;
