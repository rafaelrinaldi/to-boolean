(function(exports) {

  var TRUTHY_VALUES = 'y yes true'.split(/\s/);

  function toBoolean(value) {
    value = value.toString();
    value = value.trim();
    value = value.toLowerCase();

    // Empty string is considered a falsy value
    if(!value.length) {
      return false;

    // Any number above zero is considered a truthy value
    } else if(!isNaN(Number(value))) {
      return value > 0;

    // Any value not marked as a truthy value is automatically falsy
    } else {
      return TRUTHY_VALUES.indexOf(value) >= 0;
    }
  }

  if(typeof define === 'function' && define.amd) {
    define(function() { return toBoolean; });
  } else if(typeof module !== 'undefined' && module.exports) {
    module.exports = toBoolean;
  } else {
    exports.toBoolean = toBoolean;
  }

})(this);
