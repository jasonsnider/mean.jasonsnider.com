var gulp = require('gulp');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var scss = require('gulp-sass');

function buildMainCSS(){

  var full = gulp.src([
    'src/scss/main.scss'
  ])
  . pipe(scss())
  . pipe(concat('main.css'))
  . pipe(gulp.dest('public/dist/css'));

  var min = gulp.src([
    'src/scss/main.scss'
  ])
  . pipe(scss())
  . pipe(cleanCSS())
  . pipe(concat('main.min.css'))
  . pipe(gulp.dest('public/dist/css'));

  return merge(min, full);
}

function buildHomeCSS(){

  var full = gulp.src([
    'src/scss/home-page.scss'
  ])
  . pipe(scss())
  . pipe(concat('home-page.css'))
  . pipe(gulp.dest('public/dist/css'));

  var min = gulp.src([
    'src/scss/home-page.scss'
  ])
  . pipe(scss())
  . pipe(cleanCSS())
  . pipe(concat('home-page.min.css'))
  . pipe(gulp.dest('public/dist/css'));

  return merge(full, min);
}


function buildAppCSS(){

  var full = gulp.src([
    'src/scss/app.scss'
  ])
  . pipe(scss())
  . pipe(concat('app.min.css'))
  . pipe(gulp.dest('public/dist/css'));

  var min = gulp.src([
    'src/scss/app.scss'
  ])
  . pipe(scss())
  . pipe(cleanCSS())
  . pipe(concat('app.min.css'))
  . pipe(gulp.dest('public/dist/css'));

  return merge(full, min);
}


function buildHomeJS() {

  var full = gulp.src([
    'src/js/main.js',
    'src/js/home.js',
  ])
  .pipe(concat('home-page.js'))
  .pipe(gulp.dest('public/dist/js'));

  var min = gulp.src([
    'src/js/main.js',
    'src/js/home.js',
  ])
  .pipe(concat('home-page.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js'));

  return merge(full, min);
}

function buildArticleJS() {

  var full = gulp.src([
    'src/js/main.js',
    'src/js/article.js',
  ])
  .pipe(concat('article.js'))
  .pipe(gulp.dest('public/dist/js'));

  var min = gulp.src([
    'src/js/main.js',
    'src/js/article.js',
  ])
  .pipe(concat('article.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js'));

  return merge(min, full);

}

function buildHashJS(){

  var hash = gulp.src([
    'node_modules/jssha/src/sha.js',
    'node_modules/js-md5/src/md5.js',
    'src/js/tools/hash.js'
  ])
  .pipe(concat('hash.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js/tools'));

  return merge(hash);
}

function buildAppJS() {

  var full = gulp.src([
    'src/js/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js'));

  var min = gulp.src([
    'src/js/app.js'
  ])
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js'));

  return merge(full, min);
}


function buildAuthAppJS() {

  var full = gulp.src([
    'src/js/app.auth.js'
  ])
  .pipe(concat('app.auth.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js'));

  var min = gulp.src([
    'src/js/app.auth.js'
  ])
  .pipe(concat('app.auth.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js'));

  return merge(full, min);
}

function buildCmsAppJS() {

  var full = gulp.src([
    'src/js/app.cms.js'
  ])
  .pipe(concat('app.cms.js'))
  .pipe(gulp.dest('public/dist/js'));

  var min = gulp.src([
    'src/js/app.cms.js'
  ])
  .pipe(concat('app.cms.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js'));

  return merge(full, min);
}

function watchFiles() {
  gulp.watch(['./src/scss/main.scss'], buildMainCSS);
  gulp.watch(['./src/scss/main.scss', './src/scss/home-page.scss'], buildHomeCSS);
  gulp.watch('./src/scss/app.scss', buildAppCSS);
  gulp.watch(['./src/js/main.js', './src/js/home.js'], buildHomeJS);
  gulp.watch(['./src/js/main.js', './src/js/article.js'], buildArticleJS);
  gulp.watch('./src/js/app.auth.js', buildAuthAppJS);
  gulp.watch('./src/js/app.js', buildAppJS);
  gulp.watch('./src/js/app.cms.js', buildCmsAppJS);
}

gulp.task('build-app-css', buildAppCSS);

gulp.task('build-main-css', buildMainCSS); 

gulp.task('build-home-css', buildHomeCSS); 

gulp.task('build-home-js', buildHomeJS);

gulp.task('build-article-js', buildArticleJS);

gulp.task('build-app-js', buildAppJS);

gulp.task('build-auth-app-js', buildAuthAppJS);

gulp.task('build-cms-app-js', buildCmsAppJS);

gulp.task('build-hash-js', buildHashJS);

gulp.task('default', watchFiles);

gulp.task('watch', watchFiles);
