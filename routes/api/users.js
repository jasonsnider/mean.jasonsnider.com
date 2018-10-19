var express = require('express');
var router = express.Router();
var Users = require('../../models/users');
var exjwt = require('express-jwt');

if(process.env.NODE_ENV==='production'){
  var config = require('../../../config');
}else{
  var config = require('../../config.dev');
}

const jwtMW = exjwt({
  secret: config.jwt.secret
});

router.get('/', jwtMW, function(req, res, next) {

  Users.find({},function(err, users){
    if(err){
     return res.json({success:false, error: err});
    }

    return res.json({success:true, users: users});
  });

});

router.get('/:userId', jwtMW, function(req,res){
  
  var userId = req.params.userId;

  Users.findOne({'_id':userId}, function(err, user){
    if(err){
      return res.json({success:false, error:err});
    }

    return res.json({success:true, user:user});
  });

});

router.post('/', jwtMW, function(req, res) {
  Users.create(new Users({
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }), function(err, user){
    
    if(err){
      return res.json({success: false, user: req.body, error: err});
    }

    return res.json({success: true, user: user});
    
  });
});

router.put('/', jwtMW, function(req, res){

  Users.findOne({'_id': req.body._id}, function(err, user){

   if(err) {
     return res.json({success: false, error: err});
   }

   if(user) {

    let data = req.body;

    if(data.email){
      user.email = data.email;
    };

    if(data.first_name){
      user.first_name = data.first_name;
    };

    if(data.last_name){
      user.last_name = data.last_name;
    };

    user.save(function(err){
      if(err){
        return res.json({success: false, error: err});
      }else{
        return res.json({success: true, user:user});
      }
    });

   }

  });

});

router.delete('/:userId', jwtMW, function(req,res){

  var userId = req.params.userId;

  Users.remove({'_id': userId}, function(err,removed){

    if(err){
      return res.json({success: false, error: err});
    }

    return res.json({success: true, status: removed});

  });

});


module.exports = router;
