'use strict';

/**
 * @ngdoc service
 * @name appRampUpApp.current
 * @description
 * # current
 * Factory in the appRampUpApp.
 */
 angular.module('appRampUpApp')
   .factory('current', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=367aab07d8857e63a96da15a80673c77', {}, {
       query: {
         method:'GET',
         params:{
           location: 'Seattle,us'
         },
         isArray:false
       }
     });
   });
