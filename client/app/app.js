'use strict';

angular.module('ngcourse', [
  'ngcourse.main-ctrl',
  'ngcourse.tasks',
  'ngcourse.users',
  'ngcourse.router',
  'koast'
])

.run(function($log, API_BASE_URL, koast) {
  $log.info('All ready!');

  koast.init({
    baseUrl: API_BASE_URL
  });
  koast.setApiUriPrefix('/api/v2/');
  koast.addEndpoint('tasks', ':_id', {
    useEnvelope: true
  });
  koast.addEndpoint('users', ':_id', {
    useEnvelope: true
  });
});
