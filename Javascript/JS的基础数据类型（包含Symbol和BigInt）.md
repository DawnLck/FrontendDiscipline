# js 的基础类型

`Number` / `String` / `Null` / `Boolean` / `Undefined` / `Object` / `Symbol` / `BigInt`

# `Null`和`Undefined`

核心差别: `Null`代表了空值（即一个空指针对象），而`Undefined`则是变量未初始化。

typeof 校验类型：

```js
console.log(typeof undefined); //undefined
console.log(typeof null); //object
```

使用场景：

- `null` 使用的场景

  1. 作为对象原型链的终点 Object.getPrototypeOf(Object.prototype) // null
  2. 作为函数的参数，表示该函数的参数不是对象。

- `undefined` 使用场景

  1. 变量被声明了，但没有赋值时，就等于 undefined。
  2. 调用函数时，应该提供的参数没有提供，该参数等于 undefined。
  3. 对象没有赋值的属性，该属性的值为 undefined。
  4. 函数没有返回值时，默认返回 undefined。

## `Symbol`

> JS 的第七个基础类型

> IE 不支持，部分方法全浏览器不支持

`Symbol` 的目的是为了实现一个**唯一不重复不可变**的值，任何一个 Symbol 都是唯一的，不会和其他任何 Symbol 相等。

常用于控制台输出，也可以用于实例判断。

DEMO:

```js
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol("foo");

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol2 === 42);
// expected output: false

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol("foo") === Symbol("foo"));
// expected output: false
```

## `BigInt`

> JS 的第八个基础类型，正处于第 4 阶段，预计会在 ES2020 推出

> 除了 IE 之外的所有浏览器兼容

`BigInt` 是一种内置对象，它提供了一种方法来表示大于 253 - 1 的整数。这原本是 Javascript 中可以用 Number 表示的最大数字。`BigInt` 可以表示任意大的整数。

使用方法：

```js
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111"
);
// ↪ 9007199254740991n
```

解决的问题：
BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数。由于 Number 类型的局限性。Number 类型的局限性（JavaScript 中的 Number 是双精度浮点型，这意味着精度有限，如下所示）

```js
const max = Number.MAX_SAFE_INTEGER; // 9007199254740991
max + 1; // 9007199254740992
max + 2; // 9007199254740992
```

注意 `max + 1 === max + 2`，这是不对的
`BigInt` 就是用于解决此类问题

# 参考文章

1. [Symbol - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
2. [BigInt - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
3. [undefined 与 null 的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)
4. [【面试说】一年半前端 Bigo 一二三 面](https://juejin.im/post/6880028535101227021)
