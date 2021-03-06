var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var gulpIf = require('gulp-if');
var browserSync = require('browser-sync').create();

var config = {
    paths: {
        // sass: './src/sass/**/*.sass',
        sass: ['./src/sass/**/*.sass', './src/sass/**/*.scss'],
        html: './public/index.html',
        js: './public/**/*.js'
    },
    output: {
        cssName: 'bundle.min.css',
        path: './public'
    },
    isDevelop: false
};

gulp.task('sass', function () {
    return gulp.src(config.paths.sass)
        .pipe(gulpIf(config.isDevelop, sourcemaps.init()))
        .pipe(sass())
        .pipe(concat(config.output.cssName))
        .pipe(autoprefixer())
        .pipe(gulpIf(!config.isDevelop, cleanCss()))
        .pipe(gulpIf(config.isDevelop, sourcemaps.write()))
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: config.output.path
        }
    });

    gulp.watch(config.paths.sass, ['sass']);
    gulp.watch(config.paths.html).on('change', browserSync.reload);
    gulp.watch(config.paths.js).on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'serve']);
