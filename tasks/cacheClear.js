// таск для очистки кэша при проблемах с картинками, запуск вручную

import gulp from 'gulp';
import cache from 'gulp-cache';

gulp.task('cacheClear', () => {
	return cache.clearAll();
});
