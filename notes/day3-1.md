The link function is a bit complicated due to the need to display the task count for an arbitrary username.  If I come up with a simpler approach soon I’ll circle back.

I’ll reply in a few minutes with the last part.

Ex 2: Directives:
---

Make a directive to show the user's display name and task count.

- Stick the HTML in sections/task-list/task-list.html, below the form.

<ngc-user username="alice" include-task-count="true">
</ngc-user>

- create new folder app/sections/user-display
- add file user-directive.html

<div>
  {{ getUserDisplayName() }} <span ng-show="includeTaskCount">({{ getTaskCount() }})<span>
</div>

- add file user-directive.js

'use strict';

angular.module('ngcourse.users')
  .directive('ngcUser', function(users, tasks) {
    return {
      restrict: 'E',
      scope: {
        username: '=',
        includeTaskCount: '='
      },
      templateUrl: 'app/sections/user-display/user-directive.html',
      link: function(scope) {
        var displayNamesByUserName = {};
        var taskCountsByUserName = {};
        var allUsers = [];
        var allTasks = [];

        users.getUsers()
          .then(function(userArray) {
            allUsers = userArray;
            userArray.forEach(function(user) {
              if (user.username) {
                displayNamesByUserName[user.username] = user;
              }
            });
          })
          .then(tasks.getTasks)
          .then(function(tasksArray) {
            allTasks = tasksArray;
            allUsers.forEach(function(user) {
              if (user.username) {
                tasksArray.forEach(function(task) {
                  if (task.owner === user.username) {
                    if (!taskCountsByUserName[user.username]) {
                      taskCountsByUserName[user.username] = 0;
                    }
                    else {
                      taskCountsByUserName[user.username]++;
                    }
                  }
                });
              }
            });
          });

        scope.getUserDisplayName = function() {
          return displayNamesByUserName[scope.username].userDisplayName;
        };

        scope.getTaskCount = function() {
          return taskCountsByUserName[scope.username]
        };
      }
    }
  });
