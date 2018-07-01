module.exports = (fn, delay = 0) => (...args) => new Promise(resolve => {
    setTimeout(() => {
        const res = typeof fn === "function" ? fn(...args) : fn
        resolve(res)
    }, delay)
})