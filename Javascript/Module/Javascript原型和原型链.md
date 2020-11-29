# 0. 为什么会出现原型和原型链的概念

1994 年，网景公司（Netscape）发布了 Navigator 浏览器 0.9 版，但是刚开始的 Js 没有继承机制，更别提像同时期兴盛的 C++和 Java 这样拥有面向对象的概念。在实际的开发过程中，工程师们发现没有继承机制很难解决一些问题，必须有一种机制能将所有的对象关联起来。

Brendan Eich 鉴于以上情况，但不想把 Js 设计得过为复杂，于是引入了**new 关键词** 和 **constructor 构造函数**来简化对象的设计，引入了**prototype 函数对象**来包含所有实例对象的构造函数的属性和方法，引入了\***\*proto\*\***和**原型链**的概念解决继承的问题。

# 1. Javscript 函数和函数对象

```
var o1 = {};
var o2 =new Object();
var o3 = new f1();

function f1(){};
var f2 = function(){};
var f3 = new Function('str','console.log(str)');
```

> 凡是直接或者间接通过 `new Function()` 创建的对象都是函数对象，其他的都是普通对象。

在上面的程序中，o1、o2、o3 都是普通对象，f1、f2、f3 都是函数对象。

# 2. 构造函数

```
function Person(name, age, job) {
 this.name = name;
 this.age = age;
 this.job = job;
 this.sayName = function() { alert(this.name) }
}
var person1 = new Person('Zaxlct', 28, 'Software Engineer');
var person2 = new Person('Mick', 23, 'Doctor');
```

> `person1` 和 `person2` 都是 构造函数 Person 的实例。
> 实例的构造函数属性（constructor）指向构造函数。

# 3. 原型对象

```
Person.prototype = {
   name:  'Zaxlct',
   age: 28,
   job: 'Software Engineer',
   sayName: function() {
     alert(this.name);
   }
}
```

每个函数对象都有一个 `prototype` 属性，这个属性就是函数的**原型对象**。

> 每个对象都有 **proto** 属性，但只有函数对象才有 prototype 属性

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/619bf23026254d50928d75315d39860f~tplv-k3u1fbpfcp-watermark.image)

在默认情况下，所有的原型对象都会自动获得一个 constructor（构造函数）属性，这个属性（是一个指针）指向 prototype 属性所在的函数（Person）

```
Person.prototype.constructor == Person
```

而在 Person 这个对象进行实例化的时候，实际上是创建了一个它的实例对象并赋值给它的 prototype，所以得出以下结论：

> 原型对象（Person.prototype）是 构造函数（Person）的一个实例。

# 4. \_\_proto\_\_

JS 在创建对象（不论是普通对象还是函数对象）的时候，都有一个叫做**proto** 的内置属性，用于指向创建它的构造函数的原型对象，也就是 prototype。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0cd0d2f2f9fc43d6bf09d48dd53e5684~tplv-k3u1fbpfcp-watermark.image)

```
Person.prototype.constructor == Person;
person1.__proto__ == Person.prototype;
person1.constructor == Person;
```

看下面一段代码

```
Person.prototype.__proto__ === Object.prototype;
```

`Person.prototype` 是一个普通对象，我们无需关注它有哪些属性，只要记住它是一个普通对象。
因为一个 `普通对象的构造函数 === Object`
所以 `Person.prototype.__proto__ === Object.prototype`

# 5. 原型链

> 原型链的形成是真正是靠**proto** 而非 prototype。

```
person1.__proto__ === Person.prototype;
Person.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;
//Object.prototype.__proto__ === null，保证原型链能够正常结束。

Person.__proto__ === Function.prototype;
Object.__proto__ === Function.prototype;
Function.prototype.__proto__ === Object.prototype;
```

前面三项已经形成了一个原型链，那么后面代码中 Person 和 Object 的**proto**都是`Function.prototype`呢？

> 所有函数对象的 proto 都指向 Function.prototype，它是一个空函数（Empty function）

```
Number.__proto__ === Function.prototype  // true
Number.constructor == Function //true

Boolean.__proto__ === Function.prototype // true
Boolean.constructor == Function //true

String.__proto__ === Function.prototype  // true
String.constructor == Function //true

Object.__proto__ === Function.prototype  // true
Object.constructor == Function // true

Function.__proto__ === Function.prototype // true
Function.constructor == Function //true

Array.__proto__ === Function.prototype   // true
Array.constructor == Function //true

RegExp.__proto__ === Function.prototype  // true
RegExp.constructor == Function //true

Error.__proto__ === Function.prototype   // true
Error.constructor == Function //true

Date.__proto__ === Function.prototype    // true
Date.constructor == Function //true
```

> 所有的构造器都来自于 Function.prototype，甚至包括根构造器 Object 及 Function 自身。所有构造器都继承了·Function.prototype·的属性及方法。如 length、call、apply、bind

所以我们再举一个原型链的例子

```
let num = new Number();
num.__proto__ === Number.prototype;
Number.prototype.__proto__ === Function.prototype;
Funtion.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;
```

也可看下图的实现，更直观。
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a5e58efa86ba447b8f8eb3bebbd41cfe~tplv-k3u1fbpfcp-watermark.image)

ok, 所以明白为什么 Number、String、Array 这样的对象实例能继承到 Object 的属性以及原型链是怎么一回事了吧。

# 参考文章

> [最详尽的 JS 原型与原型链终极详解，没有「可能是」。][1]
>
> [三张图搞懂 JavaScript 的原型对象与原型链 - 水乙 - 博客园][2]
>
> [Javascript 继承机制的设计思想 - 阮一峰的网络日志][3]

[1]: https://www.jianshu.com/p/dee9f8b14771
[2]: https://www.cnblogs.com/shuiyi/p/5305435.html
[3]: http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html
