/*eslint-disable node/no-unpublished-require*/
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
//const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');
/*eslint-disable node/no-unpublished-require*/

gulp.task('scss', () => {
  return gulp
    .src('dev/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(
      autoprefixer(['last 15 versions', '>1%', 'ie 8', 'ie 7'], {
        cascade: true
      })
    )
    .pipe(cssnano())
    .pipe(gulp.dest('public/stylesheets'));
  //.pipe(browserSync.reload({ stream: true }));
});
/*
gulp.task('browser-sync', () => {
  browserSync({
    server: { baseDir: 'views' },
    notify: false
  });
});
*/
gulp.task('scripts', () =>
  gulp
    .src([
      'dev/js/auth.js',
      'dev/js/post.js',
      'node_modules/medium-editor/dist/js/medium-editor.min.js'
    ])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'))
);

gulp.task('default', [/*'browser-sync',*/ 'scss', 'scripts'], () => {
  gulp.watch('dev/scss/**/*.scss', ['scss']);
  //gulp.watch('views/**/*.ejs', browserSync.reload);
  gulp.watch('dev/js/**/*.js', ['scripts']);
});
