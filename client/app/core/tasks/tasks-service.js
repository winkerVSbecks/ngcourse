'use strict';

angular.module('ngcourse.tasks', [ 'ngcourse.server' ])
.factory('tasks', function(server) {
  var service = {};

  var taskPromise;
  service.getTasks = function () {
    taskPromise = taskPromise || server.get('/api/v1/tasks');
    return taskPromise;
  };

  return service;
});
