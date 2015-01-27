'use strict';

angular.module('ngcourse')

.controller('TaskListCtrl', function ($http,$scope, $log, $window) {
    var vm = this;
    vm.tasks = [];

    $http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
      .then(function(response) {
        $log.info(response);
        vm.tasks = response.data;
      })
      .then(null, function(error) {
        $log.error(error);
      });

    vm.addTask = function() {
      vm.numberOfTasks += 1;
    };
});