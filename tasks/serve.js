import gulp from 'gulp';
import server from 'browser-sync';

function reload(done) {
	server.reload();
	done();
}

gulp.task('serve', () => {
	server.init({
		server: 'dist'
	});


	gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));

	gulp.watch('src/*.html', {events: ['change', 'add']}, gulp.series('html', reload));
	gulp.watch('src/*.html', {events: ['unlink']}, gulp.series('cleanPages', 'html', reload));

	gulp.watch('src/js/**/*.js', gulp.series('scripts', reload));


	gulp.watch(['src/img/**/*', '!src/img/favicon/*', '!src/img/sprite/*', '!src/img/symbols/*'], {events: ['unlink']}, gulp.series('cleanImgs', 'imgs', reload));
	gulp.watch(['src/img/**/*', '!src/img/favicon/*', '!src/img/sprite/*', '!src/img/symbols/*'], {events: ['change', 'add']}, gulp.series('imgs', reload));

	gulp.watch('src/img/favicon/*', {events: ['unlink']}, gulp.series('cleanFavicon', 'favicons', reload));
	gulp.watch('src/img/favicon/*', {events: ['add']}, gulp.series('favicons', reload));

	gulp.watch('src/img/sprite/*', gulp.series('sprite', reload));

	gulp.watch('src/img/symbols/*', gulp.series('symbols', reload));

	gulp.watch('src/fonts/**/*', {events: ['unlink']}, gulp.series('cleanFonts', 'fonts', reload));
	gulp.watch('src/fonts/**/*', {events: ['add']}, gulp.series('fonts', reload));
});
