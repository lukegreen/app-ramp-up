'use strict';

/**
 * @ngdoc service
 * @name appRampUpApp.current
 * @description
 * # current
 * Factory in the appRampUpApp.
 */
angular.module('appRampUpApp')
  .factory('current', function () {
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
