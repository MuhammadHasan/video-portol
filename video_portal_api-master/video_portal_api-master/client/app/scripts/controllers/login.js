'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').controller('LoginCtrl', function ($rootScope, $scope, $location, Auth, md5, AUTH_EVENTS) {

    //gets the user.username and user.password from from and initiates  login process
    $scope.loginUser = function(user){

        //Generate md5 password from plain password
    	user.password = md5.createHash(user.password);

    	Auth.login(user).then(function (result) {
    		if(result.status == false)
    		{
                //Login was unsuccessful
    			$scope.error = true;
    			$scope.errorMessage = result.data;
    		}
    		else
    		{
                //Successful login
	    		$location.path('/');
	    	}
	    });
    }

});
