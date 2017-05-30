'use strict';

describe('Service: restcalls', function () {

  // load the service's module
  beforeEach(module('telehealthApp'));

  // instantiate service
  var restcalls;
  beforeEach(inject(function (_restcalls_) {
    restcalls = _restcalls_;
  }));

  it('should do something', function () {
    expect(!!restcalls).toBe(true);
  });

});
