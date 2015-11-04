'use strict';

angular.module('ngcourse')

.controller('TaskEditCtrl', function (router, tasks) {

  var vm = this;
  var _id = router.getTaskId();

  tasks.getTaskById(_id)
    .then(function(task) {
      vm.task = task;
    })

});
