jest.mock("./mathUtils")
const calculate = require("./app");
const {add} = require("./mathUtils");

describe("test calculater", () => {
    it.only("verify add function", () => {
       // expect(calculate(10,20, "add")).toBe(30);
        calculate(12,30,"add");
        expect(add).toHaveBeenCalled()
    })
    it("verify sub function", () => {
        expect(calculate(30,20, "sub")).toBe(10);
    })
    it("verify mul function", () => {
        expect(calculate(10,20, "mul")).toBe(200);
    })
    it("verify div function", () => {
        expect(calculate(100,20, "div")).toBe(5);
    })
});
