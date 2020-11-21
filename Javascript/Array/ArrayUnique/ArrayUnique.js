/** Array Unique 数组去重
 * */
const users = [{
  id: 1, name: "a"
}, {
  id: 2, name: "a"
}, {
  id: 3, name: "b"
}, {
  id: 4, name: "v"
}];

Array.prototype.unique = function () {
  let arr = this.map((item) => {return item.name });
  return Array.from(new Set(arr));
};

Array.prototype.unique2 = function () {
  let obj = {};
  let arr = [];
  this.forEach((item) => {
    if(!obj[item.name]){
      obj[item.name] = true;
    }
  });
  for(let key in obj){
    arr.push(key);
  }
  return arr;
};
