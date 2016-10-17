'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl is controller for main list page of site. It has functions
 * related to list of videos and modal dialog function to display single video.
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope,$location, Video,$rootScope, URL, $uibModal) {

        //Initial fales
    	var skip = 0;  //Number of records to skip while getting video list
    	var limit = 10; //Max number of records to get in a request

    	$scope.videos = [];    //List of videos
    	$scope.url = URL;  //API url
    	$scope.busy = false;

    	$scope.currentVideoRated = {}; //Current video being shown in modal seprately

        //Get videos from backend server
    	$scope.getVideos = function(){

    		$scope.busy = true;
    		Video.get(skip, limit).then(function(result){

                if(result.data.data.length == 0)
                    stop = true;

    			angular.forEach(result.data.data, function(value, key){
    				value.currentRating = Math.ceil($scope.sum(value.ratings) / value.ratings.length);
    				$scope.videos.push(value);
    			});
          console.log($scope.videos);
	    		skip += limit;
	    		$scope.busy = false;
	    	});
    	};

        //Open single video when user clicks on video title
        $scope.openVideo = function(video, index, recent){

            $scope.currentVideo = video;
            $scope.currentIndex = index;    //Index of array in $scope.videos for current video

            if(recent != undefined)
            {
                $scope.currentVideo = video;
                return;
            }
            //$rootScope.recent = $scope.currentVideo;

          //$location.path('/detail');

            // Video.getRecent().then(function(videos){
            //
            //     console.log(videos);
                //$scope.recent = videos;
              //$rootScope.recent = videos;
                // angular.forEach($scope.recent, function(value, key){
                //     value.currentRating = Math.ceil($scope.sum(value.ratings) / value.ratings.length);
                //     $scope.videos.push(value);
                // });
                //console.log($scope.recent);
                // //Generate bootstrap modal to show video
                // var modalInstance = $uibModal.open({
                //     animation: $scope.animationsEnabled,
                //     templateUrl: 'views/detail.html',
                //     scope: $scope,
                //     size: 'xlg'
                // });

                //Video.addToRecent(video._id);
            //});

        };

        //Sum ratings array to get average rating for each video
    	$scope.sum = function(items, prop){
		    return items.reduce( function(a, b){
		        return a + b;
		    }, 0);
		};


        //Add new rating from video and update average rating
		$scope.updateRating = function(id, rate, index){
			Video.rate({videoId: id, rating: rate}).then(function(result){
				$scope.videos[index].currentRating = Math.ceil($scope.sum(result.data.data.ratings) / result.data.data.ratings.length);
			});
		}

        //get initial videos when page loads
    	$scope.getVideos();

  });
