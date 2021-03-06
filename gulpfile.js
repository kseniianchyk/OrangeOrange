const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cssmin = require('gulp-cssmin');
const watch = require('gulp-watch');

gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(cssmin())
        .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'))
});