# pipe-promise

Run asynchronous pipelines with helper functions for common array operations.

If the first argument isn't a promise, and no function return a promises, then the pipeline runs synchronously.

## Helper functions

* map
* filter
* reduce
* foreach

## Examples

### Require:

```js
const { pipe, map, filter, reduce, foreach } = require("pipe-promise")
```

### Async pipeline using await:

```js
await pipe(
    Promise.resolve([ 1, 2, 3 ]),
    filter(n => Promise.resolve(n !== 1)),
    map(n => Promise.resolve(n + 1)),
    reduce((sum, n) => Promise.resolve(sum + n))
) // 7
```

### Sync pipeline:

```js
pipe(
    [ 1, 2, 3 ],
    filter(n => n !== 1),
    map(n => n + 1),
    reduce((sum, n) => sum + n)
) // 7
```

### foreach:

`foreach()` runs sequentially and returns the input data

```js
pipe(
    [ 1, 2, 3 ],
    foreach(console.log)
) // [ 1, 2, 3 ]
```