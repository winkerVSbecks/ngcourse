'use strict';

 angular.module('ngcourse.router', [
    'ui.router'
  ])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/tasks');

    $locationProvider.html5Mode(false);

    $stateProvider
      .state('tasks', {
        url: '/tasks',
        template: 'my tasks'
      })
    .state('tasksDetail', {
      url: '/tasks/details',
      template: 'task details'
    })
    .state('account', {
      url: '/my-account',
      template: 'my account'
    })
    .state('tasksDetailById', {
      url: '/tasks/{_id}',
      template: 'task details with id'
    })
    .state('tasksDetailByRegex', {
      url: '/tasks/{_id:[A-Za-z0-9-_]{0,}}',
      template: 'task details with regex'
    });
  });