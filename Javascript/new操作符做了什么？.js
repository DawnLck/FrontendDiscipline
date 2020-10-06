/**
 * Javascript中的new操作符具体做了什么？
 * */
function A() {
  this.name = "a";
  this.getName = function() {
    return this.name;
  };
}

var a = new A();
console.log(a.name);

/**
 * 编程实现new操作符
 */
var a = {};
a.__proto__ = A.prototype;
A.call(a);
console.log(a.name);
