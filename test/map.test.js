const { pipe, map } = require("../index")
const delay = require("./delay")

const initialValue = [ 1, 2, 3 ]
const expectedResult = [ 4, 9, 16 ]
const addOne = n => n + 1
const square = n => n * n

it("Sync map", () => {
    const res = pipe(
        initialValue,
        map(addOne),
        map(square)
    )
    expect(res).toEqual(expectedResult)
})

it("Async map", async () => {
    const res = await pipe(
        delay(initialValue),
        map(delay(addOne)),
        map(delay(square))
    )
    expect(res).toEqual(expectedResult)
})