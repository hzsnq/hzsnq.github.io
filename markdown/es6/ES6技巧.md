[[toc]]

## Array.of

关于奇怪的Array函数：

众所周知，我们可以通过Array函数来做以下事情。

初始化一个指定长度的数组。

设置数组的初始值

\`\`\`js
// 生成
const array1 = Array(3) //[,,]

//
const array2 = Array() //[]
const array3 = Array(undefined) //[undefined]
const array4 = Array(1, 2, 3) //[1,2,3]
\`\`\`

传递给Array函数的参数个数不一样，其功能也不一样。

可以使用Array.of来弥补Array的不足

\`\`\`js
// 生成
const array1 = Array.of(3) //[3]
const array2 = Array.of() //[]
const array3 = Array.of(undefined) //[undefined]
const array4 = Array.of(1, 2, 3) //[1,2,3]
\`\`\`

## Array.from

从方法中，我们可以通过Array.from方法将类数组对象、arguments对象和NodeList对象转换成真正的数组

1.类数组对象

\`\`\`js
const arrayLike = {
  0: 'fatfish',
  1: 'medium',
  length: 2
}
const array1 = [].slice.call(arrayLike) // ['fatfish', 'medium']
// A more convenient way
const array2 = Array.from(arrayLike) // ['fatfish', 'medium']
\`\`\`

2.节点列表

\`\`\`js
const domsNodeList = document.querySelectorAll('div')
const domsArray = Array.from(domsNodeList) // [ dom, dom, dom, ... ]
\`\`\`

3.arguments

\`\`\`js
const logInfo = function () {
  console.log('arguments', arguments)
  console.log('Array.from arguments', Array.from(arguments))
}
logInfo('fatfish', 100)
logInfo('fatfish')
\`\`\`

4.Array.from的第二个参数

我们可以像"[].map"一样使用Array.from方法

\`\`\`js
const array = [1, 2, 3]
const array2 = array.map((num) => num * 2) // [2, 4, 6]
const array3 = Array.from(array, (num) => num * 2) // [2, 4, 6]
\`\`\`

## includes

我们经常会写这样的判断语句，在满足其中一个条件的情况下做某事

\`\`\`js
const num = 1
if (num === 1 || num === 2 || num === 3 || num === 4) {
  console.log(num)
}
\`\`\`

通过includes方法来简化代码

\`\`\`js
const nums = [1, 2, 3, 4]
const num = 1
if (nums.includes(num)) {
  console.log(num)
}
\`\`\`

## at

读取数组的尾部元素，需要以\`array.length -1\`作为下标来读取

\`\`\`js
const array = [1, 2, 3, 4, 5]

let lastEle = array[array.length - 1] //5

lastEle = array[-1] //undefined
\`\`\`

可以使用\`at\`方法读取数组其他位置的元素

\`\`\`js
const array = [1, 2, 3, 4, 5]
const lastEle = array.at(-1) //5
const firstEle = array.at(0) //1
\`\`\`

## flat

flat方法创建一个新数组，其中所有子数组元素以递归方式连接到指定深度

\`\`\`js
const array = [1, [2, [3, [4, [5]]]]]

const flat1 = array.flat() //[1,2,[3, [4, [5]]]]
const flat2 = array.flat(2) //[1,2,3, [4, [5]]]
const flat3 = array.flat(Infinity) //[1,2,3,4,5]
\`\`\`

## findIndex

findIndex()方法返回数组中第一个满足条件的元素索引，没有则返回-1

\`\`\`js
const array = [-1, 0, 10, 20, 100]

const index1 = array.findIndex((num) => num < 0) // 0
const index2 = array.findIndex((num) => num >= 10) // 3
\`\`\`
