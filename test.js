'use strict';

var toBoolean = require('./');
var test = require('tape');

test('truthy values', function(t) {
  t.deepEqual(toBoolean('y'), true, '"y" is "true"');
  t.deepEqual(toBoolean('yes'), true, '"yes" is "true"');
  t.deepEqual(toBoolean('true'), true, '"true" is "true"');
  t.deepEqual(toBoolean('1'), true, '"1" is "true"');
  t.end();
});

test('falsy', function(t) {
  t.deepEqual(toBoolean('n'), false, '"n" is "false"');
  t.deepEqual(toBoolean('no'), false, '"no" is "false"');
  t.deepEqual(toBoolean('false'), false, '"false" is "false"');
  t.deepEqual(toBoolean(''), false, 'empty string is "false"');
  t.deepEqual(toBoolean('        '), false, 'giant empty string is "false"');
  t.deepEqual(toBoolean('0'), false, '"0" is "false"');
  t.end();
});
