const { pipe, reduce } = require("../index")
const delay = require("./delay")

const initialValue = [ 1, 2, 3 ]
const expectedResult = 6
const sum = (acc, cur) => acc + cur

it("Sync reduce", () => {
    const res = pipe(
        initialValue,
        reduce(sum)
    )
    expect(res).toEqual(expectedResult)
})

it("Async reduce", async () => {
    const res = await pipe(
        delay(initialValue),
        reduce(delay(sum))
    )
    expect(res).toEqual(expectedResult)
})