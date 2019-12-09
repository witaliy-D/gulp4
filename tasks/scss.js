import gulp from 'gulp';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import postcss from 'gulp-postcss';
import mqpacker from '@lipemat/css-mqpacker';
import cleancss from 'gulp-clean-css';
import rename from 'gulp-rename';
import debug from 'gulp-debug';
import server from 'browser-sync';
import yargs from 'yargs';

const argv = yargs.argv;
const production = !!argv.production;

gulp.task('scss', () => {
	const onError = function (err) {
		notify.onError({
			title: 'Error in scss task',
			message: 'Error: <%= error.message %>',
			sound: 'Beep'
		})(err);
		this.emit('end');
	};
	return gulp.src('src/scss/style.scss')
		.pipe(plumber({errorHandler: onError}))
		.pipe(gulpif(!production, sourcemaps.init()))
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer({grid: true}))
		.pipe(postcss([mqpacker({sort: true})]))
		.pipe(gulpif(production, cleancss({
			level: {
				1: {
					specialComments: 0,
					removeEmpty: true,
					removeWhitespace: true
				},
				2: {
					mergeMedia: true,
					removeEmpty: true,
					removeDuplicateFontRules: true,
					removeDuplicateMediaBlocks: true,
					removeDuplicateRules: true,
					removeUnusedAtRules: false
				}
			}
		})))
		.pipe(gulpif(production, rename({suffix: '.min'})))
		.pipe(gulpif(!production, sourcemaps.write('.')))
		.pipe(gulp.dest('dist/css'))
		.pipe(debug({title: 'scss'}))
		.pipe(server.stream());
});
