'use strict';

angular.module('ngcourse')

.controller('TaskListCtrl', function ($log, tasks, users, router) {
  var vm = this;
  vm.tasks = [];
  vm.addTask = router.goToAddTask;

  vm.taskFilter= {done:"", owner:""};

  vm.getUserDisplayName = users.getUserDisplayName;

  vm.done = function(task){
    task.done=true;
    update(task);
  }

  vm.update= function(task){
    tasks.updateTask(task)
      .then(console.log("task updated!"))
      .then(null, $log.error);    
  }

  vm.toggleDoneTasks = function(){
    vm.hideDoneTasks = ! vm.hideDoneTasks;
    vm.taskFilter.done= vm.hideDoneTasks ? false : "";
  }

  tasks.getTasks()
    .then(function (tasks) {
      return users.whenReady()
        .then(function() {
          vm.tasks = tasks;
        });
    })
    .then(null, $log.error);
});