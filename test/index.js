'use strict';

var should = require('should');// jshint ignore:line

var jscpd = require('../lib/index');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, description, deps, func) {// jshint ignore:line
  task = func;
};

var configMock = {
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

jscpd(gulpMock, configMock);

describe('Gulp Module JSCPD', function() {
  it('Should return a function', function() {
    jscpd.should.be.type('function');
  });

  it('Should create a task', function() {
    task.should.be.type('function');
  });

  it('Should run and throw an error', function(cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
