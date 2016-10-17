'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should get the list of videos from backend', function () {
    scope.videos = 'Video 1';
    scope.getVideos();
    expect(scope.videos.length).toBe(1);
  });

  it('should open the video from modal', function () {
    scope.videos = 'Video 1';
    scope.getVideos();
    expect(scope.videos.length).toBe(1);
  });
});
