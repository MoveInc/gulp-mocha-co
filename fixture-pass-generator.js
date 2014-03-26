'use strict';
var assert = require('assert');
var generatorFunction = function *(){
  return true;
}
it('should pass', function *() {
  var returnedValue = yield generatorFunction();
  assert(returnedValue);
});
