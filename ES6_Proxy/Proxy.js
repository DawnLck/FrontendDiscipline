const man = {
  name: 'jsCoder',
  age: 22
};
//补全代码
const proxy = new Proxy(man, {
  get: function (target, property, receiver) {
    if (property in target) {
      console.log(`${property} has been called`);
      return target[property];
    } else {
      throw new ReferenceError(`Property "${property}" does not exist`)
    }
  }
});

console.log(proxy.name); //"jscoder"
console.log(proxy.age); //22
console.log(proxy.location); //Property "$(property)" does not exist
