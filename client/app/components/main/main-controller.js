'use strict';

angular.module('ngcourse')

.controller('MainCtrl', function ($scope, $log, $state, $rootScope, users) {
	var vm = this;
    vm.isAuthenticated = false;
    console.log("MainCtrl called");
    vm.login = function(username, password) {
      vm.isAuthenticated = true;
      vm.username = username;
      vm.password=password;      
      
      users.login(username, password);

      $state.go('tasks');
    };

    // vm.login('bob', 'bob@bob', 'test'); // temp dev login

});
