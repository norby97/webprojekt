const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//felhasznaloi sema
const UserSema = mongoose.Schema({

  nev: {
    type : String,
    required : true
  },

  felhasznalonev: {
    type : String,
    required : true
  },

  email: {
    type : String,
    required : true
  },

  jelszo: {
    type: String,
    required : true
  },

  pontszam: {
    type: Number,
    required:true
  }

});

const User = module.exports = mongoose.model('User', UserSema);

//kereses id alapjan
module.exports.getUserById = function (id , callback) {
    User.findById(id, callback);
};

//kereses felhasznalonev alapjan
module.exports.getUserByUsername = function (felhasznalonev , callback) {
    const query = {felhasznalonev: felhasznalonev};
    User.findOne(query, callback);
};

//uj felhasznalo letrehozasa ugy hogy encryptelem a jelszot
module.exports.addUser = function(ujFelhasznalo, callback){
  bcrypt.genSalt(10, (err, salt) =>{
    bcrypt.hash(ujFelhasznalo.jelszo, salt , (err, hash) =>{
        if(err) throw err;
        ujFelhasznalo.jelszo = hash;
        ujFelhasznalo.save(callback);
    });
  });
}

module.exports.jelszoEllenorzes = function(felhasznalojelszo, hash, callback){
  bcrypt.compare(felhasznalojelszo, hash, (err, ok) => {
      if(err) throw err;
      callback(null, ok);
  });
}
