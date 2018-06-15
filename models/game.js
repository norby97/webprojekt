const mongoose = require('mongoose');
const config = require('../config/database');

//kerdesek sema
const QuestionSema = mongoose.Schema({

  kerdes: {
    type : String,
    required : true
  },

  valasz1: {
    type : String,
    required : true
  },

  valasz2: {
    type : String,
    required : true
  },

  valasz3: {
    type: String,
    required : true
  },

  valasz4: {
    type: String,
    required:true
  },

  helyes: {
    type: Number,
    required:true
  }

});

const Questions = module.exports = mongoose.model('Questions', QuestionSema);

//kerdes keresese
module.exports.getQuestions = function (callback) {
    Questions.find(callback);
};

//kerdes beszurasa az adatbazisba
module.exports.addQuestion = function(ujKerdes, callback){
        ujKerdes.save(callback);
};
