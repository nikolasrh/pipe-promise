const { pipe } = require("../index")
const delay = require("./delay")

const initialValue = 1
const expectedResult = 4
const addOne = n => n + 1
const square = n => n * n

it("Data input", () => {
    const res = pipe(
        initialValue,
        addOne,
        square
    )
    expect(res).toBe(expectedResult)
})

it("Function input", () => {
    const res = pipe(
        () => initialValue,
        addOne,
        square
    )
    expect(res).toBe(expectedResult)
})

it("Promise input", async () => {
    const res = await pipe(
        delay(initialValue),
        addOne,
        square
    )
    expect(res).toBe(expectedResult)
})

it("One async function", async () => {
    const res = await pipe(
        initialValue,
        delay(addOne),
        square
    )
    expect(res).toBe(expectedResult)
})

it("All async functions", async () => {
    const res = await pipe(
        delay(initialValue),
        delay(addOne),
        delay(square)
    )
    expect(res).toBe(expectedResult)
})