var express = require('express');
var router = express.Router();
var Articles = require('../../models/articles');
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

  Articles.find({},function(err, articles){
    if(err){
     return res.json({'success':false, 'error': err});
    }
    
    return res.json({'success':true, 'articles': articles});
  });

});

router.get('/:slug', jwtMW, function(req,res){
  
  var slug = req.params.slug;

  Articles.findOne({'slug':slug}, function(err, article){

    if(err){
      return res.json({success:false, error: err});
    }

    return res.json({success:true, article: article});
  });

});

router.post('/', jwtMW, function(req, res) {
  
  Articles.create(new Articles({
    title: req.body.title
  }), function(err, article){
    
    if(err){
      return res.json({success: false, article: req.body, error: err});
    }

    if(article){
      return res.json({success: true, article: article});
    }else{
      return res.json({success: false, article: req.body, error: err});
    }

  });
});

router.put('/', jwtMW, function(req, res){

  Articles.findOne({'_id': req.body._id}, function(err, article){

   if(err) {
     return res.json({success: false, error: err});
   }

   if(article) {

    let data = req.body;

    if(data.title){
      article.title = data.title;
    };

    if(data.description){
    article.description = data.description;
    };

    if(data.keywords){
      article.keywords = data.keywords;
    };

    if(data.body){
      article.body= data.body;
    };

    if(data.published){
      article.published= data.published;
    };

    if(data.type){
      article.type= data.type;
    };

    if(data.format){
      article.format= data.format;
    };

    if(data.slug){
      article.slug= data.slug;
    };

    article.save(function(err){
      if(err){
        return res.json({success: false, error: err});
      }else{
        console.log(article);
        return res.json({success: true, article:article});
      }
    });

   }

  });

});

router.delete('/:articleId', jwtMW, function(req,res){

  var articleId = req.params.articleId;

  Articles.remove({'_id':articleId}, function(err,removed){

    if(err){
      return res.json({success: false, error: err});
    }

    return res.json({success: true, status: removed});

  });

});


module.exports = router;
