---
# 主题列表：juejin, github, smartblue, cyanosis, channing-cyan, fancy, hydrogen, condensed-night-purple, greenwillow
# 贡献主题：https://github.com/xitu/juejin-markdown-themes
theme: hydrogen
highlight: juejin
---

从 11 月开始，掘金编辑器就支持主题啦[^官方发文]，具体的使用方法也看可以参考[这篇文章][1]或者[这篇文章][3]。这里还有热心掘金 er 做的一个[掘金主题开发工具][2]，我也是借助这个工具完成 **Hydrogen 氢** 主题。

这篇文章主要还是做一次 _掘金主题横向评测_ ，评测范围为写这篇文章时的已公开的主题，有些主题也有可能在这篇文章写的时候也在不断更新，大家以最新的版本为准。

我自己也做了一款主题（**Hydrogen 氢**），我会先简单介绍一下这款主题的设计理念，然后再横向地截图测评掘金的几款主题。

# ✨ Hydrogen 氢

氢是元素周期表里最靠前的元素，氢气同时也是气体中最轻的，**Hydrogen** 这款主题的设计思想，就是在不做大量的颜色定制的基础上，优化目前掘金文章的阅读体验。具体的设计细节，大家可以看第二部分的评测环节，也可以将 **Hydrogen 氢** 应用于你的文章上看看效果，希望各位看官能喜欢 **Hydrogen** 并用得舒服 😘。

当然这款主题还在不断完善的阶段，各位如果有什么意见，可以直接在掘金上私信我或者在该文章下评论，我会虚心听取各位的建议。

# 🧪 几款掘金主题横向测评

## 文本 ( `h1` ~ `h3` & `p`)

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00d5796f39dc4e08828b8382c588ee3b~tplv-k3u1fbpfcp-watermark.image)

smartblue 和 channing-cyan 关于这块的改动还是非常明显的，特别是对 `h1` 元素的改动，其余主题基本上都是颜色的改动。

**hydrogen** 在这块的改动也比较克制，针对掘金原主题 `h1` 、 `h2` 、 `h3` 只能通过字号辨识的问题，为 `h1` `h2` 增加了一些装饰，让读者能够在阅读的时候，能清晰地感知到各个层级。（`h2`在鼠标悬浮时，左侧的装饰条颜色会变为掘金的主题蓝）

## 链接 ( `a` )

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b66fe2abf81424e8bb6d05895120528~tplv-k3u1fbpfcp-watermark.image)

关于链接元素，这里大家的改动除去颜色外大同小异，挺多采用了下划线来增强阅读效果。

**hydrogen** 为什么会有一个链接图标放在尾部呢？是因为我经常在掘金看到没有文本的链接，只有一条淡淡的下划线表示这里存在一条连接，同时还是希望读者能在第一时间就能识别的链接元素，所以增加了掘金网站里本来就存在的链接图标。下划线也加了一个过渡效果哈。

## 代码 ( `code` )

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d390af2080b411283653285007f7653~tplv-k3u1fbpfcp-watermark.image)

channing-cyan 看上去可能会有些模糊，因为两种颜色的对比度不太够, fancy 去除了背景色。

**hydrogen** 和 cyanosis 都采用了增强对比度的配色方案，这样看上去会更清晰一些。

## 引用 ( `blockquote` )

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc7ebd62938f40aabad1b898f6e6ddbe~tplv-k3u1fbpfcp-watermark.image)

除去颜色改动之外，channing-cyan 增加了半透明的效果，这样嵌套的引用块就能清晰地看到它的边界，问题在于背景的方格线会透到引用块里。smartblue 的配色已经和其主题色不太搭了，cyanosis 的效果看上去最清爽。

**hydrogen** 也使用半透明的背景方案，但是没有方格线的困扰，显得会非常干净，同时控制了它的上下填充也在一个较窄的范围。

## 表格 ( `table` )

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce5827fa6993440593d60f6e051ea58a~tplv-k3u1fbpfcp-watermark.image)

表格是一个不太高频使用的元素，看得出大家对表格元素的适配还不太完善，比如 fancy 和 smartblue 的背景色由于透明，后面的方格线会透到表格里。

**hydrogen**依旧是非常克制的改动，加粗了边框，让大家能够更清晰地分辨它的边界。

## 分割线 ( `hr` )

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79ee7f5a564941068923e6304b12450a~tplv-k3u1fbpfcp-watermark.image)

emmm，大家都是颜色的改动。

**hydrogen** 在这里有一个非常特别的改动(好像还没更新到服务器上，大家可以耐心等待)，加入了我们熟悉的掘金图标，仪式感十足，非常适合在文章末尾或者文章中间插入分割线时使用。

## 展开元素 ( `details` & `summary` )

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7c82a36e15849a08f05316d0cbe8e75~tplv-k3u1fbpfcp-watermark.image)

目前大家都没对这个做出完善，所以没做横向测评，只放了**hydrogen**的效果。

这个非常适合一些面经或者问答类的文章。

大家可以在下方直接看这个效果:

<details>
  <summary>这里是一个问题：System Requirements</summary>
  <p>这里是答案：Requires a computer running an operating system. The computer
  must have some memory and ideally some kind of long-term storage.
  An input device as well as some form of output device is
  recommended.</p>
</details>

# 📰 几款主题整体效果横向对比

## 主题预览

这里先放其余各个主题的整体效果截图，大家可以点击图片放大查看细节。

| juejin                                                                                                                  | github                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b0af50f974f4f3bb301ea3e492f077c~tplv-k3u1fbpfcp-watermark.image) | ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7b79831b44a4fbb9975c05efa2fe9dd~tplv-k3u1fbpfcp-watermark.image) |

| smartblue                                                                                                               | cyanosis                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4017926db6324ff2952ade879d3f15ef~tplv-k3u1fbpfcp-watermark.image) | ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68a17a0250fa48f596e348ee77161987~tplv-k3u1fbpfcp-watermark.image) |

| channing-cyan                                                                                                           | fancy                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d90e7285f272413695cb7b7bd6511a86~tplv-k3u1fbpfcp-watermark.image) | ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f797dfd30ac4e9da1fc7a2b08f23dc4~tplv-k3u1fbpfcp-watermark.image) |

## hydrogen 预览

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a13383d3161a41f69dbbe5bf0778e176~tplv-k3u1fbpfcp-watermark.image)

# 相关文章

1. [掘金编辑器支持 Markdown 主题自定义啦][1]
2. [林小帅 - 手摸手教你开发掘金文章主题][2]
3. [林小帅 - 如何使用掘金文章主题？][3]

喜欢这篇文章的童鞋，请一键三连哈 👍❤️⭐~~

[1]: https://juejin.im/post/6893338717562339335
[2]: https://juejin.im/post/6893360456530919437
[3]: https://juejin.im/post/6894062849431109639

[^官方发文]: https://juejin.im/post/6893338717562339335
