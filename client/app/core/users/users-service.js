angular.module('ngcourse.users', [
  'koast'
])

.factory('users', function (koast) {
  var service = {};
  var byUserName = {};
  var usersPromise = koast.user.whenAuthenticated()
    .then(function () {
      return koast.queryForResources('users')
        .then(function (userArray) {
          service.all = userArray;
          userArray.forEach(function(user) {
            if (user.username) {
              byUserName[user.username] = user;
            }
          });
        });
    });

  service.whenReady = function () {
    return usersPromise;
  };

  service.getUserByUsername = function(username) {
    // debugger
    return byUserName[username];
  };

  service.getUserDisplayName = function(username) {
    var user = service.getUserByUsername(username);
    return user.displayName;
  };

  service.getUser = function (id) {
    return koast.getResource('users', {_id: id });
  }

  service.getUserByUsername2 = function (username) {
    return koast.getResource('users', {'username': username });
  }



  return service;
});