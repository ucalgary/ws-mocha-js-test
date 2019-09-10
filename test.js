const assert = chai.assert;

describe("Browser Tests", function () {

  it('Verify Page Title is "Mocha Tests"', function () {
    assert.equal(
        'Mocha Tests',
        $('title').html()
    );
  });

  it('Verify h1 tag is "Search"', function () {
    // @TODO
    assert.equal(true, false);
  });

  it('Verify Search input placeholder attribute is "Search Query"', function () {
    // @TODO
    assert.equal(true, false);
  });

  it('Verify Search input is empty', function () {
    // @TODO
    assert.equal(true, false);
  });

  it('Change search query to "Test", click Search button, and verify message "You successfully searched for Test"', function () {
    // @TODO
    assert.equal(true, false);
  });
});
