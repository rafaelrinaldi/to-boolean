# to-boolean [![Build Status](https://travis-ci.org/rafaelrinaldi/to-boolean.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/to-boolean)

> Convert strings to boolean.

## Install

Via [npm](http://npmjs.com):

```sh
$ npm install to-boolean --save
```

Via [Bower](http://bower.io):

```sh
$ bower install to-boolean --save
```

## Usage

```javascript
var toBoolean = require('to-boolean');

toBoolean('y'); // true
toBoolean('no'); // false
toBoolean(''); // false
toBoolean('  '); // false
toBoolean('1'); // true
```

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
