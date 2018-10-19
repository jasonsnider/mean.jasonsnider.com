var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var slug = require('slug');

//Create a schema
var Articles = new Schema({
  title: {
    type: String,
    required: [true, 'A title is required']
  },
  slug: {
    type: String,
    required: [true, 'A slug is required'],
    unique: true,
    dropDups: true
  },
  description: String,
  keywords: String,
  body: String,
  type: {
    type: String,
    default: 'post'
  },
  format: {
    type: String,
    default: 'md'
  },
  published: {
    type: Date,
    default: Date.now
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date
  }
});

//Auto set the slug prior to validation
Articles.pre('validate', function(next){

  if(this.slug==undefined){
    if(this.title){
      this.slug = slug(this.title).toLowerCase();
    }
  }

  this.modified = new Date().toISOString();

  next();
});
  
module.exports = mongoose.model('Articles', Articles);