[[toc]]

## 实现一个call

```js
Function.prototype.myCall = function (content, ...args) {
  if (!content || content === null) {
    content = window
  }

  const key = Symbol()

  content[key] = this

  return content[key](...args)
}
```

## 实现一个apply

```js
Function.prototype.myApply = function (content, args) {
  if (!content || content === null) {
    content = window
  }
  const key = Symbol()

  content[key] = this

  return content[key](...args)
}
```

## 实现一个bind

```js
Function.prototype.myBind = function (content, args) {
  if (!content || content === null) {
    content = window
  }

  let fn = Symbol()

  content[fn] = this

  let _this = this
}
```
