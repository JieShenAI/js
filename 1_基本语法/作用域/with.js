function foo(obj) {
    with (obj) {
        b = 4
        a = 2
    }
}

var obj = {
    b: 3
}

foo(obj)

console.log(obj.a) // undefined
console.log(obj.b) // 4
console.log(a)  // 2，a被当前全局变量泄露到全局作用域上了