'use strict';

/**
 * @ngdoc service
 * @name clientApp.Session
 * @description
 * This service temporary holds user's session id and username after login
 * Service in the clientApp.
 */
 angular.module('clientApp')
 .service('Session', function () {

 	this.create = function (sessionId, userName) {
 		this.id = sessionId;
 		this.userName = userName;
 	};

 	this.destroy = function () {
 		this.id = null;
 		this.userName = null;
 	};
 	this.sessionId = function(){
 		return this.id;
 	}

 });
