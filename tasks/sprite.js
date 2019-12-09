import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import spritesmith from 'gulp.spritesmith';
import merge from 'merge-stream';

gulp.task('sprite', () => {
	const spriteData = gulp.src('src/img/sprite/*')
		.pipe(imagemin([imagemin.jpegtran({progressive: true}), pngquant()]))
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.scss',
			imgPath: '../img/sprite.png',
			padding: 1
		}));
	const imgStream = spriteData.img
		.pipe(gulp.dest('dist/img'));
	const cssStream = spriteData.css
		.pipe(gulp.dest('src/scss/base'));
	return merge(imgStream, cssStream);
});
