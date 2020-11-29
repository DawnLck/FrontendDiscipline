> 本文介绍了一些前端面试中的常见的 polyfill，如`const` \ `new` \ `call` \ `apply` \ `bind`

# 1. 实现 const 的 polyfill

```js
function _const(key, value) {
  const desc = {
    value,
    writable: false,
  };
  Object.defineProperty(window, key, desc);
}
_const("a", 1);
```

# 2. 实现一个 `new` 操作符

## `new` 操作符做了什么

1. new 返回了一个对象
2. 对象的原型指针指向父类的原型对象
3. 继承父类原型上的方法和属性
4. 如果构造函数已返回对象，返回执行的结果

## 如何实现一个`new`操作符

```js
function myNew(fn, ...args) {
  const obj = Object.create(fn.prototype); // 创造新对象，继承构造方法的原型对象
  const result = fn.apply(obj, args); // 执行构造方法，并绑定this指向
  return typeof result === "object" ? result : obj; // 如果构造函数返回了对象，则返回该对象
}
```

# 3. 实现 Function.call 方法

> MDN: call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

关键点：

1. 更改 this 指针指向

polyfill：

较为简单的实现：

```js
function.prototype.myCall(thisArg, ...args){
    thisArg.fn = this;
    return thisArg.fn(...args);
}
```

进一步的实现：

```js

```

# 4. 实现 Function.apply 方法

# 5. 实现一个 bind

> MDN: bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

关键点：

1.  实现一个函数
2.  更改 this 指针指向

语法：

```js
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

polyfill 实现：

```js

```
