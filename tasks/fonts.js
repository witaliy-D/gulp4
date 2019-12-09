import gulp from 'gulp';
import server from 'browser-sync';

gulp.task('fonts', () => {
	return gulp
		.src(['src/fonts/**/*'], {base: 'src'})
		.pipe(gulp.dest('dist'))
		.pipe(server.stream());
});
