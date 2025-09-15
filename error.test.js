const getFile = ()=>{
   // throw new Error("file not found");
   return 10;
}
describe("verify error use case", ()=>{

    it("verify error",()=>{
        expect(getFile()).toBe(10)
    })
})