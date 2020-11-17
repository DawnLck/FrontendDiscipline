---
# 主题使用方法：https://github.com/xitu/juejin-markdown-themes
theme: juejin
highlight: github
---

> 这个基本上是前端面试中的高频考题之一，因为从这个问题能衍生的问题实在是太多了，这也是前端工作的核心问题。

# 0. 大致流程

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5b3a0692ae94b56960ca49e682576e7~tplv-k3u1fbpfcp-watermark.image)

看图的话更容易记一些，主要就是以下四个过程：

1. URL 解析
2. 建立 TCP 连接
3. 服务器响应请求
4. 资源解析和渲染

下面将会基于这几个过程进行描述和简要的分析。

# 1. 浏览器输入 URL

## 1.1 域名和 ip 地址的区别是什么？如何进行映射？静态映射和动态映射的区别？

首先需要搞明白的是，域名和 ip 地址是不同的，域名是为了更方便记忆 ip 所产生的，ip 才是服务器在网络上的真实地址。

> IP 地址是用来唯一标识互联网上计算机的逻辑地址，让电脑之间可以相互通信，每台连网计算机都依靠 IP 地址来互相区分，相互联系。

> IP 地址通常指的是网络中的主机，而域名则通常表示一个网站，一个域名可以绑定到多个 ip 上，多个域名也可以绑定到一个 ip 上。

为了让域名和地址能够相互转换，就需要对其进行映射，有两种方式：

1. **静态映射** 在浏览器端存储一份域名到 ip 地址的映射表，只供本设备使用。
2. **动态映射** 利用 DNS 来进行域名解析，在专门的 DNS 服务器上配置主机到 IP 地址的映射。
   > DNS（Domain Name System，域名系统），万维网上作为域名和 IP 地址相互映射的一个分布式数据库，能够使用户更方便的访问互联网，而不用去记住能够被机器直接读取的 IP 数串。DNS 协议运行在 UDP 协议之上，使用端口号 53。DNS 可供所有网络上的节点使用。

## 1.2 描述一下域名解析 && 浏览器查询 ip 的过程

关键词：**DNS 查询**、**域名解析**

1. 浏览器从缓存的映射表中寻找域名对应的记录，如果存在则直接返回 IP
2. 缓存中如果没有记录命中，则进行系统调用查询 hosts，查找用户定义的 IP 映射。
3. 前两者都无效的情况下， 向路由器发送 DNS 查询的请求，或者直接向用户定义的 DNS 服务地址发送域名解析的请求。
   > DNS 服务器会从根域名服务器开始递归搜索，从.com 顶级域名服务器，到 baidu 的域名服务器。

## 1.3 短网址的实现 ShortURL

短网址的实现建立在转译和重定向的基础上，重定向的状态码包含 301 永久重定向和 302 临时重定向。

短码转译这里举出两个比较经典的算法：

1. 自增序列算法
2. 摘要算法

## 1.4 同源策略

源：**协议**://**域名**:**端口**，三者一致为同源

## 1.5 浏览器允许跨域加载的资源：

1. **link** href="XXX"
2. **img** src="XXX"
3. **script** src="XXX"
4. **iframe** "src"="XXX"

## 1.6 为什么需要跨域？/ 跨域的几种方法？

跨域的原因：浏览器拦截了非同源的请求

跨域的几种方式：

1. Jsonp (浏览器通过 script 请求，告知服务器执行 callback 的名称，服务器返回对应的数据执行体)
2. Websocket 通信 （Origin 字段是关键）
3. **CORS** （当前主要的跨域方式，浏览器默认发起 CORS 请求，服务器设置 Access-Control-Allow-Origin 字段）
4. iframe 跨域
5. window.postMessage
6. 服务器代理跨域 Proxy

## 1.7 CSRF 攻击和防御

# 2. 建立 TCP 连接

关键词：**TCP/IP 协议** / **四层模型** / **三次握手**

## 2.1 TCP/IP 协议组是什么？

在 **TCP/IP 协议组** 中包含一系列用于处理数据通信的协议：

- TCP (传输控制协议) - 应用程序之间的可靠通信
- UDP (用户数据包协议) - 应用程序之间的简单通信
- IP (网际协议) - 计算机之间的通信
- ICMP (因特网消息控制协议) - 针对错误和状态
- DHCP (动态主机配置协议) - 针对动态寻址
- ...
  如图所示

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/579f10c4afbb4fe8b7e99a9f24e32880~tplv-k3u1fbpfcp-watermark.image)

> **TCP / IP 协议组**
>
> - TCP/IP 意味着 TCP 和 IP 在一起协同工作。
> - TCP 负责应用软件（比如你的浏览器）和网络软件之间的通信。
> - IP 负责计算机之间的通信。
> - TCP 负责将数据分割并装入 IP 包，然后在它们到达的时候重新组合它们。
> - IP 负责将包发送至接受者。

在这其中需要着重了解一下的就是数据是如何进行处理的、TCP、IP 以及 TCP 和 UDP 的区别。

### 数据处理流程

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df557729c19549eab21cf43d7446b80b~tplv-k3u1fbpfcp-watermark.image)

## 2.2 TCP 与 UDP 的区别

- TCP 是面向连接的、可靠的流协议。流就是指不间断的数据结构，当应用程序采用 TCP 发送消息时，虽然可以保证发送的顺序，但还是犹如没有任何间隔的数据流发送给接收端。TCP 为提供可靠性传输，实行“顺序控制”或“重发控制”机制。此外还具备“流控制（流量控制）”、“拥塞控制”、提高网络利用率等众多功能。
- UDP 是不具有可靠性的数据报协议。细微的处理它会交给上层的应用去完成。在 UDP 的情况下，虽然可以确保发送消息的大小，却不能保证消息一定会到达。因此，应用有时会根据自己的需要进行重发处理。
- TCP 和 UDP 的优缺点无法简单地、绝对地去做比较：TCP 用于在传输层有必要实现可靠传输的情况；而在一方面，UDP 主要用于那些对高速传输和实时性有较高要求的通信或广播通信。TCP 和 UDP 应该根据应用的目的按需使用。

浏览器利用 IP 直接与网站主机通信。浏览器发出 TCP（SYN 标志位为 1）连接请求，主机返回 TCP（SYN，ACK 标志位均为 1）应答报文，浏览器收到应答报文发现 ACK 标志位为 1，表示连接请求确认。浏览器返回 TCP（）确认报文，主机收到确认报文，三次握手，TCP 连接建立完成。

## 2.3 三次握手的过程

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/840ba5873ab043f0965ac8b6ba5aecb6~tplv-k3u1fbpfcp-watermark.image)

## 2.4 四次握手的过程 / 为什么四次握手最后需要等待 2MSL 的时间？

浏览器发送完最后的 ACK 请求之后，需要等待 2MSL 的时间，是因为为了保证客户端发送的最后一个 ACK 报文段能够到达服务器。

## 2.5 HTTP 和 HTTPS / 对称加密和非对称加密的区别

HTTP 主要版本：1.0（短连接）\1.1（长连接）\2.0（多路复用、头部压缩、加密传输）

HTTPS = HTTP + SSL

SSL 加密：非对称加密 + CA 证书体系

加密的两种分类：

1. 对称加密：只使用一个密钥
2. 非对称加密：客户端和服务器各具有私钥和公钥

# 3. 服务器响应请求

在 TCP 连接建立完成后，浏览器向主机发起一个 HTTP-GET 方法报文请求。请求中包含访问的 URL，也就是http://www.baidu.com/ ，还有 User-Agent 用户浏览器操作系统信息，编码等。

## 3.1 常见的服务器状态码

### 1\*\* 请求状态

- 100 Continue 继续，一般在发送 post 请求时，已发送了 http、header 之后服务端将返回此信息，表示确认，之后发送具体参数信息

### 2\*\* 响应状态

- 200 OK 正常返回信息
- 201 Created 请求成功并且服务器创建了新的资源

### 3\*\* 资源状态

- 301 Moved Permanently 永久重定向，请求的网页已永久移动到新位置。

### 4\*\* 网页状态

- 400 Bad Request 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
- 404 Not Found 找不到如何与 URI 相匹配的资源。

### 5\*\* 服务器状态

- 500 Internal Server Error 最常见的服务器端错误。

## 3.2 重定向的作用

重定向是为了负载均衡或者导入流量，提高 SEO 排名。利用一个前端服务器接受请求，然后负载到不同的主机上，可以大大提高站点的业务并发处理能力；

重定向也可将多个域名的访问，集中到一个站点；由于 baidu.com，www.baidu.com会被搜索引擎认为是两个网站，照成每个的链接数都会减少从而降低排名，永久重定向会将两个地址关联起来，搜索引擎会认为是同一个网站，从而提高排名。

# 4. 资源解析和渲染

## 4.1 页面生成渲染树的过程（Render Tree）

## 4.2 如何减少页面的重排（Reflow）重绘(Repaint)

1. 减少对 DOM 的操作
2. Js 合并操作（document.createDocumentFragment, el.style.cssText="...."）
3. CSS 切换类名
4. 缓存布局信息，减少属性访问

## 4.3 `<script>` 为什么建议放在 HTML 的最后部分？

js 的加载和执行会阻塞渲染进程。

## 4.4 浏览器的事件循环机制 EventLoop \ 宏任务和微任务

## 4.5 浏览器缓存机制

强缓存：Expires \ Cache-control

协商缓存: Etag \ Last-modified

## 4.6 如何实现两个浏览器窗口之间的通信

1. localstorage（同源限制）
   一个窗口更新 localStorage，另一个窗口监听 window 对象的”storage”事件，来实现通信。
   ```js
   // 本窗口的设值代码
   localStorage.setItem("aaa", (Math.random() * 10).toString());
   // 其他窗口监听storage事件
   window.addEventListener("storage", function (e) {
     console.log(e);
     console.log(e.newValue);
   });
   ```
2. socket 通信（无同源限制）
   所有的 WebSocket 都监听同一个服务器地址，利用 send 发送消息，利用 onmessage 获取消息的变化，不仅能窗口，还能跨浏览器，兼容性\*\*\*，只是需要消耗点服务器资源。
   ```js
   var ws = new WebSocket("ws://localhost:3000/");
   ws.onopen = function (event) {
     ws.send({ now: Date.now() }); // 通过服务器中转消息
   };
   ws.onmessage = function (event) {
     console.log(event.data); // 监听信息
   };
   ```
3. postMessage （无同源限制）
4. cookie 及心跳检测定时器（无同源限制）
5. web worker(SharedWorker)（同源限制）

# 参考文章

1. [W3School - TCP/IP 简介][1]
2. [一篇文章带你熟悉 TCP/IP 协议（网络协议篇二）][2]
3. [前端基础：如何实现两个浏览器窗口间通信？主要有哪几种方式？][3]

> 笔者见解有限，只能简要地进行归纳，欢迎各位帮助指正。

[1]: http://www.w3school.com.cn/tcpip/tcpip_intro.asp
[2]: https://www.jianshu.com/p/9f3e879a4c9c
[3]: https://developer.51cto.com/art/201906/598311.htm
