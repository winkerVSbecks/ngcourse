'use strict';

angular.module('ngcourse')

.controller('MainCtrl', function ($scope, $log, $state, $rootScope) {
	var vm = this;
    vm.isAuthenticated = false;
    console.log("MainCtrl called");
    vm.login = function(username, password) {
      vm.isAuthenticated = true;
      vm.username = username;
      vm.password=password;      
      
      $rootScope.username= username; // this is a bad practice

      $state.go('tasks');
    };

    // vm.login('Nick','test'); // temp dev login

});
