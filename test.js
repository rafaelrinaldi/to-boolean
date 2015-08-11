'use strict';

var toBoolean = require('./');
var test = require('tape');

test('truthy values', function(t) {
  t.deepEqual(toBoolean('y'), true, '"y" is "true"');
  t.deepEqual(toBoolean('yes'), true, '"yes" is "true"');
  t.deepEqual(toBoolean('true'), true, '"true" is "true"');
  t.end();
});
