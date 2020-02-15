import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gulpif from 'gulp-if';
import replace from 'gulp-replace';
import debug from 'gulp-debug';
import yargs from 'yargs';

const argv = yargs.argv;
const production = !!argv.production;


gulp.task('html', () => {
	return gulp.src('src/*.html')
		.pipe(plumber({
			errorHandler(err) {
				console.log(err.message);
				this.emit('end');
			}
		}))
		.pipe(gulpif(production, replace('.css', '.min.css')))
		.pipe(gulpif(production, replace('.js', '.min.js')))
		.pipe(debug({title: 'html'}))
		.pipe(gulp.dest('dist'));
});
