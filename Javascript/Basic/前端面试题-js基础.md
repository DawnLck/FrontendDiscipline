#  前端面试题 - js基础
1. DOM元素操作
    ```js
    // 获取元素
    document.getElementById('#id');
    // 创建元素
    document.creatElement('tag'); // p div h1...
    // 删除元素
    document.body.removeChild(node);
    // 添加元素
    document.body.appendChild(node);
    ```

2. js基础数据类型

    number \ string \ null \ undefined \ boolean \ object \ symbol \ bigInt

3. null 和undefined的区别

    定义上的差别：
    - null 是指对象的值未设置（已定义）
    - undefined 是未定义

    null 是原型链的终点

    undefined 是全局属性

    ```js
    null == undefined; // true
    null === undefined; // false
    ```

4. 事件流

    事件捕获 -> 处理事件 -> 事件冒泡   

    延伸点：事件委托

    原生事件监听：
    ```js
        node.addEventListener('click', function()=>{})
    ```

5. 拖拽
    原生js鼠标移动事件监听，实现拖拽效果
       - mousedown 鼠标点击（开始拖拽）
       - mousemove 鼠标移动
       - mouseup 鼠标松开（停止拖拽）
    也可以通过HTML5的Drag和Drop实现

6. 判断对象属于哪种基础数据类型

   1. `typeof` 返回基础数据类型
   2. `instanceof` 原型链，只能判断是或者不是
   3. `Object.prototype.toString.call(target)` 目前的最佳实践

7. this
    this, 当前执行上下文
    可以改变this指向的几种方法：
     1. `bind(target)`
     2. `call(target,param1,param2,...)`
     3. `apply(target, paramsArray)`

8. 对动画的优化
   1. `window.requestAnimationFrame`
   2. css动画（不占用js主程序、可以利用硬件加速、浏览器机制-元素可见时才做动画处理）
   3. 整合dom操作