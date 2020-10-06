var body = document.getElementsByClassName('container');
var dom = document.getElementById('contentBox');
// dom.style.width = "200px";
var textNode = document.createTextNode('\nDom.style.width:' + dom.style.width);
body[0].appendChild(textNode);

// var textNode2=document.createTextNode('Dom.currentStyle.width:' + dom.currentStyle.width);
// body[0].appendChild(textNode2);

// var textNode3 = document.createTextNode('\nWindow.getComputedStyle(dom).width: ' + window.getComputedStyle(dom).width);
// body[0].appendChild(textNode3);

console.log('Dom.style.width:' + dom.style.width);
// console.log('Dom.currentStyle.width:' +  dom.currentStyle.width);
console.log('Window.getComputedStyle(dom).width: ' + window.getComputedStyle(dom).width);

console.log('Dom.getBoundingClientRect().width: ' + dom.getBoundingClientRect().width);

console.log('Dom.offsetWidth: ' + dom.offsetWidth);

console.log('Dom.scrollWidth: ' + dom.scrollWidth);

console.log('Dom.clientWidth: ' + dom.clientWidth);