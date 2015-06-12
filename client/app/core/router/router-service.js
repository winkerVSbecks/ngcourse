'use strict';

angular.module('ngcourse.router', [
  'ui.router'
])

.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(false);

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'MainCtrl as main',
      templateUrl: '/app/components/main/main.html'
    })
    .state('tasks', {
      url: '/tasks',
      controller: 'TaskListCtrl as taskList',
      templateUrl: '/app/sections/task-list/task-list.html'
    })
    .state('tasks.add', {
      url: '/add',
      views: {
        'actionArea': {
          templateUrl: '/app/sections/task-add/task-add.html'
        }
      }
    })
    .state('tasks.edit', {
      url: '/{_id}',
      views: {
        'actionArea': {
          templateUrl: '/app/sections/task-edit/task-edit.html'
        }
      }
    })
    .state('account', {
      url: '/my-account',
      template: 'my account'
    });

  $urlRouterProvider.otherwise('/');

})

.factory('router', function ($state, $stateParams) {
  var service = {};

  service.goToTask = function(taskId) {
    $state.go('tasks.details', {_id: taskId});
  };

  service.getTaskId = function() {
    return $stateParams._id;
  };

  service.quietlyUpdateParam = function(key, value) {
    $state.params[key] = value;
    $stateParams[key] = value;
    $state.$current.params[key] = value;
  };

  return service;
});
