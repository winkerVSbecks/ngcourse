'use strict';

angular.module('ngcourse')

.controller('TaskListCtrl', function (tasks, $http, $scope, $log, $window, users) {

    var vm = this;
    vm.tasks = [];

    vm.username= users.username;
    $log.info(users);

    tasks.getTasks()
      .then(function(tasks) {
        vm.tasks = tasks;
        vm.numberOfTasks = tasks.length;
      })
      .then(null, $log.error);

    vm.getUserDisplayName= function(name){
      return name;
    }
    
    vm.numberOfTasks = 0;
    vm.addTask = function() {
      vm.numberOfTasks += 1;
    };

});