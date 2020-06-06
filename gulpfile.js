var gulp = require('gulp');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var scss = require('gulp-sass');

function buildCSS(){

  var main = gulp.src([
    'src/scss/main.scss'
  ])
  . pipe(scss())
  . pipe(cleanCSS())
  . pipe(concat('main.min.css'))
  . pipe(gulp.dest('public/dist/css'));

  var home = gulp.src([
    'src/scss/home-page.scss'
  ])
  . pipe(scss())
  . pipe(cleanCSS())
  . pipe(concat('home-page.min.css'))
  . pipe(gulp.dest('public/dist/css'));

  return merge(main, home);
}

function buildJS() {

  var home = gulp.src([
    'src/js/main.js',
    'src/js/home.js',
  ])
  .pipe(concat('home-page.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js'));

  var article = gulp.src([
    'src/js/main.js',
    'src/js/article.js',
  ])
  .pipe(concat('article.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js'));

  return merge(home, article);
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

function watchFiles() {
  gulp.watch('./src/scss/**/*.scss', buildCSS);
  gulp.watch('./src/js/**/*.js', buildJS);
}

gulp.task('build-css', buildCSS); 

gulp.task('build-js', buildJS);

gulp.task('build-hash-js', buildHashJS);

gulp.task('default', watchFiles);

gulp.task('watch', watchFiles);
