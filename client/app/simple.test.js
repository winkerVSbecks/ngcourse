  var expect = chai.expect;
  var assert = chai.assert;

  // Define a test suite.
  describe('math', function () {
    // Define a test.
    it('should have 2*2 be equal to 4', function () {
      var x;
      // Do something.
      x = 2 * 2;
      // Check that the results are what we expect and throw an error if something is off.
      assert(x === 4, 'Failure of basic arithmetics.');
      expect(x).to.equal(4);
    });
  });
