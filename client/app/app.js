'use strict';

angular.module('ngcourse', [
  'ngcourse.tasks',
  'ngcourse.router',
  'ngcourse.users'
])
.run(function($log) {
  $log.info('All ready!');
});
