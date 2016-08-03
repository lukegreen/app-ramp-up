'use strict';

/**
 * @ngdoc service
 * @name appRampUpApp.citysearch
 * @description
 * # citysearch
 * Factory in the appRampUpApp.
 */
angular.module('appRampUpApp')
  .factory('citysearch', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
