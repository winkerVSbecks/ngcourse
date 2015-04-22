'use strict';

angular.module('ngcourse')

.controller('TaskListCtrl', function TaskListCtrl($log, tasks) {
  var vm = this;
  vm.numberOfTasks = 0;
  vm.tasks = [];

  tasks.getTasks()
    .then(function(tasksArray) {
      vm.tasks = tasksArray;
      vm.numberOfTasks = tasksArray.length;
    })
    .then($log.error);
});
