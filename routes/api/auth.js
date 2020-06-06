var express = require('express');
var router = express.Router();
var Users = require('../../models/users');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var config = require('../../../config');

router.post('/register', function(req, res, next) {
  return res.json({success: false, err: 'Registration is closed.'});
  /*
  bcrypt.hash(req.body.password, 13, (err, hash) => {
    Users.create(new Users({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      hash: hash
      }), function(err, user){
      
      if(err){
        return res.json({success: false, user: req.body, error: err});
      }

      return res.json({success: true, user: user});
    });
  });
  */
});

router.post('/login', function(req, res, next) {

  Users.findOne({'email':req.body.email}, (err, user) => {
  
    if(err){
      return res.json({
        success: false,
        error: err,
      });
    }

    if(user!=null){
      bcrypt.compare(req.body.password, user.hash, (err, same) => {

        if(err){
          return res.json({
            success: false,
            error: err,
          });
        }
        if(same === true){
  
          // Sign the token
          let token = jwt.sign({
            id: user._id, 
          }, config.jwt.secret, { 
            expiresIn: (60 * 60) * 24
          }); 
  
          return res.json({
            success: true,
            token: token
          });
  
        }else{
          return res.json({
            success: false,
            err: 'invalid credentials'
          });
        }
      });
    }else{
      return res.json({
        success: false,
        err: 'invalid credentials'
      });
    }

  });

});

router.get('/logout', function(req, res, next) {
  res.json({});
});

module.exports = router;
