'use strict';

angular.module('ngcourse', [
  'ngcourse.tasks',
  'ngcourse.server',
  'ngcourse-example-directives'
])
.run(function($log) {
  $log.debug('All ready');
});
