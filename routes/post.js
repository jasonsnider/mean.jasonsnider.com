var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Articles = require('../models/articles');
var showdown  = require('showdown');
var converter = new showdown.Converter();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/:slug', function(req, res, next) {

  var slug = req.params.slug;

  Articles.findOne({'slug': slug}, function(err, article){

    if(err){
      res.status(401).send(err);
    }

    if(article!=null){

      if(article.type == 'post'){
        return res.redirect(301, '/articles/' + article.slug);
      }

      if(article.type == 'game'){
        return res.redirect(301, '/games/' + article.slug);
      }

      if(article.type == 'tool'){
        return res.redirect(301, '/tools/' + article.slug);
      }

      if(article.type == 'page' || article.type == 'special' ){
        return res.redirect(301, '/' + article.slug);
      }

    }
    
    res.status(404).send(err);

  });
});


module.exports = router;
