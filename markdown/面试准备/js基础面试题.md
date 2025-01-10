[[toc]]

## Javascript有哪些数据类型，区别是什么

### 原始类型
- String
- Number
- Object
- Null
- Undefined
- Symbol
- BigInt

### 引用类型
- Object(包括普通对象，数组，函数等)

### 区别
存储区别
- 原始数据类型存储在栈中
- 引用类型存储在堆中

赋值方式区别
- 原始类型：复制的是值本身
- 引用类型：复制的是引用

### 类型检测
- 使用typeof检查原始类型
- 使用instanceof检查引用类型
- null是一个特殊情况，typeof null 会返回 object

### 类型转换

- 自动类型转换：字符串与数字相加时，数字会被转换为字符串
- 显式类型转换：使用Number(),String(),Boolean()等函数将值转换为指定类型

### 堆和栈的区别

- 栈：内存分配效率高，自动管理（由编译器分配和释放）
- 堆：内存分配灵活，但需由开发者手动管理内存（通过垃圾回收机制）

## 如何判断javascript变量是数组？

- 使用Object.prototype.toString.call()
- 使用Array.isArray()
- 通过原型链判断，obj.prototype === Array.prototype
- 使用instanceof做判断，obj instanceof Array
- 使用Array.prototype.isPrototypeOf,检查Array.prototype是否存在于对象的原型链中

## null和undefined的区别？
类型检测不同
- typeof null object
- typeof undefined undefined

比较操作
- null == undefined //true
- null === undefined //false

变量赋值
- let x; //未赋值，默认是undefined
- let y=null; //明确赋值为null

## typeof null的结果为什么是object
由于null的二进制表示和对象类型的标识符相同，typeof null结果就被错误的设置为object

判断null的正确方法
直接比较===

## typeof和instanceof的区别

- 检测类型的范围:typeof主要用于检测基本数据类型以及函数，未定义类型和symbol，instanceof主要用于检测对象的具体类型，检查某个对象是否是某个构造函数的实例。
- 检测基本类型和引用类型:typeof对于基本类型非常有用，但对于复杂引用类型，只会返回object，而instanceof只能用于引用类型，不能用于检测基本数据类型。

## 为什么javascript中0.1+0.2!==0.3，如何让其想等

数字是以二进制浮点数表示的，导致某些十进制小数在二进制下无法精确表示。

如何让其想等
- 使用误差范围
- 使用toFixed()方法
- 使用Number.toPrecision()方法

## 如何获取安全的undefined值

使用void 运算符对其后的表达式进行求值，然后返回undefined
- void 0

## typeof NaN的结果是什么
// typeof NaN //number

## isNaN和Number.isNaN函数有什么区别

isNaN会尝试将传入的参数转换为数字，然后检查转换后的值是否为NaN。
Number.isNaN不会进行类型转换，只会在参数本身是NaN的情况下返回true。

## 哪些值会被转换为false
- undefined
- null
- +0
- -0
- ''
- NaN
- false


