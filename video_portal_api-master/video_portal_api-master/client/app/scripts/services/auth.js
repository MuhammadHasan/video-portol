'use strict';

/**
 * @ngdoc service
 * @name clientApp.Auth
 * @description
 * # Auth
 * Factory in the clientApp.
 */
 angular.module('clientApp')
 .factory('Auth', function (URL, Session, $http) {
  
  var auth = {};

  //Authenticate user from backend server
  auth.login = function (credentials) {
    return $http
    .post(URL + 'user/auth', credentials)
    .then(function (res) {
      if(res.data.status == 'error')
      {
        return {status: false, data: res.data.error};
      }
      else
      {
        Session.create(res.data.sessionId, res.data.username);
        return {status: true, data: res.data.username};
      }
    });
  };

  //Check if the user is authenticated and its session id exists
  auth.isAuthenticated = function () {
    return !!Session.id;
  };
    
  return auth;
});
