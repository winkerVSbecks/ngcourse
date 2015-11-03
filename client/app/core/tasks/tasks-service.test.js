'use strict';

describe('tasks service', function () {

  // Load the angular module. Having smaller modules helps here.
  beforeEach(module('ngcourse.tasks'));
  beforeEach(module(function($provide){
    // Mock 'server'.
    $provide.service('server', function() {
      var service = {};
      var data = [{
        description: 'Mow the lawn'
      }];

      service.get = sinon.spy(function () {
        return Q.when(data);
      });

      return service;
    });
    // Mock $q.
    $provide.service('$q', function() {
      return Q;
    });
  }));


  it('should get tasks', function() {
    var tasks = getService('tasks');
    var server = getService('server');
    server.get.reset(); // Reset the spy.
    return tasks.getTasks() // Call getTasks the first time.
      .then(function () {
        server.get.should.have.been.calledWith('/api/v1/tasks');
      });
  });

});