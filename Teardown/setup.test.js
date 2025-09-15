const {add} = require("./setup");

describe("array test setup", ()=>{
    let arr;
    beforeAll(()=>{
        console.log("before all")
        arr = [];
    })
    beforeEach( ()=>{
        console.log("before each");
       // arr.length = 0;
    })
    afterAll( ()=>{
         console.log("after all");
         arr = null;
    })

    it("add element", ()=>{
        add(arr, 10)
        expect(arr).toContain(10)
    })
    it("add element", ()=>{
        add(arr, 20)
        expect(arr).toContain(10)
    })
})