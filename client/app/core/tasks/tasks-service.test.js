describe('tasks service', function () {
  beforeEach(module('ngcourse.tasks'));
  beforeEach(module(function($provide){
    // Mock 'server'.
    $provide.service('server', function() {
      var service = {};
      var data = [{
        owner: 'alice',
        description: 'Mow the lawn'
      }, {
        owner: 'bob',
        description: 'Wash the dishes'
      }, {
        owner: 'alice',
        description: 'Fix the bugs'
      }];

      service.get = sinon.spy(function () {
        return Q.when(data);
        // or try this: Q.reject(new Error('Some Error'));
      });
      return service;
    });
    // Mock 'user'.
    $provide.service('user', function() {
      var service = {};
      service.username = 'alice';
      return service;
    });
    // Mock $q.
    $provide.service('$q', function() {
      return Q;
    });
  }));

  function getService(serviceToInject) {
    var injectedService;
    inject([serviceToInject, function(service) {
      injectedService = service;
    }]);
    return injectedService;
  }

  it('should get loaded', function() {
    var tasks = getService('tasks');
    return tasks.getTasks()
      .then(function(tasksArray) {
        expect(tasksArray.length).to.equal(3);
      }); 
  });

  it('should get loaded', function() {
    var tasks = getService('tasks');
    var server = getService('server');
    server.get.reset();
    return tasks.getTasks()
      .then(function() {
        return tasks.getTasks();
      })
      .then(function() {
        server.get.should.have.been.calledOnce;
      }); 
  });

  it('should get loaded', function() {
    var tasks = getService('tasks');
    return tasks.getMyTasks()
      .then(function(tasksArray) {
        expect(tasksArray.length).to.equal(2);
        expect(tasksArray[1].description).to.equal('Fix the bugs');
      }); 
  });
});
