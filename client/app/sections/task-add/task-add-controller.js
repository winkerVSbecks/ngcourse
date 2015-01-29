'use strict';

angular.module('ngcourse')

.controller('TaskAddCtrl', function (tasks,router) {
	var vm = this;


	vm.save = function(task){
		tasks.addTask(task).then(function(){
			router.goToTaskList();
		})
	};

	vm.cancel = function(){
		router.goToTaskList();
	};
});