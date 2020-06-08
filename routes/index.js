var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Articles = require('../models/articles');
var showdown  = require('showdown');
var converter = new showdown.Converter();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function(req, res, next) {
  return res.render('index', {meta:{title:'Jason Snider'}});
});

router.get('/contact', function(req, res, next){

  var meta = {
    title: 'Contact'
  };

  return res.render('contact', {'meta': meta});
});

router.get('/thanks', function(req, res, next){

  var meta = {
    title: 'Thank You'
  };

  return res.render('thanks', {'meta': meta});
});

router.get('/sitemap.xml', function(req, res, next){

  Articles.find({}, function(err, posts){

    if(err){
      res.status(500)
      return res.render('error', { error: err })
    }

    var urls=null;

    for(post of posts){

      urls = urls + `<url>
        <loc>https://jasonsnider.com/${post.slug}</loc>
        <lastmod>${new Date(post.published).toISOString()}</lastmod>
        <priority>0.80</priority>
      </url>`;
    }

    res.set('Content-Type', 'text/xml');
    var map = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

        <url>
          <loc>https://jasonsnider.com/</loc>
          <lastmod>2018-08-12T16:59:50+00:00</lastmod>
          <priority>1.00</priority>
        </url>
        <url>
          <loc>https://jasonsnider.com/articles</loc>
          <lastmod>2018-08-12T16:59:50+00:00</lastmod>
          <priority>0.95</priority>
        </url>
        <url>
          <loc>https://jasonsnider.com/contact</loc>
          <lastmod>2018-08-12T16:59:50+00:00</lastmod>
          <priority>0.80</priority>
        </url>
        ${urls}
      </urlset>`;

    return res.send(map);


  }).sort({published: -1});
});


router.get('/:slug', function(req, res, next) {

  var slug = req.params.slug;

  Articles.findOne({'slug': slug}, function(err, article){

    if(err){
      res.status(401).send(err);
    }

    if(article!=null){
      var meta = {
        title: article.title,
        description: article.description,
        keywords: article.keywords
      };
  
      //@todo - HTML or MD?
      article.body = converter.makeHtml(article.body);
  
      return res.render('view', { 'success':true, article: article, meta: meta });
    }
    
    res.status(404).send(err);

  });
});


module.exports = router;
