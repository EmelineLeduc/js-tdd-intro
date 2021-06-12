const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
  it("is isSquare should return true", () => {
    const rectangle = new Rectangle(5, 5);
    assert.strictEqual(rectangle.isSquare(), true);
  });
  it("is isSquare should return false", () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.isSquare(), false);
  });
  it("is isSquare should return the area", () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.getArea(), 50);
  });
  it("is isSquare should return the perimeter", () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.getPerimeter(), 30);
  });
});
