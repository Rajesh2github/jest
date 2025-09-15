const getUser = require("./user");

describe("validate user Object", () => {
    it("user data", () => {
        expect(getUser()).toEqual({
            name: "pooeti",
            age: 19
        })
    })
    it("Verfy name", ()=>{

        expect(getUser().name).toEqual("pooeti");
        expect(getUser().name).toMatch(/poo/);
        expect(getUser().age).toBeGreaterThan(18);
    })
})
