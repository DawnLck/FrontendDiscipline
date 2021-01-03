/**
 * Gulpfile.js
 */

const { src, series, dest, watch } = require("gulp");
const terser = require("gulp-terser");
const rename = require("gulp-rename");

function terserDocConfigJS() {
  return src("./docs/pre.config.js")
    .pipe(terser())
    .pipe(rename("pre.config.min.js"))
    .pipe(dest("./docs/dist"));
}

function watchDocConfig() {
  watch("./docs/pre.config.js", terserDocConfigJS);
}

exports.buildDocConfig = terserDocConfigJS;
exports.watchDocConfig = watchDocConfig;
