'use strict';

angular.module('ngcourse')

.controller('ProfileEditCtrl', function ($log, users, $stateParams, router, koast) {
  var vm = this;
  
  vm.user = users.getUserByUsername(koast.user.data.username);

  vm.cancel = router.goToTaskList;

  vm.updateUser = function (user) {
      user.save().then(function(){        
        router.goToTaskList();
      })
      .then(null, $log.error);
  }
});