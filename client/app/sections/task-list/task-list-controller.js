'use strict';

angular.module('ngcourse')

.controller('TaskListCtrl', function($log, tasks, $state, users) {
  var vm = this;

  vm.numberOfTasks = 0;
  vm.tasks = [];
  vm.sortColumnName = 'owner';
  vm.sortColumnReversed = false;

  vm.getUserDisplayName = function(username){
    return users.getUserDisplayName(username);
  };

  vm.setSortColumn = function(columnName) {
    if (columnName === vm.sortColumnName) {
      vm.sortColumnReversed = !vm.sortColumnReversed;
    }
    else {
      vm.sortColumnName = columnName;
      vm.sortColumnReversed = false;
    }
  };

  tasks.getTasks()
    .then(function(tasksArray) {
      vm.tasks = tasksArray;
    })
    .then(null, $log.error);

  vm.addTask = function() {
    vm.numberOfTasks += 1;
  };
});
