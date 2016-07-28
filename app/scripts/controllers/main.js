'use strict';

/**
 * @ngdoc function
 * @name appRampUpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appRampUpApp
 */
angular.module('appRampUpApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function(){
       $scope.current = current.query({
           location: $scope.location
       });
     };
  });
