var A = 10000000000;
var B = 10000000000;
var result = 0;
for(var j = 1;j <= B;j++){
    var tem = parseInt(A / j);
    if(!tem){
        break;
    }
    var next = parseInt(A / (j+1));
    if(tem === next){
        var max = parseInt(A / tem);
        if(max >= B){
            result += tem * (B - j + 1);
            j = B;
        }else{
            result += tem * (max - j + 1);
            j = max;
        }
    }else{
        result += tem;
    }
}
console.log(result);

// var result2 = 0;
// for(var i = 1; i <= B; i++){
//     result2 += parseInt(A/i);
// }
// if(result !== result2){
//     console.log('A: '+A+' B:'+B);
// }
