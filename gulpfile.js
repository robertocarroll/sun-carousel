// Include gulp
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');

// Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src(['javascripts/jquery.js','javascripts/jquery.jcarousel.min.js','javascripts/jquery.touchSwipe.min.js','javascripts/*.js'])
      .pipe(concat('main.js'))
      	 .pipe(rename({suffix: '.min'}))
      	 .pipe(uglify())
      	 .pipe(gulp.dest('build/javascripts'));      
});

gulp.task('sass', function() {
    return sass('styles/style.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'));
});


gulp.task('watch', function() {
  // Watch .js files
  gulp.watch('javascripts/*.js', ['scripts']);
  // Watch .scss files
  gulp.watch('styles/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['scripts','sass','watch']);