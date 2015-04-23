'use strict';

angular.module('ngcourse')

.controller('TaskListCtrl', function TaskListCtrl($log, tasks, router) {
  var vm = this;
  vm.numberOfTasks = 0;
  vm.tasks = [];

  vm.getUserDisplayName = function (username) {
    return username;
  };

  vm.goToTask = router.goToTask;

  tasks.getTasks()
    .then(function(tasksArray) {
      vm.tasks = tasksArray;
      vm.numberOfTasks = tasksArray.length;
    })
    .then($log.error);
});
