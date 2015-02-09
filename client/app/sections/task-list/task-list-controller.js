'use strict';

angular.module('ngcourse')

.controller('TaskListCtrl', function($log, $http, $q) {
  var vm = this;

  vm.numberOfTasks = 0;
  vm.tasks = [];
  vm.sortColumnName = 'owner';
  vm.sortColumnReversed = false;

  vm.setSortColumn = function(columnName) {
    if (columnName === vm.sortColumnName) {
      vm.sortColumnReversed = !vm.sortColumnReversed;
    }
    else {
      vm.sortColumnName = columnName;
      vm.sortColumnReversed = false;
    }
  };

  $http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
    .then(function(response) {
      $log.info(response);
      return response.data;
    })
    .then(function(tasksArray) {
      vm.tasks = tasksArray;
    })
    .then(null, function(error) {
      $log.error(error);
    });

  vm.addTask = function() {
    vm.numberOfTasks += 1;
  };
});
