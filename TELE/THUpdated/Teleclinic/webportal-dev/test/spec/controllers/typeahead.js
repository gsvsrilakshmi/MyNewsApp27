'use strict';

describe('Controller: TypeaheadCtrl', function () {

  // load the controller's module
  beforeEach(module('telehealthApp'));

  var TypeaheadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TypeaheadCtrl = $controller('TypeaheadCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TypeaheadCtrl.awesomeThings.length).toBe(3);
  });
});
