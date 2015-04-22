'use strict';

angular.module('ngcourse.server', [
  'ngcourse.api-constants'
])

.factory('server', function ($http, API_BASE_URL) {
  var service = {};

  service.get = function (path) {
    return $http.get(API_BASE_URL + path)
      .then(function(response) {
        return response.data;
      });
  };


  return service;
});
