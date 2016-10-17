'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
 angular
 .module('clientApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'angular-md5',
  'infinite-scroll',
  'angular-input-stars',
  "com.2fdevs.videogular",
  "com.2fdevs.videogular.plugins.controls",
  "com.2fdevs.videogular.plugins.overlayplay",
  'ui.bootstrap',
  'ngRaven'
  ])
 .run(function($rootScope, Auth, $location, Session){
    $rootScope.$on('$routeChangeStart', function (event) {
      if (!Auth.isAuthenticated()) {
        $location.path('/login');
      }
    });

    $rootScope.isLoggedIn = function(){
      return Auth.isAuthenticated();
    };

    $rootScope.logout = function(){
      Session.destroy();
      $location.path('/login');
    }
})
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/detail/:videoId', {
    templateUrl: 'views/detail.html',
    controller: 'DetailCtrl',
    controllerAs: 'detail'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .when('/detail', {
    templateUrl: 'views/detail.html',
    controller: 'DetailCtrl',
    controllerAs: 'detail'
  })
  .otherwise({
    redirectTo: '/login'
  });
});
