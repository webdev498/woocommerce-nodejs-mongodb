'use strict';

describe('Controller: PostProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PostProductsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostProductsCtrl = $controller('PostProductsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
