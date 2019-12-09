import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gulpif from 'gulp-if';
import replace from 'gulp-replace';
import server from 'browser-sync';
import yargs from 'yargs';

const argv = yargs.argv;
const production = !!argv.production;


gulp.task('html', () => {
	return gulp.src('src/*.html')
		.pipe(plumber())
		.pipe(gulpif(production, replace('.css', '.min.css')))
		.pipe(gulpif(production, replace('.js', '.min.js')))
		.pipe(gulp.dest('dist'))
		.pipe(server.stream());
});
