'use strict';

angular.module('ngcourse', [
  'ngcourse.tasks',
  'ngcourse.server',
  'ngcourse.users',
  'ngcourse.router'
])

.run(function($log) {
  $log.info('All ready!');
});
