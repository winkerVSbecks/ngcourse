'use strict';

angular.module('ngcourse.users', [])

.factory('users', function ($state) {
  var service={};

  service.username= null;
  service.password= null;
  service.login= function(name, password){
    service.username=name;
    service.password=password;
    $state.go('tasks');
  };
  return service;
});
