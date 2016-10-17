'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:finishLoading
 * @description
 * This directive is used when lazy loading has finished creating <video> tags in dom.
 * once all tags are generated we attach an event handler on start of each video which 
 * pause any other video if running 
 */
 angular.module('clientApp')
 .directive('finishLoading', function () {
 	return function(scope, element, attrs) {
 		if(scope.$last)
 		{
 			var videos = document.getElementsByTagName("video");

 			function stopOthers () {
 				var id = this.id, i = 0;
 				for (var i = videos.length - 1; i >= 0; i--) {
 					if (videos[i].id !== id) {
 						videos[i].pause();
 					}
 				}
 			}

 			for (var i = videos.length - 1; i >= 0; i--) {
 				videos[i].addEventListener("play", stopOthers, false);
 			}
 		}
 	};
 });
