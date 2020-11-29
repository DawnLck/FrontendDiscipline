function template(tmpl, data) {
  var result = tmpl;
  for (var key in data) {
    result = result.replace(new RegExp("\\(" + key + "\\)", "g"), data[key]);
  }
  return result;
}
let me = template("我的名字是(name)，我的工作是(work)，(name) Love (work)", {
  name: "xxx",
  work: "yy"
});
console.log(me);
