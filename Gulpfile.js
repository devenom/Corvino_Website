var
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    bs = require('browser-sync').create();

gulp.task('styles', function() {
    gulp
    .src('sass/style.scss')
    .pipe(sass({
        errLogToConsole: true,
        includePaths: ['sass/']
    }))
    .pipe(autoprefixer({
        browsers: ['> 1%']
    }))
    .pipe(gulp.dest('css/'))
    .pipe(bs.stream());
});

gulp.task('browser-sync', function() {
    bs.init({
        server: "./"
    });
});

gulp.task('default', ['styles', 'browser-sync'], function() {
    gulp.watch('sass/*', ['styles']);
    gulp.watch('index.html').on('change', bs.reload)
});

