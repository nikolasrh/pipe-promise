const { pipe, foreach } = require("../index")
const delay = require("./delay")

const initialValue = [ 1, 2, 3 ]
const expectedResult = initialValue

it("Sync foreach", () => {
    const arr = []
    const res = pipe(
        initialValue,
        foreach(n => arr.push(n))
    )
    expect(arr).toEqual(expectedResult)
    expect(res).toEqual(expectedResult)
})

it("Async foreach", async () => {
    const arr = []
    const res = await pipe(
        delay(initialValue),
        foreach(delay(n => arr.unshift(n)))
    )
    expect(arr).toEqual(expectedResult.reverse())
    expect(res).toEqual(expectedResult)
})