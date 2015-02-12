'use strict';

angular.module('ngcourse.tasks', ['koast'])

.factory('tasks', function(koast, $log, users, $q) {
  var service = {};

  function makeAuthenticatedMethod(functionToDelay) {
    return function () {
      var myArgs = arguments;
      return koast.user.whenAuthenticated()
        .then(function () {
          return functionToDelay.apply(service, myArgs);
        });
    };
  }

  service.getTasks = makeAuthenticatedMethod(function () {
    return koast.queryForResources('tasks');
  });

  service.getTask = makeAuthenticatedMethod(function (id) {
    return koast.getResource('tasks', {
      _id: id
    });
  });

  service.createTask = makeAuthenticatedMethod(function (task) {
    taskPromise = null;
    return users.getUsers()
      .then(function(userList) {
        var foundIt = false;
        userList.forEach(function(user) {
          if(user.username === task.owner) {
            foundIt = true;
          }
        });

        if (foundIt) {
          return koast.createResource('tasks', task);
        }

        return $q.reject(new Error('Unknown owner'));
      });
  });

  service.updateTask = makeAuthenticatedMethod(function(task) {
    return task.save();
  });

  return service;
});
