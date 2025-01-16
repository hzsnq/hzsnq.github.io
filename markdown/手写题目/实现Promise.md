[[toc]]

## 实现一个Promise

### 基础框架

- 我们发现创建 Promise 需要使用new关键字，那他肯定是作为面向对象的方式调用的，说明:Promise是一个类。

- new Promise(fn) 的时候需要传一个函数进去，说明:Promise的参数是一个函数

- 构造函数传进去的fn会收到 resolve 和 reject 两个函数，用来表示 Promise 成功和失败，说明构造函数里面还需要 resolve 和 reject 这两个函数，这两个函数的作用是改变 Promise 的状态。

- promise 有pending，fulfilled，rejected三个状态，初始状态为 pending，调用 resolve 会将其改为 fulfilled，调用 reject 会改为 rejected。

- 状态修改后就不能在修改了，所以在修改之前必须先判断当前状态是否为pending状态，resolve 函数接收的值会保存在Value 中，reject 函数接收的值讲保存在 reason中

```js
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(callback) {
        try {
            callback(this.resolve, this.reject)
        } catch (err) {
            this.resolve(err)
        }
    }
    state = PENDING
    value = null
    reason = null
    onFulfilled = []
    onRejected = []

    resolve = (value) => {
        if (this.state !== PENDING) return
        this.state = FULFILLED
        this.value = value
        setTimeout(() => {
            for (let index = 0; index < this.onFulfilled.length; index++) {
                this.onFulfilled[index](value)
            }
        })
    }

    reject = (reason) => {
        if (this.state !== PENDING) return
        this.state = REJECTED
        this.reason = reason
        setTimeout(() => {
            for (let index = 0; index < this.onRejected.length; index++) {
                this.onRejected[index](reason)
            }
        })
    }
}
```

### then
- promise 实例对象建好后可以调用 then 方法，说明then是一个实例方法。而且 then 方法可以链式调用，说明他很方法返回一个 promise 实例(原生Promise不能自己返回自己),所以我们需要进行判断
- then 方法接收两个参数 then(resolveCallback, rejectCallback)
- resolveCallback , rejectCallback 可以是一个函数(val)=> null | promise 或者null | undefined ，这里我们需要处理他们没有默认值的情况

```js
class MyPromise {

    //...前面的代码

    then(resolveCallback, rejectCallback) {
        resolveCallback = resolveCallback ? resolveCallback : (value) => value
        rejectCallback = rejectCallback ? rejectCallback : (reason) => {
            throw reason;
        }

        return new MyPromise((resolve, reject) => {
            if (this.state === FULFILLED) {
                setTimeout(() => {
                    try {
                        const result = resolveCallback(this.value)
                        this.isMyPromise(result, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (this.state === REJECTED) {
                setTimeout(() => {
                    try {
                        const result = rejectCallback(this.reason)
                        this.isMyPromise(result, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            } else {
                this.onFulfilled.push(() => {
                    setTimeout(() => {
                        try {
                            const result = resolveCallback(this.value)
                            this.isMyPromise(result, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
                this.onRejected.push(() => {
                    setTimeout(() => {
                        try {
                            const result = rejectCallback(this.reason)
                            this.isMyPromise(result, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
        })
    }

    isMyPromise(result, resolve, reject) {
        if (result instanceof MyPromise) {
            result.then(resolve, reject)
        } else {
            resolve(result)
        }
    }
}
```

### catch
- catch 是一个实例方法，用于处理 Promise 被拒绝的情况。
- 它接受一个 onRejected 回调函数作为参数，当 Promise 被拒绝时，将调用该函数。
- catch 返回一个新的 Promise 对象，如果 onRejected 回调函数返回的是一个值或新的 Promise，那么返回的 Promise 将解析为该值或新的 Promise 的结果。

```js
    catch(fn) {
        return this.then(null, fn)
    }
```

### resolve，reject

- resolve 是 Promise 构造函数上的一个静态方法，可以通过 Promise.resolve(value) 来调用
- resolve 方法返回一个新的 Promise 对象，该对象立即进入已解析状态，而不是等待异步操作完成
- 如果传递给 resolve 的参数是一个 Promise 实例，返回的 Promise 将跟随该实例的最终状态（解析或拒绝）。
- 如果参数是一个 thenable 对象（即具有 then 方法的对象），返回的 Promise 将等待 thenable 被解析或拒绝，并相应地解析或拒绝。

```js
    static resolve(value) {
        if (value instanceof MyPromise) return value
        return new MyPromise((resolve, reject) => {
            resolve(value)
        })
    }
```

reject同理

```js
    static reject(reason) {
        if (value instanceof MyPromise) return reason
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }
```
### finally

- finally 是一个实例方法，无论 Promise 最终是解析还是拒绝，都会执行 onFinally 回调函数。
- finally 返回一个新的 Promise 对象，解析或拒绝的结果与原 Promise 相同。
- finally 方法常用于清理工作，如关闭数据库连接、释放资源等。

```js
    finally(callback) {
        return this.then((value) => {
            return MyPromise.resolve(callback()).then(() => value)
        }, (reason) => {
            return MyPromise.resolve(callback()).then(() => {
                throw reason
            })
        })
    }
```

### all
- all 是一个静态方法，它接受一个 Promise 数组作为参数。
- 只有当数组中的所有 Promise 都成功解析时，all 返回的 Promise 才会解析，并且解析值为一个数组，包含所有 Promise 的解析值。
- 如果数组中的任何一个 Promise 失败，all 返回的 Promise 将立即拒绝，拒绝原因为第一个失败的 Promise 的拒绝原因。

```js
    static all(promiseArr) {
        let result = []
        let count = 0
        let len = promiseArr.length
        return new MyPromise((resolve, reject) => {
            if (len === 0) {
                resolve([])
            }
            // function addResult(index, item) {
            //     result[index] = item
            //     count++
            //     if (count === len) {
            //         resolve(result)
            //         return
            //     }
            // }
            for (let i = 0; i < len; i++) {
                // let item = promiseArr[i]
                // if (item instanceof MyPromise) {
                //     item.then((val) => {
                //         addResult(i, val)
                //     }, err => {
                //         reject(err)
                //     })
                // } else {
                //     addResult(i, item)
                // }
                MyPromise.resolve(promiseArr[i]).then(val => {
                    result[i] = val
                    count++
                    if (count === len) {
                        resolve(result)
                    }
                }, err => {
                    reject(err)
                })
            }
        })
    }
```

### race

- Promise.race(iterable) 同样接受一个可迭代对象。
- race 返回的 Promise 将根据可迭代对象中第一个解析或拒绝的 Promise 来确定自己的状态。
- 如果数组中任何一个 Promise 解析，race 返回的 Promise 将解析，并以该 Promise 的解析值作为自己的解析值。
- 如果任何一个 Promise 拒绝，race 返回的 Promise 将拒绝，并以该 Promise 的拒绝原因作为自己的拒绝原因。

```js
    static race(promiseArr) {
        let len = promiseArr.length
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < len; i++) {
                MyPromise.resolve(promiseArr[i]).then(val => {
                    resolve(val)
                }, err => {
                    reject(err)
                })
            }
        })
    }
```

### allSettled

- Promise.allSettled(iterable) 是 ES2020 新增的方法。
- 与 all 不同，allSettled 会等待可迭代对象中的所有 Promise 都完成（无论是解析还是拒绝）。
- allSettled 返回的 Promise 解析后，结果是一个数组，每个元素是一个对象，包含 status（值为 "fulfilled" 或 "rejected"）和 value 或 reason。
- 这个数组的顺序与输入的可迭代对象一致，无论 Promise 是解析还是拒绝。

```js
    static allSettled(promiseArr) {
        let result = []
        let count = 0
        return new MyPromise((resolve, reject) => {
            let len = promiseArr.length
            for (let i = 0; i < len; i++) {
                MyPromise.resolve(promiseArr[i]).then(value => {
                    result[i] = { state: FULFILLED, value }
                }, err => {
                    result[i] = { state: PENDING, reason: err }
                })
                count++
                if (count === len) {
                    resolve(result)
                }
            }
        })
    }
```

## 拓展思考

如何取消Promise

### abort

Promise.race()方法可以用来竞争 Promise 可以借助这个特性 自己包装一个 空的 Promise 与要发起的 Promise 来实现

```js
    static abort(promise) {
        let obj = {}

        let p = new MyPromise((resolve, reject) => {
            obj.resolve = resolve
            obj.reject = reject
        })

        obj.promise = MyPromise.race([p, promise])
        return obj
    }
```

### AbortPromise

待研究

## 完整代码

```js
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(callback) {
        try {
            callback(this.resolve, this.reject)
        } catch (err) {
            this.resolve(err)
        }
    }
    //pending fulfilled rejected
    state = PENDING
    value = null
    reason = null
    onFulfilled = []
    onRejected = []

    resolve = (value) => {
        if (this.state !== PENDING) return
        this.state = FULFILLED
        this.value = value
        setTimeout(() => {
            for (let index = 0; index < this.onFulfilled.length; index++) {
                this.onFulfilled[index](value)
            }
        })
    }

    reject = (reason) => {
        if (this.state !== PENDING) return
        this.state = REJECTED
        this.reason = reason
        setTimeout(() => {
            for (let index = 0; index < this.onRejected.length; index++) {
                this.onRejected[index](reason)
            }
        })
    }

    then(resolveCallback, rejectCallback) {
        resolveCallback = resolveCallback ? resolveCallback : (value) => value
        rejectCallback = rejectCallback ? rejectCallback : (reason) => {
            throw reason;
        }

        return new MyPromise((resolve, reject) => {
            if (this.state === FULFILLED) {
                setTimeout(() => {
                    try {
                        const result = resolveCallback(this.value)
                        this.isMyPromise(result, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (this.state === REJECTED) {
                setTimeout(() => {
                    try {
                        const result = rejectCallback(this.reason)
                        this.isMyPromise(result, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            } else {
                this.onFulfilled.push(() => {
                    setTimeout(() => {
                        try {
                            const result = resolveCallback(this.value)
                            this.isMyPromise(result, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
                this.onRejected.push(() => {
                    setTimeout(() => {
                        try {
                            const result = rejectCallback(this.reason)
                            this.isMyPromise(result, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                }
                )
            }
        })
    }

    catch(fn) {
        return this.then(null, fn)
    }

    finally(callback) {
        return this.then((value) => {
            return MyPromise.resolve(callback()).then(() => value)
        }, (reason) => {
            return MyPromise.resolve(callback()).then(() => {
                throw reason
            })
        })
    }

    static all(promiseArr) {
        let result = []
        let count = 0
        let len = promiseArr.length
        return new MyPromise((resolve, reject) => {
            if (len === 0) {
                resolve([])
            }
            // function addResult(index, item) {
            //     result[index] = item
            //     count++
            //     if (count === len) {
            //         resolve(result)
            //         return
            //     }
            // }
            for (let i = 0; i < len; i++) {
                // let item = promiseArr[i]
                // if (item instanceof MyPromise) {
                //     item.then((val) => {
                //         addResult(i, val)
                //     }, err => {
                //         reject(err)
                //     })
                // } else {
                //     addResult(i, item)
                // }
                MyPromise.resolve(promiseArr[i]).then(val => {
                    result[i] = val
                    count++
                    if (count === len) {
                        resolve(result)
                    }
                }, err => {
                    reject(err)
                })
            }
        })
    }

    static race(promiseArr) {
        let len = promiseArr.length
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < len; i++) {
                MyPromise.resolve(promiseArr[i]).then(val => {
                    resolve(val)
                }, err => {
                    reject(err)
                })
            }
        })
    }

    static resolve(value) {
        if (value instanceof MyPromise) return value
        return new MyPromise((resolve, reject) => {
            resolve(value)
        })
    }

    static reject(reason) {
        if (value instanceof MyPromise) return reason
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }

    static allSettled(promiseArr) {
        let result = []
        let count = 0
        return new MyPromise((resolve, reject) => {
            let len = promiseArr.length
            for (let i = 0; i < len; i++) {
                MyPromise.resolve(promiseArr[i]).then(value => {
                    result[i] = { state: FULFILLED, value }
                }, err => {
                    result[i] = { state: PENDING, reason: err }
                })
                count++
                if (count === len) {
                    resolve(result)
                }
            }
        })
    }

    static abort(promise) {
        let obj = {}

        let p = new MyPromise((resolve, reject) => {
            obj.resolve = resolve
            obj.reject = reject
        })

        obj.promise = MyPromise.race([p, promise])
        return obj
    }

    isMyPromise(result, resolve, reject) {
        if (result instanceof MyPromise) {
            result.then(resolve, reject)
        } else {
            resolve(result)
        }
    }
}

// const p = new MyPromise((resolve, reject) => {
//     const result = Math.random() > 0.5
//     if (result) {
//         resolve({ result })
//     } else {
//         reject({ result })
//     }
// }).then(res => {
//     console.log("res", res);
// }, err => {
//     console.log("err", err);
// })

const p1 = new MyPromise((resolve, reject) => {
    const result = Math.random() > 0.5
    console.log("p1 result", result);

    if (result) {
        resolve({ result, p: "p1" })
    } else {
        reject({ result, p: "p1" })
    }
})

const p2 = new MyPromise((resolve, reject) => {
    const result = Math.random() > 0.5
    console.log("p2 result", result);

    if (result) {
        resolve({ result, p: "p2" })
    } else {
        reject({ result, p: "p2" })
    }
})

const p3 = new MyPromise((resolve, reject) => {
    const result = Math.random() > 0.5
    console.log("p3 result", result);

    if (result) {
        resolve({ result, p: "p3" })
    } else {
        reject({ result, p: "p3" })
    }
})

const p4 = new MyPromise((resolve, reject) => {
    const result = Math.random() > 0.5
    console.log("p4 result", result);

    if (result) {
        resolve({ result, p: "p4" })
    } else {
        reject({ result, p: "p4" })
    }
})

const p5 = new MyPromise((resolve, reject) => {
    const result = Math.random() > 0.5
    console.log("p5 result", result);
    setTimeout(() => {
        if (result) {
            resolve({ result, p: "p5" })
        } else {
            reject({ result, p: "p5" })
        }
    }, 2000)
})

const abortPro = MyPromise.abort(p5)

abortPro.promise.then(res => {
    console.log(res);
})

abortPro.resolve('拦截')

async function testPromise() {
    MyPromise.all([p1, p2]).then(res => {
        console.log("p1-2 res", res);
    }).catch(err => {
        console.log(err);
    }).finally(err => {
        console.log("finally 执行", err);
    })

    MyPromise.race([p3, p4]).then(res => {
        console.log("p3-4 res", res);
    }).catch(err => {
        console.log("p3-4 err", err);
    })

    const p12 = await MyPromise.allSettled([p3, p4])
    console.log("allSettled", p12);
}

testPromise()

```