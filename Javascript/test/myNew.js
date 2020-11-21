function myNew(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return typeof result === "object" ? result : obj;
}

function Obj(name) {
  this._name = name;

  return {
    hello: name,
  };
}

let myNewObj = myNew(Obj, "My Name");

console.log(myNewObj);
