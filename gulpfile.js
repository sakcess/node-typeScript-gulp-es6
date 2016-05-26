var gulp = require('gulp');
var browserSync = require('browser-sync');
var typeScript = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var mocha = require('gulp-mocha');

var bases = {
    app: 'app-test/', //'app, app-test/'
    dist: 'build/',
    test: 'test/'
};

gulp.task('clean', function () {
    del.sync(bases.dist);
});

gulp.task('build', ['typeScriptIt'], function () {
    gulp.src(bases.app + '**/*.html')
        .pipe(gulp.dest(bases.dist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: bases.dist
        }
    });
});

gulp.task('watchfiles', function () {
    gulp.watch(bases.app + '**/*.html', ['build']);
    gulp.watch([bases.app + '**/*.ts'], ['typeScriptIt']);
});

gulp.task('typeScriptIt', function () {

    browserify({
        entries: bases.app + 'App.ts',
        debug: true
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(bases.dist))
        .pipe(browserSync.reload({
            stream: true
        }));

});
gulp.task('default', ['clean', 'build', 'browserSync', 'watchfiles']);

gulp.task('test', function () {
    // return gulp.src(bases.test+'**/*.ts')
    // .pipe(typeScript())
    // .pipe(gulp.dest(bases.test+'commonjs'))
    // .pipe(mocha({reporter: 'nyan'})); // list, nyan, progress, spec'

    /*transpile app ts files*/
    gulp.src(bases.app + '**/*.ts')
        .pipe(typeScript())
        .pipe(gulp.dest(bases.app));

    //setting timeout to wait for js file to be created
    setTimeout(
        function () {
            gulp.src(bases.test + '*Test.ts')
                /*transpile test ts files*/
                .pipe(typeScript())
                /*flush to disk*/
                .pipe(gulp.dest(bases.test))
                /*execute tests*/
                .pipe(mocha({
                    reporter: 'spec'
                }))
                .on('end', function () {
                    del.sync(bases.app+'**/*.js');
                    del.sync(bases.test+'**/*.js');
                });
        }, 2000);
});