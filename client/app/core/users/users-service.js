'use strict';

angular.module('ngcourse.users', [])

.factory('users', function (server) {
    var service = {};

    var userPromise;
    service.getUsers = function () {
      userPromise = userPromise || server.get('/api/v1/users');
      return userPromise;
    };

    service.username= null;
    service.password= null;
    service.login= function(name, password){
      service.username=name;
      service.password=password;
    };

    return service;
});
