'use strict';

/**
 * @ngdoc filter
 * @name clientApp.filter:videoEmbedUrl
 * @function
 * @description
 * This filter white lists each video url
 * Filter in the clientApp.
 */
angular.module('clientApp')
.filter('videoEmbedUrl', function ($sce, URL) {
    return function(videoUrl) {
      return $sce.trustAsResourceUrl(URL + videoUrl);
    };
});
