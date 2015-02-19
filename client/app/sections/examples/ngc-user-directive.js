'use strict';

angular.module('ngcourse-example-directives')

.directive('ngcUser',
  function ($log) {
    return {
      restrict: 'AE', // vs 'A', 'AE'
      replace: true,
      transclude: true,
      scope: {
        
      },
      templateUrl: 'app/sections/examples/ngc-user-directive-with-template-url.html',
      link: function(scope, element, attributes) {
        scope.foo = 'FOOO';
      }
    };
  }
);
