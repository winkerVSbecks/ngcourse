'use strict';

angular.module('ngcourse')

.controller('TaskListCtrl', function TaskListCtrl($log) {
  var vm = this;
  vm.numberOfTasks = 42;
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
  vm.addTask = function addTask() {
    // if (vm.username === 'Cosmin') {
    //   vm.username = 'Yuri';
    //   vm.numberOfTasks += 10;      
    // } else {
    vm.numberOfTasks += 1;
  };
});
