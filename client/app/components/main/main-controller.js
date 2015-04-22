'use strict';

angular.module('ngcourse')

.controller('MainCtrl', function MainCtrl($log) {
  var vm = this;
  vm.username = 'Cosmin';
  vm.isAuthenticated = true;
  // vm.isAuthenticated = true;
  vm.login = function(username, password) {
    if (password === 'x') {
      vm.isAuthenticated = true;
      vm.username = username;
    } else {
      $log.info('Wrong password.');
    }
  }
});


