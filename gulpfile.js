var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tslint = require('gulp-tslint'),
    tsProject = tsc.createProject('tsconfig.json'),
    config = require('./gulp.config')(),

    browserSync = require('browser-sync'),
    superstatic = require('superstatic')
;

gulp.task('ts-lint', function () {
    return gulp.src(config.allTs)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }))
    ;
});

gulp.task('compile-ts', function () {
    var sourceTsFiles = [
        config.allTs,
        config.typings
    ];

    var tsResult = gulp
        .src(sourceTsFiles)
        .pipe(tsc(tsProject))
    ;
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('serve', ['ts-lint', 'compile-ts'], function (){

    gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);

    browserSync({
        port: 3000,
        file: ['index.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: './app',
            middleware: superstatic({debug: false})
        }
    });
});

gulp.task('default', ['serve']);