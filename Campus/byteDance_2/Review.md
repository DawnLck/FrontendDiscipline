# 【前端面试】字节跳动 2019 校招面经 - 前端开发岗（三）

> 之前的一篇主要是 jQuery 和网络模型的知识点，这一篇则是侧重于编程实现，也是我二面所问的一些内容。

## 一、JS 的 new 操作符具体做了什么

### 描述

```js
function A() {
  this.name = "a";
  this.getName = function() {
    return this.name;
  };
}
var a = new A();
```

1. 编程实现 new 操作符。
2. 考察继承实现 function inherit(Father, Son)

### 解析

```js
/**
 * 编程实现new操作符
 */
var a = {};
a.__proto__ = A.prototype;
A.call(a);
console.log(a.name); //a
```

## 二、实现简易的模板函数

### 描述

```js
function template(tmpl, data) {
  // TODO
}
template("我的名字是(name)，我的工作是(work)", {
  name: "xxx",
  work: "yy"
});

// 函数的输出是 '我的名字是xxx，我的工作是yy'
```

### 解析

```js
// 简易模版函数
function template(tmpl, data) {
  var result = tmpl;
  for (var key in data) {
    result = result.replace(new RegExp("\\(" + key + "\\)", "g"), data[key]);
  }
  return result;
}
let me = template("我的名字是(name)，我的工作是(work)，(name) Love (work)", {
  name: "xxx",
  work: "yy"
});
console.log(me);
```

## 三、使用 JS 实现一个 repeat 方法，

### 描述

```js
function repeat(func, times, wait) {
  // TODO
}
const repeatFunc = repeat(alert, 4, 3000);
repeatFunc("hellworld");
//会alert4次 helloworld，每次间隔3秒
```

### 解析

```js
function repeat(func, times, wait) {
  return message => {
    let timer = setInterval(() => {
      times-- > 0 ? func(message) : clearInterval(timer);
    }, wait);
  };
}
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hellworld");
```

## 四、算法——扑克牌问题

### 描述

我手中有一堆扑克牌， 但是观众不知道它的顺序。
第一步， 我从牌顶拿出一张牌， 放到桌子上。
第二步， 我从牌顶再拿一张牌， 放在手上牌的底部。
第三步， 重复第一步、第二步的操作， 直到我手中所有的牌都放到了桌子上。
最后， 观众可以看到桌子上牌的顺序是：(牌底部）1,2,3,4,5,6,7,8,9,10,11,12,13(牌顶部）
请问， 我刚开始拿在手里的牌的顺序是什么？
请编程实现。

### 解析

```js
/**
 * Input 拿出牌的顺序 1,2,3,4,5,6,7,8,9,10,11,12,13
 * Output 牌堆原来的顺序
 */
function getCardsOrder(input, cards) {
  //Swap
  if (cards.length) {
    let popCard = cards.pop();
    cards.unshift(popCard);
  }

  //Push
  let popItem = input.pop();
  cards.unshift(popItem);

  console.log(`Popitem: ${popItem}`);
  console.log(`inputAfterPop: ${input}`);
  console.log(`Cards ${cards}`);
  console.log("");

  if (input.length == 0) {
    return cards;
  } else {
    return getCardsOrder(input, cards);
  }
}
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let test = [1, 3, 5, 4, 2]; //1,2,3,4,5
let test2 = [1, 3, 2]; //1,2,3
let callback = getCardsOrder(input, []);
console.log(callback);
```
