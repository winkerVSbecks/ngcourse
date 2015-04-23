var expect = chai.expect;

describe('tasks', function () {

  it('should comply with basic arithmetic', function() {
    var x;
    // Do something.
    x = 2 * 2;
    // Check that the results are what we expect and throw an error if something is off.
    expect(x).to.equal(4);
  });

});
