> 该篇主要从面试题的角度，收集总结前端缓存的相关知识

# HTTP 缓存的作用

减少对同一资源的多次重复请求

# 缓存的类型

缓存可以分为两种：

1.  强制缓存（得到缓存期限后，浏览器自己判断请求即可）
2.  协商缓存（需要和服务器交互）

> 强制缓存的优先级高于协商缓存

# 强制缓存包含哪些字段

## 最常考的两个的字段：

1. `Expires: <http-date>` (设定绝对时间，超出失效)
2. `Cache-Control: max-age=<seconds>`（设定绝对时长，超出失效）

> `<http-date>`示例： _Wed, 21 Oct 2015 07:28:00 GMT_

> Cache-control 是通用消息头字段，存在 HTTP 请求和响应头部中。Expires 只存在于响应头。

> 如果在 Cache-Control 响应头设置了 "max-age" 或者 "s-max-age" 指令，那么 Expires 头会被忽略。

## 其他字段：

缓存请求字段：

1. `Cache-Control: max-stale[=<seconds>]`
2. `Cache-Control: min-fresh=<seconds>`
3. `Cache-control: no-cache`
4. `Cache-control: no-store`
5. `Cache-control: no-transform`
6. `Cache-control: only-if-cached`

缓存响应字段：

1. `Cache-control: must-revalidate`
2. `Cache-control: no-cache`
3. `Cache-control: no-store`
4. `Cache-control: no-transform`
5. `Cache-control: public`
6. `Cache-control: private`
7. `Cache-control: proxy-revalidate`
8. `Cache-Control: max-age=<seconds>`
9. `Cache-control: s-maxage=<seconds>`

(Cache-control 的指令较多，感兴趣的可以点击参考链接)

## Cache-control: no-cache 和 Cache-control: max-age=0

指定 no-cache 或 max-age=0 表示客户端可以缓存资源，每次使用缓存资源前都必须重新验证其有效性。这意味着每次都会发起 HTTP 请求，但当缓存内容仍有效时**可以跳过 HTTP 响应体的下载**。

# 协商缓存的使用场景和相关字段

> 强制缓存存在一个问题，该缓存方式优先级高，如果在过期时间内缓存的资源在服务器上更新了，客服端不能及时获取最新的资源。协商缓存解决了无法及时获取更新资源的问题。

协商缓存：需要和服务器协商是否返回最新的资源还是利用本地缓存

## 常见的协商缓存字段

浏览器请求头部字段：

1. `If-Modified-Since: <http-date>`

   服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回。

   > 不同于 If-Unmodified-Since, If-Modified-Since 只可以用在 GET 或 HEAD 请求中。

   > 当与 If-None-Match 一同出现时，它（If-Modified-Since）会被忽略掉，除非服务器不支持 If-None-Match。

2. `If-Unmodified-Since: <http-date>`

   只有当资源在指定的时间之后没有进行过修改的情况下，服务器才会返回请求的资源。

   如果所请求的资源在指定的时间之后发生了修改，那么会返回 412 (Precondition Failed) 错误。

   > 与 non-safe 方法如 POST 搭配使用，可以用来优化并发控制，例如在某些 wiki 应用中的做法：假如在原始副本获取之后，服务器上所存储的文档已经被修改，那么对其作出的编辑会被拒绝提交。

   > 与含有 If-Range 消息头的范围请求搭配使用，用来确保新的请求片段来自于未经修改的文档。

3. `If-None-Match`

   条件式请求头部。

   对于 **GET** 请求方法来说，当且仅当服务器上没有任何资源的 ETag 属性值与这个首部中列出的相匹配的时候，服务器端会才返回所请求的资源，响应码为 200 。

   对于其他方法来说，当且仅当最终确认没有已存在的资源的 ETag 属性值与这个首部中所列出的相匹配的时候，才会对请求进行相应的处理。

   > 当与 If-Modified-Since 一同使用的时候，If-None-Match 优先级更高（假如服务器支持的话）。

服务器响应头部字段：

1. `Last-Modified: <http-date>`

   它通常被用作一个验证器来判断接收到的或者存储的资源是否彼此一致。由于精确度比 ETag 要低，所以这是一个备用机制。包含有 `If-Modified-Since` 或 `If-Unmodified-Since` 首部的条件请求会使用这个字段。

2. `ETag: W/"<etag_value>"`

   ETag 有点类似指纹，其机制的主要核心在于做内容校验，可以快速确定资源是否变化，也可以有效避免资源的同时更新相互覆盖（“空中碰撞”）。

   > `W/`弱验证器，相同资源的两个弱 Etag 值可能语义等同，但不是每个字节都相同。

   > `<etag-value>`实体标签唯一地表示所请求的资源，一般使用哈希值、MD5 或者版本号。

   > `空中碰撞` 编辑的内容在提交前，服务器的文档已发生改动，返回 **412 错误码**。

# 缓存的优先级

强制缓存优先级高于协商缓存，所以我们从响应头字段看，

Cache-Control（设定时长） > Expires（设定超时时间戳） > ETag（设定唯一指纹） > Last-Modified（判断资源修改时间戳一致性）

简而言之，过期前使用强制缓存，过期后使用协商缓存。

# 缓存的存储位置

1. Disk Cache 存储在硬盘中的缓存，存储时间更久

2. Memory Cache 存储在内存中的缓存，速度更快

相关：三级缓存原理（硬盘 > 内存 > 网络请求）

# 缓存相关的 HTTP 状态码

- `200 OK` 资源请求成功，如果带有（from memory cache），表示该资源是从内存缓存读取的。
- `304 Not Modified` 客户端发送了资源请求，服务器发现没有改变，返回该状态码表示资源未更改。
- `412 Precondition Failed` 协商缓存机制中，服务器在验证请求时，发现不满足条件，返回该状态码表示验证失败。

# 参考文档

- [从前端角度理解缓存](https://segmentfault.com/a/1190000017930248)
- [MDN - Expires](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires)
- [MDN - Cache-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)
- [MDN - If-Modified-Since](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since)
- [MDN - If-Unmodified-Since](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Unmodified-Since)
- [MDN - Last-Modified](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified)
- [MDN - Etag](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag)
- [MDN - If-None-Match](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None-Match)
- [MDN - HTTP 响应代码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)
