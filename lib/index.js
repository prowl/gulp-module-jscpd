'use strict';
var jscpd = require('gulp-jscpd');

// store a local reference to our parameters
var config = null;
var gulp = null;

/**
 * Sets up the jscpd task
 *
 * @param {Object} gulpRef The gulp reference to assign the tasks to
 * @param {Object} conf The configuration options
 */
function jscpdSetup(gulpRef, conf) {
  // assign our parameters to a local variable
  gulp = gulpRef;
  config = conf;

  gulp.task('jscpd', false, ['soften'], jscpdTask);
}

/**
 * Runs the jscpd task
 */
function jscpdTask() {
  return gulp.src(config.src)
    .pipe(jscpd());
}

module.exports = jscpdSetup;
