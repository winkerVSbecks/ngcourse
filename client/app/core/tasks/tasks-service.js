angular.module('ngcourse.tasks',['ngcourse.server'])
.factory('tasks', function(server, $log) {
  var service = {};

  service.getTask = function (id) {
    return server.get('/api/v1/tasks/' + id).then(function(taskArray){
      return taskArray[0];
    });
  };

  service.getTasks = function () {
    return server.get('/api/v1/tasks')
  };

  service.saveTask = function (task) {
    return server.put('/api/v1/tasks', task._id, task);
  };

  service.newTask = function (task) {
    return server.post('/api/v1/tasks', task);
  };

  service.getMyTasks = function () {
    return service.getTasks()
    .then(function(tasks) {
      return filterTasks(tasks, {
        owner: user.username
      });
    });
  };

  return service;
});