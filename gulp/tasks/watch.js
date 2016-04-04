var gulp = require("gulp");
var config = require('../config').path;

gulp.task('watch', function(){

    return (function () {

        gulp.watch(
            config.sourceDir + 'images/**/*',
            ['images']
        );
        gulp.watch(
            config.sourceDir + 'sass/**/*.sass',
            ['sass']
        );
        gulp.watch(
            config.sourceDir + 'json/**/*.json',
            ['json']
        );
        gulp.watch(
            config.sourceDir + 'jade/**/*.jade',
            ['jade']
        );
        gulp.watch(
            config.sourceDir + 'js/**/*.js',
            ['script']
        );
        gulp.watch(
            config.sourceDir + 'js/**/*.jsx' ,
            ['jsx']
        );

    })();

});