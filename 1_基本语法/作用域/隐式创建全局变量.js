// 'use strict'
var a = 10

function sum() {
    // b 是没有显式声明的，但被隐式创建为全局变量
    b = 20
    return a + b
}

console.log(sum()) // 30
// console.log(c) // ReferenceError: c is not defined
// 因为c是未定义的变量，无法使用