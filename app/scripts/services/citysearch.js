'use strict';

/**
 * @ngdoc service
 * @name appRampUpApp.citysearch
 * @description
 * # citysearch
 * Factory in the appRampUpApp.
 */
angular.module('appRampUpApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&units=imperial&type=like&mode=json&APPID=367aab07d8857e63a96da15a80673c77', {}, {
      find: {
        method:'GET',
        params:{
          query: 'Seattle'
        },
        isArray:false
      }
    });
  });
