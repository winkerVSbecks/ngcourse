'use strict';

angular.module('ngcourse')

.controller('TaskEditCtrl', function (tasks, $stateParams, $log, $state) {
  var vm = this;

  vm.cancel = function() {
    $state.go('tasks');
  };

  vm.updateTask = function(task) {
    tasks.updateTask(task)
      .then(function() {
        $state.go('tasks');
      })
      .then(null, $log.error);
  };

  tasks.getTask($stateParams._id)
    .then(function(response) {
      vm.task = response;
    })
    .then(null, $log.error);
});
