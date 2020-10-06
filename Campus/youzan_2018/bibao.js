var a = 1;
function foo(){
    var a = 2;
    c = 0;
    return function () {
        console.log(a);
        console.log(b++);
        console.log(c);
    }
}
console.log(a);// 1

//console.log(c); // Reference Error
var b = 3;
var x = foo();
x(); //2 3 0
console.log(a); // 1
console.log(b); // 4
console.log(c); // 0


function Coder(){
  return function (){
    console.log('Hello World!')
  }
}

new Coder()();

