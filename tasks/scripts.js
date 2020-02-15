import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import webstream from 'webpack-stream';
import webpack from 'webpack';
import debug from 'gulp-debug';
import yargs from 'yargs';


const argv = yargs.argv;
const production = !!argv.production;

const webpackConfig = require('../webpack.config.js');
webpackConfig.mode = production ? 'production' : 'development';
webpackConfig.devtool = production ? false : 'source-map';


gulp.task('scripts', () => {
	return gulp.src('src/js/app.js')
		.pipe(plumber())
		.pipe(webstream(webpackConfig), webpack)
		.pipe(gulpif(production, rename({suffix: '.min'})))
		.pipe(debug({title: 'JS '}))
		.pipe(gulp.dest('dist/js'));
});
