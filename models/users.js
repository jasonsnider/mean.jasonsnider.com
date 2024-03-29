var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

//Create a schema
var Users = new Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: [true, 'Email must be unique']
  },
  first_name: String,
  last_name: String,
  hash:String,
  admin: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date.now
  }
});

Users.pre('save', function(next){
  this.modified = new Date().toISOString();
  next();
});

//Add unique validation properties to the model
Users.plugin(uniqueValidator);

module.exports  = mongoose.model('Users', Users);