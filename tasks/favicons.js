import gulp from 'gulp';
import favicons from 'gulp-favicons';


gulp.task('favicons', () => {
	return gulp.src('./src/img/favicon/*')
		.pipe(favicons({
			icons: {
				appleIcon: true,
				favicons: true,
				online: false,
				appleStartup: false,
				android: false,
				firefox: false,
				yandex: false,
				windows: false,
				coast: false
			}
		}))
		.pipe(gulp.dest('./dist/img/favicons'));
});
