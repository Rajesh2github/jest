const sum = require('./index');
describe("All the tests", () => {
    test("The sum of 2 and 5 will be 7", () => {
        expect(sum(2, 5)).toBe(7);
    })
    it("negetive testing", ()=>{
        expect(sum(2,2)).not.toBe(5);
    })
    test('Object equality', ()=>{
        let data = {name : "Rajesh", age : 33}
        expect(data).toEqual({name : "Rajesh", age : 33})
    })
    test("Null of falsy value", ()=>{
        const val = null;
        expect(val).toBeNull();
        expect(val).not.toBeUndefined();
        expect(val).toBeDefined();
        expect(val).not.toBeTruthy();
        expect(val).toBeFalsy();
    })
    it("Zero Value Test", ()=>{
        const val = 0;
        expect(val).toBeFalsy();
        expect(val).not.toBeTruthy();

        expect(val).not.toBeNull();

        expect(val).not.toBeUndefined();
        expect(val).toBeDefined()
    })

    test("Number Comparision", ()=>{
        let val = 3+4;
        expect(val).toBeGreaterThan(6);
        expect(val).toBeGreaterThanOrEqual(7);
        expect(val).toBeLessThan(10);
        expect(val).toBeLessThanOrEqual(7);

        expect(val).toBe(7);
        expect(val).toEqual(7);
    })
    
    it.only("Floating value", ()=>{
        const val = 0.3;
        expect(val).toBeCloseTo(0.3,5);
    })
})