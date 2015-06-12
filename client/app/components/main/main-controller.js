'use strict';

 angular.module('ngcourse')

 .controller('MainCtrl', function($log, users) {

    var vm = this;

    vm.isAuthenticated = false;

    vm.login = users.login;
 });