"use strict"

function pipe(data, ...fns) {
    const initialValue = typeof data === "function" ? data() : data
    return fns.reduce((val, fn) => val.then ? val.then(val => fn(val)) : fn(val), initialValue)
}

function map(fn) {
    return arr => {
        const map = arr.map(fn)
        return includesPromise(map) ? Promise.all(map) : map
    }
}

function filter(fn) {
    return arr => {
        const filterMap = arr.map(fn)
        const filterArr = bools => arr.filter((_, i) => bools[i])
        return includesPromise(filterMap) ? Promise.all(filterMap).then(filterArr) : filterArr(filterMap)
    }
}

function reduce(fn, initialValue = null) {
    return arr => arr.reduce((acc, cur) => acc && acc.then ? acc.then(acc => fn(acc, cur)) : fn(acc, cur), initialValue)
}

function foreach(fn) {
    return arr => {
        const acc = arr.reduce((acc, cur) => acc && acc.then ? acc.then(() => fn(cur)) : fn(cur), null)
        return acc && acc.then ? acc.then(() => arr) : arr
    }
}

function includesPromise(arr) {
    return arr.filter(arr => arr.then).length > 0
}

module.exports = {
    pipe,
    map,
    filter,
    reduce,
    foreach
}