var gulp = require("gulp");
var jade = require('gulp-jade');
var data = require('gulp-data');
var config = require('../config').path;
var option = require('../config').option;



gulp.task('jade', function(){
    gulp.src([ option.jade.base + '**/*.jade','!' + option.jade.base +  'component/*.jade'],
        { base: option.jade.base })
        .pipe( data( function (file) {
        return { 'meta': require( option.meta.basePath + 'meta.json')}
    }))
        .pipe(jade( option.jade.option ))
        .pipe(gulp.dest( config.publicDir ));
});

