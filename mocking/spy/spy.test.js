const mymodule = require("./spy");

describe("testing spy", ()=>{

    it("test my spy function", ()=>{
    const spy = jest.spyOn(mymodule, "myFunction");

    mymodule.myFunction();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore(); // clean up mock
    })
})