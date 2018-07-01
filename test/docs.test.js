const { pipe, map, filter, reduce } = require("../index")

it("Sync example", () => {
    const res = pipe(
        [ 1, 2, 3 ],
        filter(n => n !== 1),
        map(n => n + 1),
        reduce((sum, n) => sum + n)
    )
    expect(res).toBe(7)
})

it("Async example", async () => {
    const res = await pipe(
        Promise.resolve([ 1, 2, 3 ]),
        filter(n => Promise.resolve(n !== 1)),
        map(n => Promise.resolve(n + 1)),
        reduce((sum, n) => Promise.resolve(sum + n))
    )
    expect(res).toBe(7)
})






