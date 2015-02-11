'use strict';

angular.module('ngcourse.tasks', ['ngcourse.server'])

.factory('tasks', function(server, $log, users, $q) {
  var service = {};

  var taskPromise;
  service.getTasks = function () {
    taskPromise = taskPromise || server.get('/api/v1/tasks');
    return taskPromise;
  };

  service.createTask = function (task) {
    return users.getUsers()
      .then(function(userList) {
        var foundIt = false;
        userList.forEach(function(user) {
          if(user.username === task.owner) {
            foundIt = true;
          }
        });

        if (foundIt) {
            return server.post('/api/v1/tasks', task);
        }

        return $q.reject(new Error('Unknown owner'));
      });
  };

  return service;
});
