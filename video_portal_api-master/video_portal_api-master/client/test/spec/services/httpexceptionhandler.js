'use strict';

describe('Service: httpExceptionHandler', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var httpExceptionHandler;
  beforeEach(inject(function (_httpExceptionHandler_) {
    httpExceptionHandler = _httpExceptionHandler_;
  }));

  it('should do something', function () {
    expect(!!httpExceptionHandler).toBe(true);
  });

});
