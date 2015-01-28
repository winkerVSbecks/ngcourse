'use strict';

 angular.module('ngcourse.router', [
    'ui.router'
  ])
  .factory('router', function($state){
    var service= {};

    service.goToAddTask = function() {
      $state.go('tasks.add');
    };
    
    service.goToTask = function(taskId) {
      $state.go('tasks.details', {_id: taskId});
    };

    service.goToTaskList = function() {
      $state.go('tasks', {}, {
        reload: true
      });
    };
    return service;
  })
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

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
    .state('tasks.details', {
      url: '/{_id}',

      views: {
        'actionArea@tasks':{
          controller: 'TaskEditCtrl as taskEdit',
          templateUrl: '/app/sections/task-edit/task-edit.html'

        }
      }
    })
    .state('tasks.add', {
      url: '/add',

      views: {
        'actionArea@tasks':{
          controller: 'TaskAddCtrl as taskAdd',
          templateUrl: '/app/sections/task-add/task-add.html'

        }
      }
    })
    .state('account', {
      url: '/my-account',
      template: 'my account2'
    });
  });