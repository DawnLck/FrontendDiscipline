let input = 'Hello my best friend';
/**
 * reverse
 * @param str
 * */
function reverse(str) {
  let arr = str.split(' ');
  let result = [];
  let length = arr.length;
  for (let i = length - 1; i > -1; i--) {
    result.push(arr[i]);
  }
  return result.join(' ');
}
function reverse_2(str){
  return str.split(' ').reverse().join(' ');
}

console.log(reverse(input));//'friend best my Hello'
console.log(reverse_2(input));//'friend best my Hello'

