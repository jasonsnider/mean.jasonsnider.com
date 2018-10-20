var gulp = require('gulp');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var scss = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('build-css', function(){
  /*
  var full = gulp.src([
    'src/scss/main.scss'
  ])
  . pipe(scss())
  . pipe(concat('main.css'))
  . pipe(gulp.dest('public/dist/css'));
  */

  var main = gulp.src([
    'src/scss/main.scss'
  ])
  . pipe(scss())
  . pipe(cleanCSS())
  . pipe(concat('main.min.css'))
  . pipe(gulp.dest('public/dist/css'));

  var home = gulp.src([
  // 'src/scss/main.scss',
    'src/scss/home-page.scss'
  ])
  . pipe(scss())
  . pipe(cleanCSS())
  . pipe(concat('home-page.min.css'))
  . pipe(gulp.dest('public/dist/css'));

  return merge(main, home);
});

gulp.task('build-js', function() {

  /*
  var full = gulp.src([
    'src/js/main.js',
    'src/js/cover.js',
  ])
  .pipe(concat('home-page.js'))
  .pipe(gulp.dest('public/dist/js'));
  */

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
});

gulp.task('build-hash-js', function() {

  var hash = gulp.src([
    'node_modules/jssha/src/sha.js',
    'node_modules/js-md5/src/md5.js',
    'src/js/tools/hash.js'
  ])
  .pipe(concat('hash.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js/tools'));

  return merge(hash);
});

gulp.task('watch', function(){
  gulp.watch('./src/scss/**/*.scss', ['build-css']);
  gulp.watch('./src/js/**/*.js', ['build-js']);
});
