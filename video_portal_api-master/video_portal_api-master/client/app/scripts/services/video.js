'use strict';

/**
 * @ngdoc service
 * @name clientApp.Video
 * @description
 * This factory gets video list, single video and inserts new rating for each video by communicating to REST API
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('Video', function ($http, $q, Session, URL) {
    
    var video = {};

    video.get = function(skip, limit) {
      return $http({
        method: 'GET',
        url: URL + "videos?sessionId=" + Session.sessionId() + '&skip=' + skip + '&limit=' + limit
      })
      .success(function (data){
        console.log(data);
      })
      .error(function(error){
        console.log(error);
      })
    }

    video.detail = function(videoId){
      return $http({
        method: 'GET',
        url: URL + "video?sessionId=" + Session.sessionId() + '&videoId=' + videoId
      })
      .success(function (data){
        return data;
      });
    }

    video.rate = function(ratingObj){
      return $http
      .post(URL + 'video/ratings?sessionId=' + Session.sessionId(), ratingObj)
      .then(function (data) {
        return data;
      });
    }

    video.addToRecent = function(video_id) {
      var recentItem = JSON.parse(window.localStorage.getItem('recentVideos'));
      if (recentItem == null) {
        recentItem =[{video_id: video_id}];
        window.localStorage.setItem('recentVideos', JSON.stringify(recentItem));
      }
      else {
          var itemToAdd = {video_id: video_id};

          for(var k in recentItem) 
          {
              if(JSON.stringify(recentItem[k]) == JSON.stringify(itemToAdd))
              {
                return;
              }
          }

          recentItem.push(itemToAdd);
          window.localStorage.setItem('recentVideos', JSON.stringify(recentItem));
      }
    }

    video.getRecent = function(){

      var deferred = $q.defer();
      var recentItem = JSON.parse(window.localStorage.getItem('recentVideos'));
      var result = [];
      var promise = [];

      if (recentItem == null)
        recentItem = [];

      var count = 0
      for (var i = recentItem.length - 1; i >= 0 ; i--) {
          if(count <= 4)
          {
              promise.push(video.detail(recentItem[i].video_id).then(function(response){
                result.push(response.data.data);
              }));
          }
          else
            break;
      }

      $q.all(promise).then(function() {
        deferred.resolve(result);
      });

      return deferred.promise;
    }

    return video;
  });
