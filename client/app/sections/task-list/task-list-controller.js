'use strict';

  angular.module('ngcourse')

  .controller('TaskListCtrl', function($log, tasks, router) {
    var vm = this;
    vm.tasks = [];

    vm.getUserDisplayName= function(name){
      return name;
    }

    vm.goToTask = router.goToTask;

    vm.quietlyUpdateParam = router.quietlyUpdateParam;

    $log.debug(router.getTaskId());

    tasks.getTasks()
      .then(function(tasks) {
        vm.tasks = tasks;
        vm.numberOfTasks = tasks.length;
      })
      .then(null, $log.error);
  });