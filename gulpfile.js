// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    slim = require('gulp-slim'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    connect = require('gulp-connect');

// Styles
gulp.task('sass', function() {
  return gulp.src('app/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


// Slim
gulp.task('slim', function() {
  return gulp.src('app/**/*.slim') // Gets all files ending with .slim in app/slim
    .pipe(slim())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


// browserSync
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dist/'
    },
  })
});


// Watch
gulp.task('watch', ['browserSync', 'slim', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/slim/**/*.slim', ['slim']);
  gulp.watch('dist/*.html', browserSync.reload);
});






