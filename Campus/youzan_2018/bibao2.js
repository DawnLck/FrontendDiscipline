// function fun(){
//     var n = 0;
//     function inc() {
//         n++;
//         console.log(n);
//     }
// }
// var foo = new fun(); //控制台输出1，再输出2
//
// foo.inc();


// function f1(){
//     n = 999;
// }
// //console.log(n); // ReferenceError: n is not defined
// f1();
// console.log(n); // 999


function f1(){
    var n=999;
    return function(){
        console.log(n);
    };
}

var result=f1();
result(); // 999
