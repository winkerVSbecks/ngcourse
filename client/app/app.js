'use strict';

angular.module('ngcourse.api-constants', [])
.constant('API_BASE_URL', 'http://ngcourse.herokuapp.com');

angular.module('ngcourse', [
  'ngcourse.tasks',
  'ngcourse.server',
  'ngcourse.router'
])



