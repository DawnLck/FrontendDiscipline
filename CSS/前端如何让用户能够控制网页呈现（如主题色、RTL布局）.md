# 主题色的控制

> 在比较早的时期，主题色的控制一直是前端开发非常头疼的一个点，大量的重复的样式替换工作，稍有疏忽便会有所遗漏，心智负担让我们迅速变秃。“我变秃了，也变强了 😐”。
>
> 后来 Sass 和 Less 的诞生，着实减少了非常多的压力，大家可以畅快地使用 Sass 和 Less 的变量，为每一种主题色生成一个主题 css，然后提供给用户几种颜色，用户选什么颜色切换什么就是了。但是这种方案有个问题：如何让用户能够使用任意颜色作为主题色？这个问题迫使大家寻找更好的方案（变得更秃），来实现主题色的控制。
>
> 答案就是： CSS3 的 自定义属性（注意：IE 浏览器不支持）

**CSS 自定义属性**（有时候也被称作 CSS 变量或者级联变量），它允许开发者在 CSS 中实现一个语义化的变量，在复杂的网页样式中，对重复的值进行管理和同步。

那么怎么使用呢 🤔？直接来看例子吧，只需要三步即可解决问题：

1. 首先将 CSS 的自定义属性定义在根伪类 `:root` 下，这样就可以在 HTML 文档的任何地方访问到它了

   ```css
   :root {
     --theme-color: brown;
   }
   ```

2. 其次，在你要用到这个变量的地方，通过`var()`函数引入变量，比如下面的导航栏样式就使用到了`--theme-color`这个颜色变量。但如果`--theme-color`没有设定的话，这里的返回值就会是`blue`

   ```css
   .nav {
     color: var(--theme-color, blue);
   }
   ```

3. 通过 JS 控制 CSS 的自定义属性，主题色变量那不是想换啥换啥，美滋滋

   ```js
   // 获取一个 Dom 节点上的 CSS 变量
   element.style.getPropertyValue("--my-var");

   // 获取任意 Dom 节点上的 CSS 变量
   getComputedStyle(element).getPropertyValue("--my-var");

   // 修改一个 Dom 节点上的 CSS 变量
   element.style.setProperty("--my-var", jsVar + 4);
   ```

至此，你应该知道如何操作了吧？So easy，多余的时间又可以欢乐地摸鱼啦！

具体的效果可以参考[ElementUI 的主题编辑器工具][element-theme-editor] 🔨。

> `:root` 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，`:root` 表示 `<html>` 元素，除了优先级更高之外，与 html 选择器相同。

> CSS 自定义属性是具有继承性的，子节点的自定义属性继承自父节点，但如果在子节点重新定义自定义属性，则会覆盖其值，所以如果怕搞不清楚或者产生难以控制的混乱，还是遵从最佳实践，把 CSS 自定义属性定义在根节点伪类`:root`上吧。

# RTL（阿语布局的控制）

阿拉伯语的书写方式和阅读方式都是有点反常态的，遵循从右到左的顺序，部分国际化的业务就需要考虑如何实现阿语布局，毕竟阿拉伯语的国家还是挺多的。

## 方法一：html 标签中添加`dir="rtl"`

```html
<html lang="zh-CN" dir="rtl"></html>
```

## 方法二：css 中引入 `direction:rtl`

```css
html {
  direction: rtl;
  unicode-bidi: bidi-override; //一般不用这个来强行矫正英文rtl
}
```

> 注意：`diection:rtl`只影响书写顺序，布局上还要进行校对的。如依赖于浮动布局的排版，还需要调整布局的方向。弹性布局则会跟着书写顺序变，类似于`flex-direction: row-reverse`的效果。

# 参考文档链接

[MDN - 使用 CSS 自定义属性（变量）][1]

[阿拉伯语网站的 CSS 要点总结][2]

[1]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties
[2]: https://blog.brain1981.com/453.html
[element-theme-editor]: https://element.eleme.cn/#/zh-CN/theme/preview
