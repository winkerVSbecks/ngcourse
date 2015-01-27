'use strict';

angular.module('ngcourse')

.controller('MainCtrl', function ($scope, $log) {
	var vm = this;
    vm.isAuthenticated = false;
    vm.login = function(username, password) {
      vm.isAuthenticated = true;
      vm.username = username;
      vm.password=password;
    };

    vm.login('Nick','test'); // temp dev login

});
