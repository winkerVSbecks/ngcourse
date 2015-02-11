'use strict';

angular.module('ngcourse.router', [
  'ui.router'
])

.config(function (
  $stateProvider,
  $urlRouterProvider,
  $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(false);

    $stateProvider
      .state('home', {
        url: '/',

        views: {
          '': {
            controller: 'MainCtrl as main',
            templateUrl: '/app/components/main/main.html'
          }
        }
      })
      .state('tasks', {
        url: '/tasks',
        views: {
          '': {
            controller: 'TaskListCtrl as taskList',
            templateUrl: '/app/sections/task-list/task-list.html'
          }
        }
      })
      .state('tasks.detail', {
        url: '/{_id}',
        views: {
          'actionArea@tasks': {
            controller: 'TaskEditCtrl as taskEdit',
            templateUrl: '/app/sections/task-edit/task-edit.html'
          }
        }
      });
});
