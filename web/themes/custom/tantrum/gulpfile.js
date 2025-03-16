'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const copy = require('gulp-copy');

// Tarea para compilar Sass
function compileSass() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
}

// Tarea para copiar archivos de UIkit
function copyUIkit() {
    return gulp.src([
            'node_modules/uikit/dist/js/uikit.min.js',
            'node_modules/uikit/dist/js/uikit-icons.min.js'
        ])
        .pipe(gulp.dest('js/vendor/uikit')); // Carpeta donde se copiarán los archivos
}

// Tarea para observar cambios en Sass
function watchSass() {
    gulp.watch('scss/**/*.scss', compileSass);
}

// Exportar tareas
exports.sass = compileSass;
exports.copyUIkit = copyUIkit;
exports.watch = watchSass;
exports.default = gulp.series(compileSass, copyUIkit, watchSass);
