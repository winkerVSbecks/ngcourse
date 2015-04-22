'use strict';

angular.module('ngcourse.tasks', [
  'ngcourse.server'
])

.factory('tasks', function (server) {
  var service = {};
  service.getTasks = function() {
    return server.get('/api/v1/tasks');
  };
  return service;
});
