函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。

## 1.js

没有显式声明的，会被隐式创建为全局变量。若不想如此，设置为 `'use strict'`

## with.js

讨论了使用`with`导致，局部变量被泄露到全局作用域上去

## 块作用域.js

在 ES6 之前，用 var 来声明变量，JS 只有函数作用域和全局作用域，没有块级作用域，所以{}限定不了 var 声明变量的访问范围;
新增的 let，可以声明块级作用域的变量;
