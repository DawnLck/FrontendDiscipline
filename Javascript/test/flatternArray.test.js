let array = [1, [2, 3], [4, 5, [6], "a"], ["b"], "c"];

// array.flat();
// Array.prototype.flat.call(array);

function flatArray(array) {
  let result = array.reduce((prev, curr) => {
    return Array.prototype.concat(
      prev,
      Array.isArray(curr) ? flatArray(curr) : curr
    );
  }, []);
  return result;
}

function flatArray2(array) {
  let arrString = array.toString(); // 自动展平 1,2,3,4,5,6,a,b,c
  return arrString.split(",");
}

console.log(flatArray2(array));
