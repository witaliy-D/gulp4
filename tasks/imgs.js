import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

gulp.task('imgs', () => {
	return gulp.src(['src/img/*', '!src/img/sprite', '!src/img/symbols', '!src/img/favicon'])
		.pipe(
			imagemin([
				imagemin.jpegtran({progressive: true}),
				pngquant(),
				imagemin.svgo({
					plugins: [{removeViewBox: true}, {removeTitle: true}]
				})
			])
		)
		.pipe(gulp.dest('dist/img'));
});
