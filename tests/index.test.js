const { attempt } = require("../dist/index.cjs");

describe("Imported functions", () => {
  it("attempt", () => {
    expect(typeof attempt).toBe("function");
  });
});
