import gulp from 'gulp';


gulp.task('fonts', () => {
	return gulp
		.src(['src/fonts/**/*'], {base: 'src'})
		.pipe(gulp.dest('dist'));
});
