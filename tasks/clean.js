import gulp from 'gulp';
import del from 'del';

gulp.task('clean', () => {
	return del('dist');
});

gulp.task('cleanImgs', () => {
	return del('dist/img');
});
