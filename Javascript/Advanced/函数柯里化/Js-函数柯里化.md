---
# 主题列表：juejin, github, smartblue, cyanosis, channing-cyan, fancy, hydrogen, condensed-night-purple, greenwillow, v-green, vue-pro
# 贡献主题：https://github.com/xitu/juejin-markdown-themes
theme: hydrogen
highlight:
---

**函数柯里化** 在面试过程经常被问到，也是面试官比较喜欢问的一个难点，能否准确地解释函数柯里化的产生背景和作用，也是对面试者的 js 深度的一个评判标准。

> 虽说是快速理解，但还是希望你能耐心地花费 10 分钟的时间仔细阅读，相信会帮助你加深印象。

# 函数柯里化的作用

为了让大家快速地了解函数柯里化，先简单说明一下函数柯里化的作用：

1. 编写小模块的代码，可以更轻松的重用和配置
2. 避免频繁调用具有相同参数的函数

## 一个真实场景的栗子 🌰

> 这里直接援引了阿里云译文里的经典例子，保证你看一遍就懂了

举个例子 🌰，你有一个商店 ，你想给你的顾客 10% 的折扣：

```js
function discount(price, discount) {
  return price * discount;
}
```

当一个有价值的客户买了一件 **$500** 的商品，你会给他计算一下：

```js
const price = discount(500, 0.1); // $50    // $500  - $50 = $450
```

那其他不同价格的商品呢，按照正常的逻辑，每天都需要考虑**10%**的折扣输入 💸，如下

```js
const price = discount(1500, 0.1); // $150
// $1,500 - $150 = $1,350
const price = discount(2000, 0.1); // $200
// $2,000 - $200 = $1,800
const price = discount(50, 0.1); // $5
// $50 - $5 = $45
```

太麻烦了！我们有函数柯里化！

```js
function discount(discount) {
  return (price) => {
    return price * discount;
  };
}
const tenPercentDiscount = discount(0.1);
```

现在我们只需要输入价格，不用脑子里再想一遍折扣是多少，Cool😎！

```js
tenPercentDiscount(500); // $50
tenPercentDiscount(1500); // $150
tenPercentDiscount(2000); // $200
```

现在有新的活动了，针对新品的**20%**折扣，我们继续生成一个新的折扣计算器，Nice😎！

```js
const twentyPercentDiscount = discount(0.2);
```

# 函数式编程

说到函数的柯里化，不得不提一下函数式编程（Functional programming）。

函数式编程作为一种编程风格，带来了许多目前前端领域的重要概念：

1. 纯函数
2. 柯里化
3. 高阶函数

本文主要讨论 **函数的柯里化**。

# 函数柯里化的诞生

在函数式编程中，函数是第一等公民，为了保证函数的合成（如`f(g(n))`）能顺利完成，通常要求`f`和`g`都是纯函数，且其传参只能有一个，那对于需要多个参数的函数，如何能转成合成所需要的单参数函数呢？进阶一点：`f(g(n, y), x)`这种含有多个参数的函数合成，该怎么实现？

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75834dbf684e47388d0f8f6f1e415a7f~tplv-k3u1fbpfcp-watermark.image)

## 先举一个最简单的例子

这个时候，函数柯里化就派上用场了，我们先看一个例子 🌰

```js
// 柯里化之前
function add(x, y) {
  return x + y;
}

add(1, 2); // 3

// 柯里化之后
function addX(y) {
  return function (x) {
    return x + y;
  };
}

addX(2)(1); // 3
```

有了柯里化以后，我们就能做到，所有函数只接受一个参数。

那么现在我们来总结一下关于**柯里化**的定义：

> 阮一峰：所谓**"柯里化"**，就是把一个多参数的函数，转化为单参数函数。

> 阿里云译文: 柯里化其实是函数式编程的一个过程，在这个过程中我们能把一个带有多个参数的函数转换成一系列的嵌套函数。它返回一个新函数，这个新函数期望传入下一个参数。

## 再举一个例子

柯里化之前：

```js
function multiply(a, b, c) {
  return a + b + c;
}
multiply(1, 2, 3);
```

柯里化之后

```js
function multiply(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
multiply(1)(2)(3);
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b342ba23f1d45c2a9267af888776c46~tplv-k3u1fbpfcp-watermark.image)

# 函数柯里化和闭包的关系

函数的柯里化看上去是函数的嵌套，实质是闭包的典型应用。

闭包的存在保证了函数传入的值一直保持 **alive** 的状态，这样柯里化函数之后，不用将所有的参数一次性传入，每一个阶段的结果都不会消失。

# 通用的柯里化函数【重点】

这是真正的面试考点，让你实现一个函数，能够柯里化传入的函数。

## ES6 扩展符实现

```js
function myCurry(fn, ...args) {
  return function (...argsMore) {
    return fn(...args, ...argsMore);
  };
}
```

## ES5 实现

```js
function curry(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    var newArgs = args.concat(Array.prototype.slice.call(arguments));
    return fn.apply(this, newArgs);
  };
}
```

## 应用的例子

```js
function volume(l, h, w) {
  return l * h * w;
}
const hCy = curry(volume, 100);
hCy(200, 900); // 18000000
hCy(70, 60); // 420000
```

# 参考文档

[阮一峰 - 函数式编程入门教程][1]

[阿里云翻译小组 - 「译」理解 JavaScript 的柯里化][2]

[Medium - From Closures to Curry and Compose][3]

> 本文使用了**hydrogen**掘金主题，欢迎大家使用并提出建议

[1]: http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html
[2]: https://zhuanlan.zhihu.com/p/50247174
[3]: https://medium.com/sngular-devs/from-closures-to-curry-and-compose-197d2abcadd8
