/** 请实现一个fibonacci函数，要求其参数和返回值如下所示：
 *@desc: fibonacci
 *@param: count {Number}
 *@return: result {Number} 第count个fibonacci值，计数从0开始
 fibonacci数列为：[1, 1, 2, 3, 5, 8, 13, 21, 34 …]
 则getNthFibonacci(0)返回值为1
 则getNthFibonacci(4)返回值为5
 * */

function getNthFibonacci(n) {
    return n >= 2 ? getNthFibonacci(n - 1) + getNthFibonacci(n - 2) : 1;
}


function judgeArr(arr){
    return Array.isArray(arr); //或者 Object.prototype.toString.call(arr) == '[object Array]'
}
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(Object.prototype.toString.call(arr));
console.log();
judgeArr([]);
judgeArr({});
judgeArr('');
judgeArr(1);