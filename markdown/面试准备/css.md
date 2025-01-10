[[toc]]

## 所说你对盒模型的理解

一个盒子由四个部分组成：`content`,`padding`,`margin`,`border`

box-sizing:border-box | content-box

怪异盒模型
border-box：盒子宽度=content+margin
标准盒模型
content-box：盒子宽度=content+padding+border+margin

区别就是border-box的宽度包含padding和border

## 回流/重排，重绘

重绘：当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的

回流/重排：当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建

## BFC

BFC目的是形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部的元素

- 防止margin重叠
- 清除内部浮动
- 自适应多栏布局

## px em rem vh/vw

px：绝对单位，页面按精确像素展示
em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算，整个页面内1em不是一个固定值
rem：相对单位，相对根节点html的字体大小来计算
vh/vw：主要用于页面视口大小布局，在页面布局上更加方便简单

## 响应式设计

页面的设计与开发应当根据用户行为以及设备环境(系统平台、屏幕尺寸、屏幕定向等)进行相应的响应和调整

- 媒体查询
- 百分比
- vw/vh
- rem

## 单行/多行文本溢出省略

text-overflow：ellipsis 当文本溢出时，显示省略号
white-space:nowrap 不换行
overflow:超出隐藏

word-break：break-all

基于高度截断
伪元素+定位实现多行文本溢出

基于行数截断

-webkit-line-clamp:2

## css选择器

- id选择器（#box），选择id为box的元素

- 类选择器（.one），选择类名为one的所有元素

- 标签选择器（div），选择标签为div的所有元素

- 后代选择器（#box div），选择id为box元素内部所有的div元素

- 子选择器（.one>one_1），选择父元素为.one的所有.one_1的元素

- 相邻同胞选择器（.one+.two），选择紧接在.one之后的所有.two元素

- 群组选择器（div,p），选择div、p的所有元素

内联>ID选择器>类选择器>标签选择器

## sass

- 变量
- 作用域
- 代码混合
- 嵌套
- 代码模块化

