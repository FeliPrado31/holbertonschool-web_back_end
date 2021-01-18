const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", () => {
  it("should return sum of integers", () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(1, -3), -2);
  });
  it("checks the output", () => {
    assert.equal(calculateNumber(1.1, 2.5), 4);
    assert.equal(calculateNumber(0.0, 0), 0);
  });
  it("should round floats", () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(0.1, 0), 0);
    assert.strictEqual(calculateNumber(1.4, -4.5), -3);
    assert.strictEqual(calculateNumber(1, "3.7"), 5);
  });
  it("negative numbers", () => {
    assert.equal(calculateNumber(-1, 1), 0);
    assert.equal(calculateNumber(-1.5, 0), -1);
  });
  it("checks arguments", () => {
    assert.equal(isNaN(calculateNumber(2.2)), true);
    assert.equal(isNaN(calculateNumber()), true);
  });
});
