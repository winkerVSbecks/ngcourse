'use strict';

angular.module('ngcourse')

.controller('TaskListCtrl', function ($scope, $log, $window) {
	var vm = this;
    vm.numberOfTasks = 0;

	vm.tasks = [
    {
      owner: 'alice',
      description: 'Build the dog shed.'
    },
    {
      owner: 'bob',
      description: 'Get the milk.'
    },
    {
      owner: 'alice',
      description: 'Fix the door handle.'
    }
  ];

    vm.addTask = function() {
      vm.numberOfTasks += 1;
    };
});