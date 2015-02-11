'use strict';

angular.module('ngcourse')
  .directive('thkInputWhiteList', function($log) {
    return {
      require: 'ngModel',

      scope: {
        whiteList: '='
      },
      link: function(scope, element, attrs, ctrl) {
        ctrl.$validators.whiteList = function(modelValue, viewValue) {
          return (-1 !== scope.whiteList.indexOf(viewValue));
        };
      }
    };
  });
