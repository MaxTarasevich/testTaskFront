const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const {src, dest} = require('gulp')

//Config
const path = require('../config/path')



//Plugins
const SASS = require('gulp-sass')(require('sass'));

//pug

const sass =()=> {
    return src(path.scss.src)
    .pipe(SASS())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(dest(path.scss.dest))
 }

 module.exports = sass