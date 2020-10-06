/**
 * 输入：一个嵌套型数组
 * 输出：扁平化后的数组
 * */

let array = [1, [2, 3, 4]];
let arrayDeeper = [1, [2, [3, 4]]];

/* 如果只是两层的数据
* */
function flatten_1(arr) {
  return arr.toString().split(',').map((item) => parseInt(item));
}

function flatten_2(arr) {
  return Array.prototype.concat.apply([], arr);
}

console.log(flatten_1(array));
console.log(flatten_2(array));

/* 如果是多层嵌套的数组
* */
function flattenDeeper(arr) {
  return arr.reduce((prev, current) => {
    let result = Array.prototype.concat(prev, Array.isArray(current) ? flattenDeeper(current) : current);
    console.log(`prev: ${prev}  current: ${current}  result:${result}`);
    return result;
  })
}

function flattenDeeper_2(arr, result = []) {
  for (let item of arr) {
    if(Array.isArray(item)){
      flattenDeeper_2(item, result);
    }else{
      result.push(item);
    }
  }
  return result;
}

console.log(flattenDeeper(arrayDeeper));
console.log(flattenDeeper_2(arrayDeeper));
