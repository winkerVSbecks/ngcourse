angular.module('ngcourse', [
	'ngcourse.tasks', 
	'ngcourse.server',
	'ngcourse.router'
])

.run(function ($log) {
  $log.info('Ready to go.');
});
