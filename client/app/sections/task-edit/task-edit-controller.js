'use strict';

angular.module('ngcourse')

.controller('TaskEditCtrl', function (tasks, router, $log, $stateParams) {
	var vm = this;

	var id= $stateParams._id;

	tasks.getTask(id).then(function(task){
		vm.task = task;
	});

	vm.updateTask = function(task){
		tasks.updateTask(task).then(function(){
			router.goToTaskList();
		})
	};

	vm.cancel = function(){
		router.goToTaskList();
	};

});