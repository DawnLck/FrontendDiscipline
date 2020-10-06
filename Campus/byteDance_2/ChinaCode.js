

let test = "年薪30K以上";
function chineseLen(str) {
  let len = 0;
  for (let i in str) {
    encodeURI(str[i]).length === 9 ? (len += 4) : len++;
    //也可以换成 str.charCodeAt(i) > 128 ? (len += 4) : len++;
  }
  return len;
}
console.log(chineseLen(test));
