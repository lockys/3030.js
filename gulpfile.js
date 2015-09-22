var gulp = require('gulp'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  path = {
    src: './src/',
    dist: './dist/',
  };

var plugins = gulpLoadPlugins({
  pattern: ['gulp-*', 'del'],
  replaceString: /\bgulp[\-.]/,
});

gulp.task('js', function() {
  gulp.watch(path.src + 'js/*.js', ['js']);
  return gulp.src(path.src + 'js/*.js')
    .pipe(plugins.concat('30.js'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(path.dist + 'js'))
    .pipe(plugins.notify({ message: 'Scripts Task Finished!' }));
});

gulp.task('less', function() {
  gulp.watch(path.src + 'less/*.less', ['less']);
  return gulp.src(path.src + 'less/*.less')
      .pipe(plugins.less())
      .pipe(plugins.concatCss('30.css')) // name of concated css.
      .pipe(plugins.rename({ suffix: '.min' }))
      .pipe(plugins.minifyCss())
      .pipe(gulp.dest(path.dist + 'css'))
      .pipe(plugins.notify({ message: 'Less Process Finished!' }));
});

gulp.task('image', function() {
  return gulp.src(path.src + 'img/*')
    .pipe(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(path.dist + 'img'))
    .pipe(plugins.notify({ message: 'Images Compression Finished!' }));
});

gulp.task('clean', function(cb) {
  del([path.dist], cb);
});

/**
  default task by 'gulp' and do less -> image -> js task
**/
gulp.task('default', ['less', 'image', 'js']);
