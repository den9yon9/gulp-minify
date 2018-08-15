var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pump = require('pump');

const { srcDir, distDir } = require('./pathConfig.js')
 

 
gulp.task('minhtml', function() {
  return gulp.src(srcDir + '/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(distDir));
});
 
gulp.task('mincss', function () {
    gulp.src(srcDir + '/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest(distDir));
});

gulp.task('minjs', function (cb) {
  pump([
        gulp.src(srcDir + '/**/*.js'),
        uglify(),
        gulp.dest(distDir)
    ],
    cb
  );
});


 
gulp.task('minimg', () =>
    gulp.src([srcDir+'/**/*.jpg', srcDir+'/**/*.png', srcDir+'/**/*.gif'])
        .pipe(imagemin())
        .pipe(gulp.dest(distDir))
);

gulp.task('min', ['minhtml', 'mincss', 'minjs','minimg'], function(){

})

