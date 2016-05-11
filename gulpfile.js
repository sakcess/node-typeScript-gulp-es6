var gulp        = require('gulp');
var browserSync = require('browser-sync');
var typeScript  = require('gulp-typescript');
var del         = require('del');
var concat      = require('gulp-concat');
var browserify  = require('browserify');
var tsify       = require('tsify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
//comment
var bases = {
  app: 'app/',
  dist: 'dist/',
};

gulp.task('clean', function()
{
  del.sync(bases.dist);
});

gulp.task('build', ['typeScriptIt'], function()
{
  gulp.src(bases.app+'**/*.html')
  .pipe(gulp.dest(bases.dist))
  .pipe(browserSync.reload({stream : true}));
});

gulp.task('browserSync', function()
{
  browserSync({
    server: {
      baseDir: bases.dist
    }
  });
});

gulp.task('watchfiles', function()
{
  gulp.watch(bases.app+'**/*.html', ['build']);
  gulp.watch([bases.app+'**/*.ts'],   ['typeScriptIt']);
});

gulp.task('typeScriptIt', function()
{
  browserify({ entries: bases.app+'App.ts', debug: true })
  .plugin(tsify)
  .bundle()
  .pipe(source('App.js'))
  .pipe(buffer())
  .pipe(gulp.dest(bases.dist))
  .pipe(browserSync.reload({stream : true}));

});

gulp.task('default', ['clean', 'build', 'browserSync', 'watchfiles']);
