var gulp   = require('gulp');
var eslint = require('gulp-eslint');
var babel  = require('gulp-babel');
var del     = require('del');

gulp.task('clean', function (cb) {
    del('lib', cb);
});

gulp.task('lint', function () {
    return gulp
        .src([
            'src/*.js',
            'Gulpfile.js'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build', ['clean', 'lint'], function () {
    return gulp
        .src('src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
});
