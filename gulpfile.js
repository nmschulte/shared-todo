var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var wrap = require('gulp-wrap');
var mergeStream = require('merge-stream');
var rename = require('gulp-rename');

// project is ES6, transpiled to ES5 via Babel, with RequireJS as a loader
// controlled by Gulp, obviously...

var babelConfig = {
    modules: 'amd'
};

// development build; relies on sourcemaps to support debugging JavaScript
// everything pre-laoded, single bundle
gulp.task('default', function defaultTask() {
    var transpileSrc,
        transformCommonJSDependencies,
        copyRuntime;

    transpileSrc = gulp.src('src/**/*.js').
        pipe(sourcemaps.init()).
        pipe(babel(babelConfig)).
        pipe(concat('shared-todo.js')).
        pipe(sourcemaps.write('.')).
        pipe(gulp.dest('dist'));

    // TODO: split this into it's own module (and package it, maybe?)
    function listDependencies(module) {
        var moduleDeps = require('module-deps');
        var through2 = require('through2');
        var vinyl = require('vinyl');

        var fs = require('graceful-fs');
        var stripBom = require('strip-bom');

        function createFile(path, options, callback) {
            callback(null, new vinyl({path: path.file}));
        }

        function bufferFile(file, options, callback) {
            fs.readFile(file.path, function(error, data) {
                if (error) {
                    callback(error);
                } else {
                    file.contents = stripBom(data);
                    callback(null, file);
                }
            });
        }

        var md = moduleDeps();
        var stream = md.pipe(through2.obj(createFile)).pipe(through2.obj(bufferFile));
        md.end({file: module});

        return stream;
    }


    transformCommonJSDependencies = listDependencies('./node_modules/ampersand-view/ampersand-view.js').
        pipe(require('gulp-debug')()).
        pipe(wrap('var global = window; define(function (require, exports, module) {\n<%= contents %>});\n')).
        pipe(rename(function renameDependenciesAfterCopy(path) {
            var renamings = [
                    /(.*\/)*(.*)\/index.js$/
                ];

            for (var i = 0; i < renamings.length; ++i) {
                var renaming = renamings[i];
                var match = (path.dirname + '/' + path.basename + path.extname).match(renaming);
                if (match) {
                    path.basename = match[2];
                }
            }

            path.dirname = '';
        })).
        pipe(gulp.dest('dist'));

    copyRuntime = gulp.src([
            'node_modules/requirejs/require.js'
        ]).
        pipe(gulp.dest('dist'));

    return mergeStream(transpileSrc, transformCommonJSDependencies, copyRuntime);
});
