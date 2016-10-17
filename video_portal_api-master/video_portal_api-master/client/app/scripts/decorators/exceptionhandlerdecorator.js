'use strict';

/**
 * @ngdoc function
 * @name clientApp.decorator:Exceptionhandler
 * @description
 * # Exceptionhandler
 * Decorator of the clientApp
 */
angular.module('clientApp')
  	.config(function ($provide) {
	    $provide.decorator("$exceptionHandler", function ($delegate, $injector) {
	        return function (exception, cause) {
	            var $rootScope = $injector.get("$rootScope");
	            alert('An unhandled exception occured while processing your request! Please try again later\nException: ' + exception)
	            //$raven.captureMessage('message:' + "Exception, reason: " + exception);
	            $delegate(exception, cause);
	        };
		});
  	});
