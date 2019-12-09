import gulp from 'gulp';
import server from 'browser-sync';

gulp.task('serve', () => {
	server.init({
		server: 'dist'
	});
	gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));
	gulp.watch('src/*.html', gulp.parallel('html'));
	gulp.watch('src/js/**/*.js', gulp.parallel('scripts'));
	gulp.watch('src/img/**/*', gulp.parallel('images'));
	gulp.watch('src/fonts/**/*', gulp.parallel('fonts'));
});
