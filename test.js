'use strict';

var toBoolean = require('./');
var test = require('tape');

test('truthy values', function(t) {
  t.deepEqual(toBoolean('y'), false, '"y" is "true"');
  t.end();
});
