angular.module('ngcourse', ['ngcourse.tasks', 'ngcourse.server'])

.run(function ($log) {
  $log.info('Ready to go.');
});
