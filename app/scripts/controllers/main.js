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
  });
