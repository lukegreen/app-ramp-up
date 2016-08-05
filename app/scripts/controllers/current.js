'use strict';

/**
 * @ngdoc function
 * @name appRampUpApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the appRampUpApp
 */
 angular.module('yourApp')
   .controller('CurrentCtrl', function ($scope, $routeParams, current) {
     $scope.cityID = $routeParams.cityID;

     $scope.currentWeather = current.query({
         cityID: $routeParams.cityID
     });
   });
