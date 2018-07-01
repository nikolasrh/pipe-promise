const { pipe, filter } = require("../index")
const delay = require("./delay")

const initialValue = [ 1, 2, 3 ]
const expectedResult = [ 1, 3 ]
const isNotTwo = n => n !== 2

it("Sync filter", () => {
    const res = pipe(
        initialValue,
        filter(isNotTwo)
    )
    expect(res).toEqual(expectedResult)
})

it("Async filter", async () => {
    const res = await pipe(
        initialValue,
        filter(delay(isNotTwo))
    )
    expect(res).toEqual(expectedResult)
})