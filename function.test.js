describe("Vrify function mock", ()=>{
    it("mock function", ()=>{
        const myMock = jest.fn(()=>true);

       // console.log(myMock());
        myMock();
        expect(myMock).toHaveReturned();
        expect(myMock).toHaveBeenCalled();
        expect(myMock()).toBe(true);
        expect(myMock).toHaveReturnedWith(true);
        expect(myMock).toHaveBeenCalledTimes(2);

        
    })
})