// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     })
// }
// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     })
// }
// for (var i = 0; i < 5; i++) {
//     (function(i){      //立刻执行函数
//         setTimeout(function (){
//             console.log(i);
//         });
//     })(i);
// }


for (var i=1; i<=5; i++) {
    setTimeout( function timer(i) {
        console.log(i);
    }, 1000,i );
}