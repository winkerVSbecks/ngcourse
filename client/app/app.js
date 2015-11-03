'use strict';

angular.module('ngcourse', [
  'ngcourse.tasks',
  'ngcourse.server'
])
.run(function($log) {
  $log.info('All ready!');
});