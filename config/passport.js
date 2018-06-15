const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');

//kivesszuk a headerbol az adatokat es megnezzuk hogy van ilyen felhasznalo
module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (payload, done) => {
    User.getUserById(payload.data._id, (err, felhasznalo) =>{
        if(err) return done(err, false);
        if(felhasznalo) return done(null, felhasznalo);
          else done(null, false);
    });
  }));

}
