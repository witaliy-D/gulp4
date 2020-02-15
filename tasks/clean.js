import gulp from 'gulp';
import del from 'del';

gulp.task('clean', () => {
	return del('dist');
});

gulp.task('cleanImgs', () => {
	return del(['dist/img/**/*', '!dist/img/favicons', '!dist/img/symbols.svg', '!dist/img/sprite.png']);
});

gulp.task('cleanFavicon', () => {
	return del('dist/img/favicons');
});

gulp.task('cleanFonts', () => {
	return del('dist/fonts');
});

gulp.task('cleanPages', () => {
	return del('dist/*.html');
});

