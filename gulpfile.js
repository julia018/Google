let postcss = require('gulp-postcss');
let gulp = require('gulp');
let autoprefixer = require('autoprefixer');
let stylelint = require('stylelint');
let config = require('./stylelintrc.config.js')
 
gulp.task('css', function () {
    let plugins = [
        autoprefixer({
            overrideBrowserslist: ['last 1 version']
        }),
        stylelint(config)
    ];
    return gulp.src('./css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});
