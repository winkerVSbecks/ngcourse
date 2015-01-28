For ex 2 (directives) part 3 (drop down of users), you need to use ngOptions in task-add.html

            <select ng-model=“taskAdd.selectedUser"
                ng-options=“user as user.userName for user in taskAdd.allUsers">
            </select>

and then hook it up to the directive:

        <ngc-user username="{{taskAdd.selectedUser}}” include-task-count=“true”></ngc-user>

and implement logic to get allUsers in task-add-controller.js:

'use strict';

angular.module('ngcourse')

.controller('TaskAddCtrl', function ($log, tasks, router, users) {
  var vm = this;

  vm.allUsers = [];
  users.getUsers()
   .then(function(userArray) {
     allUsers = userArray;
   });

  // …


});