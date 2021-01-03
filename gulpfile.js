/**
 * Gulpfile.js
 */

const { src, parallel, dest, watch } = require("gulp");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const less = require("gulp-less");
const cleanCSS = require("gulp-clean-css");

function terserDocConfigJS() {
  return src("./docs/pre.config.js")
    .pipe(terser())
    .pipe(rename("pre.config.min.js"))
    .pipe(dest("./docs/dist"));
}

function compileDocLess() {
  return src("./docs/index.less")
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(rename("index.min.css"))
    .pipe(dest("./docs/dist"));
}

function watchDocConfig() {
  watch("./docs/pre.config.js", terserDocConfigJS);
  watch("./docs/styles/*.less", compileDocLess);
}

exports.build = parallel(terserDocConfigJS, compileDocLess);
exports.watch = watchDocConfig;
exports.js = terserDocConfigJS;
exports.less = compileDocLess;

exports.default = watchDocConfig;
