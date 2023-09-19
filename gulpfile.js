const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

// Tâche pour compiler les fichiers SCSS en CSS
gulp.task('sass', function () {
  return gulp
    .src('src/css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// Tâche pour minifier et renommer les fichiers JS
gulp.task('js', function () {
  return gulp
    .src('src/js/main.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

// Tâche pour minifier le HTML
gulp.task('html', function () {
    return gulp
      .src('src/*.html') // Chemin des fichiers HTML
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist')); // Dossier de destination pour les fichiers HTML
  });

  // Tâche pour optimiser les images
gulp.task('images', function () {
  return gulp
    .src('src/img/*') // Chemin des fichiers images
    .pipe(gulp.dest('dist/img')) // Dossier de destination pour les images optimisées
});

// Tâche pour surveiller les modifications des fichiers
gulp.task('watch', function () {
  browserSync.init({
    server: './dist',
  });
  gulp.watch('src/css/**/*.scss', gulp.series('sass'));
  gulp.watch('src/js/**/*.js', gulp.series('js'));
  gulp.watch('src/*.html', gulp.series('html'));
  gulp.watch('*.html').on('change', browserSync.reload);
});

// Tâche par défaut
gulp.task('default', gulp.parallel('sass', 'js', 'html','images', 'watch'));
