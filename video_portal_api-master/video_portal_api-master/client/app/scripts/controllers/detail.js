'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DetailCtrl', function ($routeParams,$scope,URL,$rootScope,Video) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.url = URL;
    //$scope.clickvideo = $rootScope.recent;
    $scope.video_Id  = $routeParams.videoId;

    Video.detail($scope.video_Id).then(function(result){
      console.log(result);
      console.log(result.data.data);
      $scope.clickvideo = result.data.data;
    });

    $scope.updateRating = function(id, rate, index){
      Video.rate({videoId: id, rating: rate}).then(function(result){
        $scope.videos[index].currentRating = Math.ceil($scope.sum(result.data.data.ratings) / result.data.data.ratings.length);
      });
    }
  });
