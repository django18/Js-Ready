var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/src/styles/scss/main.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('app/src/styles/css/main.css'))
  });

  gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    // Other watchers
  })