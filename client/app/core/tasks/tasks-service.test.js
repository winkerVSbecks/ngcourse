'use strict';

var expect = chai.expect;
var assert = chai.assert;

describe('tasks service', function () {
  // Load the angular module. Having smaller modules helps here.
  beforeEach(module('ngcourse.tasks'));

  // Override $provide to make Angular use some mocks
  // for things that TasksService depends on.
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

      service.post = sinon.spy(function() {
        return Q.when({ _id: 'foo' });
      });

      return service;
    });

    // Mock $q.
    $provide.service('$q', function() {
      return Q;
    });

    // Mock user service
    $provide.service('users', function() {
      var service = {};

      service.getUsers = function() {
        return Q.when([
          {
              _id: "54d144943eee1b3eafe86a70",
              username: "alice",
              displayName: "Alice Beeblebrox",
          }
        ]);
      };

      return service;
    });
  }));

  it('should fail to create a task with a bad owner', function() {
    var badTask = {
      owner: 'Dr. Evil', // Doesn't exist in our user database.
      description: 'Take over the world'
    };

    var tasks = getService('tasks');
    var failed = false;
    return tasks.createTask(badTask)
      .then(null, function(err) {
        failed = true;
      })
      .finally(function() {
        expect(failed).to.be.true;
      });
  });

  it('should get tasks', function() {
    var tasks = getService('tasks');
    return tasks.getTasks()
      // Attach the handler for resolved promise.
      .then(function (tasks) {
        // Assertions thrown here will result to a failed promise downstream.
        expect(tasks.length).to.equal(1);
      });
  });

  it('should only call server.get once', function() {
    var tasks = getService('tasks');
    var server = getService('server');
    server.get.reset(); // Reset the spy.
    return tasks.getTasks() // Call getTasks the first time.
      .then(function () {
        return tasks.getTasks(); // Call it again.
      })
      .then(function () {
        assert(server.get.calledOnce); // Check the number of calls.
      });
  });

  it('should create a task', function() {
    var tasks = getService('tasks');
    var server = getService('server');
    var newTask = {
      owner: 'alice',
      description: 'a new task'
    };

    return tasks.createTask(newTask)
      .then(function() {
        server.post.should.have.been.calledWith('/api/v1/tasks', newTask);
      });
  });
});
