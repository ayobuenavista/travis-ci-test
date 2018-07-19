const assert = require('assert');
const index = require('../../index');

/*
 * Test general errors
 */
describe('output', () => {
  it('should show Hello World', (done) => {
    assert.equal(index, 'Hello World');
    done();
  });
});

