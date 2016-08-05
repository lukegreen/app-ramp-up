'use strict';

/**
 * @ngdoc function
 * @name appRampUpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appRampUpApp
 */
angular.module('appRampUpApp')
  .controller('MainCtrl', function ($scope, citysearch) {
    $scope.citysearch = citysearch.find();

    $scope.findCities = function(){
       $scope.citiesFound = citysearch.find({
           query: $scope.location
       });
       $scope.searchQuery = $scope.location;
     };
  });

  
