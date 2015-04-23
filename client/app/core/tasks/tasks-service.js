'use strict';

angular.module('ngcourse.tasks', [
  'ngcourse.server'
])

.factory('tasks', function (server) {
  var service = {};
  var taskPromise;
  service.getTasks = function() {
    taskPromise = taskPromise || server.get('/api/v1/tasks');
    return taskPromise;
  };

  // service.getMyTasks = function() {
  //   return service.getTasks()
  //     .then(function(tasksArray) {
  //       return _.filter(tasksArray, function(task) {
  //         return task.owner === user.username;
  //       });
  //     });
  // };
  return service;
});
