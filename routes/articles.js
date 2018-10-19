var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');
var showdown  = require('showdown');
var converter = new showdown.Converter();

router.get('/', function(req, res, next) {
  Articles.find({'type':'post'}, function(err, articles){
    if(err){
      return res.status(404).render('error');
    }
    
    if(articles){
      return res.render('articles/index', {articles:articles});
    }else{
      return res.status(404).render('error');
    }

  }).sort({published: -1});
});


router.get('/:slug', function(req, res, next) {

  var slug = req.params.slug;

  Articles.findOne({'slug': slug}, function(err, article){

    if(err){
      return res.render('articles/view', { 'success':false, errors: err });
    }

    var meta = {
      title: article.title,
      description: article.description,
      keywords: article.keywords
    };

    article.body = converter.makeHtml(article.body);

    return res.render('articles/view', { 'success':true, article: article, meta: meta });
  });

});
module.exports = router;