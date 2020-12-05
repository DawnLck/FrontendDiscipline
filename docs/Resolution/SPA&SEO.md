随着三大前端框架的普及，SPA（Single-Page Application） 型页面或者工程日渐显露出它无可比拟的优势，在 web 端占据的比重越来越大，深受开发者和设计师的喜爱。

但是，SPA 型网站有一个致命的点，SEO（Search Engine Optimization）。这是因为 SPA 型页面并不适合爬虫直接去访问，一个网站如果不能出现在关键词搜索的前几页列表里，这个网站将在这个万维网上接近隐身。

怎么样才能完善 SPA 型网站的 SEO 呢？且看下文 🍉

# 主流搜索引擎爬虫 UA

## 百度 Baidu

[百度搜索资源平台][1] https://ziyuan.baidu.com/?castk=LTE%3D

[链接提交地址][2] https://ziyuan.baidu.com/linksubmit/url

**百度爬虫 UA**

> - Mozilla/5.0 (Linux;u;Android 4.2.2;zh-cn;) AppleWebKit/534.46 (KHTML,like Gecko) Version/5.1 Mobile Safari/10600.6.3 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)

> - Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html）

## 谷歌 Google

[Google Search Console][3] https://search.google.com/search-console

**谷歌爬虫 UA**

> - Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)

# 网页 SEO 优化常规策略

## 影响 SEO 排名的几个因素

网页搜索引擎通常更关注网站的以下几个方面：

1.  可读性 📰

    信息架构需要清楚明晰，网站需要尽可能地提供无障碍阅读，友好的 URL 设计，明确的标题内容，页面相关度信息聚合和融合。

    为网站确定一个主题（核心关键词），全站都围绕这个关键词进行扩展和相关性来做，尽可能多地在网页中带入我们定义的关键词。

2.  安全性 🔒

    网站的协议是否采用了更安全的 HTTPS，也是搜索引擎会考量网站权重的部分。

3.  移动优化 📱

    Google 在 2019 年开始，采用了移动优先的搜索索引，所以对移动端的优化，也是特别需要关注的一个点。

4.  性能和用户参与度 🚀

    爬虫是不耐烦的，对于加载花费了太多时间的页面，它们会给予较低的搜索权重，所以对页面渲染的性能优化，不仅仅是对用户的负责，对 SEO 也有好处。

    对于那些引入了百度统计或者谷歌统计插件的网页，统计脚本会在后台记录用户的参与度（如页面停留时长），纳入到 SEO 权重计算中。

5.  权威性和信任度 🥂

    网站外链就是在别的网站导入自己网站的链接，高质量高 PR 的外链能迅速提高自身网站的权重。

    友链则是自己的网站包含了其他网站的链接，效果与外链类似。

> 如果你对自己的网站优化还没有具体的想法，可以用 lighthouse 对网页进行评估，按照给出的建议进行优化。

1. 网站主题

2. 外链和友链权重

## 如何利用好 Meta Tag 元标记

Meta 标签用于给搜索引擎提供关于网页的信息，这些信息对于访问者而言是不可见的。

1.  Title
    title 网站标题，长度应当小于 70 字，建议形式为“<标题>-<其他内容>-<网站名>”
2.  Meta - Description
    description 给搜索引擎提供了关于这个网页的简短的描述，长度应当小于 140 字
3.  Meta - Keywords
    keywords 关于网页内容的几个关键词
4.  Meta - Robots
    robots 管理着搜索引擎是否可以进入网页

如下面一段代码，禁止搜索引擎获取网页，并且阻止其进入链接。

```html
<meta name="”robots”" content="”noindex," nofollow” />
```

此处我们举个栗子 🌰

```html
<header>
  <title>淘宝网 - 淘！我喜欢</title>
  <meta
    name="description"
    content="淘宝网 - 亚洲较大的网上交易平台，提供各类服饰、美容、家居、数码、话费/点卡充值… 数亿优质商品，同时提供担保交易(先收货后付款)等安全交易保障服务，并由商家提供退货承诺、破损补寄等消费者保障服务，让你安心享受网上购物乐趣！"
  />
  <meta
    name="keyword"
    content="淘宝,掏宝,网上购物,C2C,在线交易,交易市场,网上交易,交易市场,网上买,网上卖,购物网站,团购,网上贸易,安全购物,电子商务,放心买,供应,买卖信息,网店,一口价,拍卖,网上开店,网络购物,打折,免费开店,网购,频道,店铺"
  />
  ...
</header>
```

# SPA 网站 SEO 优化指南

在客户端渲染的 SPA 页面中，由于内容都是由 Javascript 编译后产生添加到渲染树（Render Tree）上的，所以你查看页面源，大概率会得到以下这种**空容器**代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="manifest" href="/emoji-search/manifest.json" />
    <link rel="shortcut icon" href="/emoji-search/favicon.ico" />
    <title>Emoji Search</title>
    <link href="/emoji-search/static/css/main.2e862781.css" rel="stylesheet" />
  </head>

  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <a
      class="github-fork-ribbon"
      href="https://github.com/ahfarmer/emoji-search"
      title="Fork me on GitHub"
      >Fork me on GitHub</a
    >
    <script
      type="text/javascript"
      src="/emoji-search/static/js/main.d4350923.js"
    ></script>
  </body>
</html>
```

## （一） 三种解决方案：

1. 服务器端渲染，也就是我们常说的 SSR(Server Side Render)，实现起来较为复杂。

2. 页面缓存服务，prerender.io，涉及收费第三方服务，或者中间层启用渲染。

3. 预渲染技术，也可以称为静态页替换，**phantom.js**、**puppeteer** 或者浏览器 Copy outerHTML 就能完成，需要 **nginx** 配合。

该篇文章后续会详细介绍**预渲染技术**的一些实现方法：

## （二）如何判断是爬虫访问还是浏览器访问

爬虫访问时，会使用特殊的 user agent，以百度蜘蛛的 UA 为例，它会使用“Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/s...）”这样的UA，所以我们可以判断 UA 中含有“Baiduspider”字样则意味着是百度蜘蛛来访问了

## （三）如何在百度爬虫来访问时返回静态页

先把静态页放置到网站的 `/assets/static/` 下，配置 nginx 的配置文件 nginx.conf:

```bash
    location / {
        root   C:\projects\bzbclub-dist;
        index  index.html index.htm;

        if ( $http_user_agent ~*  "Baiduspider"){
            rewrite ^/index.html$ /assets/static/index.html last;
        }
    }
```

保存配置文件后要使用 `nginx -s reload` 重新加载网站，然后使用 `curl` 命令的“-A”参数模拟百度蜘蛛访问首页：

```bash
curl -A "Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html）" http://localhost:17082 > z:\temp\bzbclub.html
```

打开 `z:\temp\bzbclub.html` 确认是否已经返回了静态页的内容。

## （四）如何生成静态页并优化

1. Phantom.js
   ```js
   var fs = require("fs");
   var page = require("webpage").create();
   phantom.outputEncoding = "utf-8"; //指定编码方式
   page.open("http://localhost:17082", function (status) {
     if (status === "success") {
       fs.write("z:\\temp\\index.html", page.content, "w");
     } else {
       console.log("网页加载失败");
     }
     phantom.exit(0); //退出系统
   });
   ```
   将此脚本保存为`phantom-static-page.js`，在命令行执行此脚本：
   ```cmd
   phantomjs phantom-static-page.js
   ```
2. Puppeteer
   ```js
   const fs = require("fs");
   const puppeteer = require("puppeteer");
   (async () => {
     const browser = await puppeteer.launch({
       headless: false,
       // executablePath: "C:/Program Files (x86)/Google/Chrome"
     });
     const page = await browser.newPage();
     page.setViewport({
       width: 1920,
       height: 1800,
     });
     await page.goto("http://localhost:3333");
     await page.screenshot({ path: "example.png" });
     const content = await page.content();
     fs.writeFileSync("./index.html", content);
     // await page.close();
     // await browser.close();
   })();
   ```
   将此脚本保存为`pupp-static-page.js`，在命令行执行此脚本：
   ```cmd
   node pupp-static-page.js
   ```
3. 从浏览器获取静态页内容（推荐）
   与前两者相比，看上去没那么极客，但是非常的简单好用。
   - 首先需要新建一个`static.html`
   - 然后在浏览器打开需要生成静态页的页面
   - 按 `F12` 打开 DevTool
   - 鼠标选中`<html>`标签，右键 Copy > Copy OuterHTML
   - 将内容粘贴至`static.html`保存即可
4. 静态页压缩优化
   - 用编辑器打开`static.html`，删除掉所有的<script></script>以及其中的内容
   - 浏览器打开静态页，按 `F12` 打开 DevTool 确保没有报错
   - 体积大小优化的程序视页面的复杂度而定，一般能压缩到原有大小的十分之一

## 验证效果

在搜索引擎的平台上，以 Google Search 举例，提供了如 Google URL 检查工具，让你能够测试 SPA 型页面 SEO 的效果。

你也可以在三到五天内，直观地在搜索引擎的关键词结果页上，看到你的网站的搜索排名，正在逐步提高。

如果以上还解决不了你的问题，可以联系搜索引擎平台协助解决。

# 参考文章链接

1. [《Meta 标签与搜索引擎优化》][4]
2. [《SEO 网站优化的步骤和技巧有哪些？》][5]
3. [《Angular2 网站 SEO 攻略》][6]
4. [《SPA SEO: A Single-Page App Guide to Google’s 1st Page》][7]
5. [MDN - <meta>：文档级元数据元素][8]

[1]: https://ziyuan.baidu.com/?castk=LTE=
[2]: https://ziyuan.baidu.com/linksubmit/url
[3]: https://search.google.com/search-console
[4]: https://www.w3cplus.com/html5/meta-tags-and-seo.html
[5]: https://www.zhihu.com/question/19808905
[6]: https://segmentfault.com/a/1190000014596299?utm_source=index-hottest
[7]: https://snipcart.com/spa-seo
[8]: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta
