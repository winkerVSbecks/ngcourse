'use strict';

angular.module('ngcourse.tasks', ['ngcourse.server'])

.factory('tasks', function(server, $log) {
  var service = {};

  var taskPromise;
  service.getTasks = function () {
    taskPromise = taskPromise || server.get('/api/v1/tasks');
    return taskPromise;
  };

  service.createTask = function (task) {
    return server.post('/api/v1/tasks', task);
  };

  return service;
});
