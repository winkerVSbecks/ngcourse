'use strict';

angular.module('ngcourse')

.controller('TaskListCtrl', function($log, tasks) {
  var vm = this;
  vm.numberOfTasks = 0;
  vm.tasks = [];

  tasks.getTasks()
  .then(function(taskArray) {
    vm.tasks = taskArray;
  })
  .then(null, $log.error);

  vm.addTask = function() {
    vm.numberOfTasks += 1;
  };
 });
