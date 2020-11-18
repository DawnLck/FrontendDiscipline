# JS 基础数据类型和深浅拷贝

首先还是得回到 Javascript 的基本数据类型来说深浅拷贝这件事情。

## 值类型`[深拷贝]`：数值 Num、布尔值 Boolean、字符串 String、null、undefined。

基本类型值是指在栈内存保存的简单数据段，在复制基本类型值的时候，会开辟出一个新的内存空间，将值复制到新的内存空间，举个栗子 🌰：

```js
    var a = 1;
    var b = a;
    a = 2；
    console.log(a);//输出2；
    console.log(b);//输出1；
```

## 引用类型`[浅拷贝]`：对象、数组、函数等。

用类型值是保存在堆内存中的对象，变量保存的只是指向该内存的地址，在复制引用类型值的时候，其实只复制了指向该内存的地址，举个栗子 🌰：

```js
var a = { b: 1 };
var a2 = a;
a2.b = 2;
console.log(a); // 输出 {b: 2}
```

# 实现对象深拷贝的几种方法

数组也是一种对象，所以我们先从最核心的对象的深拷贝讲起。

1. `JSON.parse()` && `JSON.stringfy()`
   将该对象转换为其 JSON 字符串表示形式，然后将其解析回对象。这感觉有点太过简单了，但它确实有效：
   ```js
   const obj = /* ... */;
   const copy = JSON.parse(JSON.stringify(obj));
   ```
   优点是，如果没有循环对象，并且不需要保留内置类型，使用该方法皆可以获得最快的跨浏览器的克隆性能。
   这里的缺点是创建了一个临时的，可能很大的字符串，只是为了把它重新放回解析器。
   另一个缺点是这种方法不能处理循环对象，而且循环对象经常发生。
   例如，当我们构建树状数据结构，其中一个节点引用其父级，而父级又引用其子级。
   ```js
   const x = {};
   const y = { x };
   x.y = y; // Cycle: x.y.x.y.x.y.x.y.x...
   const copy = JSON.parse(JSON.stringify(x)); // throws!
   ```
   另外，诸如 `Map`, `Set`, `RegExp`, `Date`, `ArrayBuffer` 和其他内置类型在进行序列化时会丢失。
2. `MessageChannel` && `postMessage` 结构化克隆算法
   这种方法的缺点是它是异步的。虽然这并无大碍，但是有时候你需要使用同步的方式来深度拷贝一个对象。

   ```js
   function structuralClone(obj) {
     return new Promise(resolve => {
       const {port1, port2} = new MessageChannel();
       port2.onmessage = ev => resolve(ev.data);
       port1.postMessage(obj);
     });
   }

   const obj = /* ... */;
   const clone = await structuralClone(obj);
   ```

# 数组的深拷贝以及`Array.slice()`和`Array.concat()`方法属于深拷贝吗？

这个我都被弄糊涂了，网上找了些资料才捋清了一下。

**对于一维数组而言**：

1. **arrayObj.slice(start, end)**
   ```js
   var arr1 = ["1", "2", "3"];
   var arr2 = arr1.slice(0);
   arr2[1] = "9";
   console.log("数组的原始值：" + arr1); //1,2,3
   console.log("数组的新值：" + arr2); //1,9,3
   ```
2. **arrayObj.concat(arr1,arr2 ... )**
   ```js
   var arr1 = ["1", "2", "3"];
   var arr2 = arr1.concat();
   arr2[1] = "9";
   console.log("数组的原始值：" + arr1); //1,2,3 console.log("数组的新值：" + arr2 );//1,9,3
   ```

**那数组里面如果包含对象呢？**：

```js
var arr1 = [{ name: "weifeng" }, { name: "boy" }]; //原数组
var arr2 = [].concat(arr1); //拷贝数组
arr1[1].name = "girl";
console.log(arr1); // [{"name":"weifeng"},{"name":"girl"}]
console.log(arr2); //[{"name":"weifeng"},{"name":"girl"}]

var a1 = [["1", "2", "3"], "2", "3"],
  a2;
a2 = a1.slice(0);
a1[0][0] = 0; //改变a1第一个元素中的第一个元素
console.log(a2[0][0]); //影响到了a2
```

从上面两个例子可以看出，由于数组内部属性值为引用对象，因此使用 `slice` 和 `concat` 对对象数组的拷贝，整个拷贝还是浅拷贝，拷贝之后数组各个值的指针还是指向相同的存储地址。

> **`Array.slice()`** 和 **`Array.concat()`** 这两个方法，仅适用于对不包含引用对象的一维数组的深拷贝!

这里还有个问题留给我们思考一下 🤔，如果二维数组中，我们直接对第一个维度进行修改呢？即`a1[0] = 1`，这个修改会不会影响 `a2`?

# ES6 中的 `Object.assign()` 方法 以及 对象扩展操作符 `...`

## Object.assign() 方法

Object.assign()考察点是 ES6 中实现对象复制，关于 Object.assign()这个函数[这里有一篇文章][1]讲得非常详细明白。

ES6 提供了 Object.assign()，用于合并/复制对象的属性。

```js
Object.assign(target, source_1, ..., source_n)
```

下面是一个例子

```js
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

那么 Object.assign()方法是浅拷贝还是深拷贝呢？请看下面这个例子：

```js
function mutateDeepObject(obj) {
  obj.a.thing = true;
}

const obj = { a: { thing: false } };
const copy = Object.assign({}, obj);
mutateDeepObject(copy);
console.log(obj.a.thing); // prints true
```

> `Object.assign(target, sources...)`是一个简单的拷贝对象的方式，属于浅拷贝。它接受任意数量的源对象，主要作用就是枚举它们的所有属性并分配给`target`。

## 对象扩展操作符 `...`

> 使用对象扩展操作符 ...，对象自己的可枚举属性可以被拷贝到新对象。

```js
const obj = { a: 1, b: 2, c: { d: "d" } };
const shallowClone = { ...obj };
shallowClone.a = "a";
shallowClone.c.d = "4";
console.log(obj); // a: 1, b: 2, c: {d: "4"}}
console.log(shallowClone); // a: "a", b: 2, c: {d: "4"}}
```

# 其他的看上去像是对象深拷贝，实质是浅拷贝的方法

````js
const obj = { a: 1, b: 2, c:{d:'d'} }
const shallowClone = Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {});
shallowClone.a = 'a';
shallowClone.c.d = '4';
console.log(obj); // a: 1, b: 2, c: {d: "4"}}
console.log(shallowClone); // a: "a", b: 2, c: {d: "4"}}
**```**
````
