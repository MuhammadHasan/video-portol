'use strict';

/**
 * @ngdoc service
 * @name clientApp.AUTHEVENTS
 * @description
 * # AUTHEVENTS
 * Constant in the clientApp.
 */
angular.module('clientApp')
  .constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
});
