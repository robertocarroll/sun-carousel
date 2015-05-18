// Include gulp
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src(['javascripts/jquery.js','javascripts/jquery.jcarousel.min.js','javascripts/jquery.touchSwipe.min.js','javascripts/*.js'])
      .pipe(concat('main.js'))
      	 .pipe(rename({suffix: '.min'}))
      	 .pipe(uglify())
      	 .pipe(gulp.dest('build/javascripts'));      
});
// Default Task
gulp.task('default', ['scripts']);