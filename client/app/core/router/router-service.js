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
      controller: 'TaskListCtrl as taskList',
      templateUrl: '/app/sections/task-list/task-list.html',
    })
    .state('tasksDetail', {
      url: '/tasks/{_id}',
      template: 'task details. <button ui-sref="tasks">Back to tasks</button>'
    })
    .state('account', {
      url: '/my-account',
      template: 'my account <button ui-sref="tasks">Go to tasks</button>'
    })
    .state('parent', {
      url: '/parent',
      views: {
        'parent': {
          template: 'parent view <div ui-view="child@parent"></div>'
        }
      },
    })
    .state('parent.child1', {
      url: '/child1',
      views: {
        'child@parent': {
          template: 'child 1'
        }
      }
    })
    .state('parent.child2', {
      url: '/child2',
      views: {
        'child@parent': {
          template: 'child 2'
        }
      }
    })
    .state('parent.child2.grandchild', {
      url: '/grandchild',
      views: {
        'child@parent': {
          template: 'parent overriden'
        }
      }
    });
})

.factory('router', function ($state, $stateParams) {
  var service = {};
  service.goToTask = function(taskId) {
    $state.go('tasksDetail', {_id: taskId});
  };
  service.getTaskId = function() {
    return $stateParams._id;
  };
  return service;
});
