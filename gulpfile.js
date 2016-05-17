var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('./resources/styles/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./resources/styles'));
});

gulp.task('watch', function () {
    gulp.watch('./resources/styles/*.scss', ['sass']);  //use /styles/**/*.scss to include ALL FOLDERS inside of styles
})

gulp.task('default', ['sass', 'watch']);