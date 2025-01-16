[[toc]]

## reduce

```js
Array.prototype.MyReduce = function (callback, initialValue) {
  let prev = initialValue || this[0]
  for (let i = prev ? 1 : 0; i < this.length; i++) {
    prev = callback(prev, this[i], i, this)
  }
  return prev
}
```

## reduceRight

```js
Array.prototype.MyReduceRight = function (callback, initialValue) {
  let prev = initialValue
  let startIndex = this.length - 1
  if (initialValue === undefined) {
    prev = this[startIndex--]
  }
  for (; startIndex >= 0; startIndex--) {
    prev = callback(prev, this[startIndex], startIndex, this)
  }
  return prev
}
```
