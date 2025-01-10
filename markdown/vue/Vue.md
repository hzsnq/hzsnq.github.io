[[toc]]

## ref

声明相应式状态

## reactive

reactive()使对象本身具有响应性

局限性：
- 有限的值类型
- 不能替换整个对象
- 对解构操作不友好

## 条件渲染

在vue3的版本中，当 `v-if` 和 `v-for` 同时存在于一个元素上的时候，`v-if` 会首先被执行

在vue2的版本中，`v-for`会首先执行

## 组合式函数

与`Mixin`的对比

- 不清晰的数据来源
- 命名空间冲突
- 隐式的跨 mixin 交流

## 组件调试钩子

`onRenderTracked` 生命周期钩子来调试查看哪些依赖正在被使用，或是用 `onRenderTriggered` 来确定哪个依赖正在触发更新

## 计算属性调试

我们可以向 `computed()` 传入第二个参数，是一个包含了 `onTrack` 和 `onTrigger` 两个回调函数的对象：

- `onTrack` 将在响应属性或引用作为依赖项被跟踪时被调用。
- `onTrigger` 将在侦听器回调被依赖项的变更触发时被调用。

和 computed() 类似，侦听器也支持 onTrack 和 onTrigger 选项：