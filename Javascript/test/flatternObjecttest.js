const obj = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
    e: 3,
  },
  f: {
    g: 4,
    h: {
      i: 5,
    },
  },
};

function flatternObj(obj) {
  let result = {};
  function flat(obj, prefix = "") {
    for (let index in obj) {
      let target = obj[index];
      let _path = prefix.length ? `${prefix}.${index}` : `${index}`;
      if (Object.prototype.toString.call(target) == "[object Object]") {
        flat(target, _path);
      } else {
        result[_path] = target;
      }
    }
  }
  flat(obj);
  return result;
}

console.log(flatternObj(obj));
