const { attempt, measureExecution } = require("../dist/index.cjs");

describe("Imported functions", () => {
  it("attempt", () => {
    expect(typeof attempt).toBe("function");
  });
  it("measureExecution", () => {
    expect(typeof measureExecution).toBe("function");
  });
});
