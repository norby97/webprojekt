 const express = require('express');
 const router = express.Router();
 const passport = require('passport');
 const jwt = require('jsonwebtoken');
 const User = require('../models/user');
 const config = require('../config/database');


 function delay(ms, number) {
     return new Promise( resolve => setTimeout(resolve, ms) );
 }

 //regisztracio
 router.post('/register',(req ,res, next) =>{
   let ujFelhasznalo = new User ({
      nev: req.body.nev,
      felhasznalonev: req.body.felhasznalonev,
      email : req.body.email,
      jelszo : req.body.jelszo,
      pontszam : 0,
      admin : 0
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
            pontszam : felhasznalo.pontszam,
            admin : felhasznalo.admin
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
   //console.log("prpfil oldal");
   res.json({felhasznalo: req.user});
 });

//leaderboard oldal
 router.get('/leaderboard', (req ,res, next) =>{
   //console.log('leaderboard');
    const query = {pontszam: { $gte: 0 }};
     User.find(query,'nev felhasznalonev pontszam', function (err, users) {
       if (err) console.log(err);
       else{
         res.json(users);
       }
   });
  });

  router.post('/checkuser', (req,res,next) =>{
    const felhasznalonev = req.body.felhasznalonev;
    User.getUserByUsername(felhasznalonev , (err, felhasznalo) => {
      if(err) throw err;
      delay(2000);
      //ha nem letezik a felahasznalo akkor uzenetet kuldunk vissz ellenben checkoljuk a jelszavat
      if(felhasznalo==null) return res.json({succes:true, msg:"Free username!!!"});
        else return res.json({succes:false, msg:"Username already exists!!!"});
  });
});

  //pontszam lementese
  router.post('/savegame', (req, res, next) =>{
    const aktfelhasznalonev = req.body.felhasznalonev;
    const ujPontszam = req.body.pontszam;
    //console.log(felhasznalonev + ujPontszam);
    const insert = {$set : {pontszam : ujPontszam}};
    const query = {felhasznalonev : aktfelhasznalonev};
    User.updateOne(query,insert ,function (err, eredmeny) {
      if(err) throw err;
      if (!eredmeny) {
        return res.json({succes:false, msg:"Cannot update scores!!!"});
      }
      else {
        return res.json({succes:true, msg:"Scores updated succesfully!!!"});;
      }
  });

  });

module.exports = router;
