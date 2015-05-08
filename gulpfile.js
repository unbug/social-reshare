var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var fs = require('fs');

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var through2 = require('through2');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var cachebust = new $.cachebust();
require('date-utils');

//values
var distPath = './dist/';


//clear dist folder
gulp.task('clean:dist', function (cb) {
    del([distPath + '*'], {force: true}, cb);
});


//compress js to dist
gulp.task('uglifyjs', function () {
    return $.requirejs({
        baseUrl: './',
        include: ['SocialAppReshare.js'],
        out: 'sar.min.js',
        optimize: 'none',
        wrap: true
    })
        .pipe(through2.obj(function (file, enc, next) {
            this.push(file);
            this.end();
            next();
        }))
        .pipe($.amdclean.gulp({
            'prefixMode': 'standard'
        }))
        .pipe($.uglify())
        .pipe(gulp.dest(distPath))
        .pipe($.size({title: 'uglifyjs'}));
});

gulp.task('dist', function (cb) {
    runSequence('clean:dist', 'uglifyjs',cb);
});
gulp.task('default', function(cb){
    runSequence('dist',cb);
});
