import gulp from 'gulp';
import server from 'browser-sync';

require('require-dir')('./tasks');

gulp.task('images', gulp.series('cleanImgs', gulp.parallel('sprite', 'symbols', 'imgs')), done => {
	server.reload();
	done();
});

gulp.task('start', gulp.series('clean', 'sprite', 'symbols', gulp.parallel('imgs', 'fonts', 'html', 'scss', 'scripts'), 'serve'));

gulp.task('prod', gulp.series('clean', 'sprite', 'symbols', gulp.parallel('imgs', 'fonts', 'html', 'scss', 'scripts', 'gzip')));
