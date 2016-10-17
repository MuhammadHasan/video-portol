'use strict';


'use strict';

/**
 * @ngdoc service
 * @name clientApp.exceptionHandler
 * @description
 * # exceptionHandler
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('httpExceptionHandler', function ($exceptionHandler, $q) {
        return {
            responseError: function responseError(rejection) {
                $exceptionHandler("An HTTP request error has occurred.\nHTTP config: " + JSON.stringify(rejection.config) + ".\nStatus: " + rejection.status);
                //alert('An unhandled exception occurred while submitting your request! Please try again later\nStatus: ' + rejection.status)
                //$raven.captureMessage("An HTTP request error has occurred.\nHTTP config: " + rejection.config + ".\nStatus: " + rejection.status);
                return $q.reject(rejection);
            }
        };
  })
  .config(function ($httpProvider) {
      $httpProvider.interceptors.push('httpExceptionHandler');
  });



