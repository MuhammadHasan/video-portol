'use strict';

/**
 * @ngdoc filter
 * @name clientApp.filter:unique
 * @function
 * @description
 * This filters only shows unique objects from list
 * Filter in the clientApp.
 */
angular.module('clientApp')
  .filter('unique', function () {
    return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   }
  });
