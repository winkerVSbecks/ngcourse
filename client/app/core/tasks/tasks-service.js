'use strict';

angular.module('ngcourse.tasks', [])
.factory('tasks', function(server) {
  var service = {};

  service.getTasks = function () {
    return server.get('/api/v1/tasks');
  };

  service.getMyTasks = function () {
    return service.getTasks()
      .then(function(tasks) {
        return filterTasks(tasks, {
          owner: user.username
        });
      });
  };

  service.getTaskById = function (_id) {
    return service.getTasks()
      .then(function(tasks) {

        return tasks.find(function(task) {
          return task._id === _id;
        });

      });
  };

  return service;
});
