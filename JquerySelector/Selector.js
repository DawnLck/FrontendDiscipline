/**
 *  模拟Jquery中选择器$()的实现
 * */
//源码
(function(){
  jQuery = function( selector, context ) {
    // The jQuery object is actually just the init constructor 'enhanced'
    return new jQuery.fn.init( selector, context, rootjQuery );
  };

  if ( typeof window === "object" && typeof window.document === "object" ) {
    window.jQuery = window.$ = jQuery;
  }
})();

// 比较简单的模拟方法 IE8及以上有效
(function(){
  var jQuery = function(selector){
    return document.querySelectorAll(selector);
  };
  window.jQuery = window.$ = jQuery;
})();

// 稍微复杂的模拟方法
(function(){
  var jQuery = function(selector){
    var result = {};
    if (selector.substring(0,1) === "#") {
      result = document.getElementById(selector.substring(1));
      // this.tqOjbect.data.push(elem);
    } else if (selector.substring(0,1) === ".") {
      result = document.getElementsByClassName(selector.substring(1));
    } else {
      result = document.getElementsByTagName(selector);
    }
    return result;
  };
  window.jQuery = window.$ = jQuery;
})();
