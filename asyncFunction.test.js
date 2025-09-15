const getError = require("./asyncFunction");

test("async function that should resolved", () => {
    return getError(true).then(data => {
        expect(data).toBe("passed")
    })
})

test("async function that should reject", () => {
    return getError(false).catch(data => {
        expect(data).toBe("failed")
    })
})

it("async function call with async await", async () => {
    expect.assertions(1);
    
    try {
        const data = await getError(true);
        expect(data).toBe("passed")
    } catch (error) {
        expect(error).toBe("failed")
    }
})

it("async function reject", async () => {
    expect.assertions(1);
    try {
        const data = await getError(false);
        expect(data).toBe("passed")
    } catch (error) {
        expect(error).toBe("failed")
    }
})