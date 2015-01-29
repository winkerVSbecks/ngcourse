'use strict';

angular.module('ngcourse')

.controller('ProfileEditCtrl', function ($log, users, $stateParams, router, koast) {
  var vm = this;

  console.log("ProfileEditCtrl $stateParams");
  console.log($stateParams);
  console.log("profile:");
  console.log(koast.user.data);
  
  vm.user = users.getUserByUsername(koast.user.data.username);

  console.log("user:");
  console.log(vm.user);


  vm.cancel = router.goToTaskList;

  vm.updateUser = function (user) {
      user.save().then(function(){        
        router.goToTaskList();
      })
      .then(null, $log.error);
  }
});