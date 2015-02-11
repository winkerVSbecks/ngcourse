'use strict';

var expect = chai.expect;
var assert = chai.assert;

describe('users service', function () {
  // Load the angular module. Having smaller modules helps here.
  beforeEach(module('ngcourse.users'));

  // Override $provide to make Angular use some mocks
  // for things that TasksService depends on.
  beforeEach(module(function($provide){

    // Mock 'server'.
    $provide.service('server', function() {
      var service = {};
      var data = [{
        _id: "54d144943eee1b3eafe86a70",
        username: "alice",
        displayName: "Alice Beeblebrox",
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
  }));

  it('should get users', function() {
    var users = getService('users');
    return users.getUsers()
      .then(function (userList) {
        expect(userList.length).to.equal(1);
      });
  });

  it('should only call server.get once', function() {
    var users = getService('users');
    var server = getService('server');
    return users.getUsers() // Call getTasks the first time.
      .then(function () {
        return users.getUsers(); // Call it again.
      })
      .then(function () {
        assert(server.get.calledOnce); // Check the number of calls.
      });
  });
});
