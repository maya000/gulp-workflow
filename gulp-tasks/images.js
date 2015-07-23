var gulp = require('gulp'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('images', function() {
    return gulp.src('src/images/**/*.{png,jpg,gif}')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/assets/images'))
        .pipe(notify({ message: 'Images task complete' }));
});

