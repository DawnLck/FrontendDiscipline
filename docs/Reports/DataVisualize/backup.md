---
# 主题列表：juejin, github, smartblue, cyanosis, channing-cyan, fancy, hydrogen, condensed-night-purple, greenwillow, v-green, vue-pro, healer-readable, mk-cute, jzman, geek-black, awesome-green, qklhk-chocolate
# 贡献主题：https://github.com/xitu/juejin-markdown-themes
theme: juejin
highlight:
---

> 数据可视化作为一个研究领域，衍生出了许多的可视化研究的课题。该篇作为前端可视化报告的第二篇，主要简述前端在实现数据可视化的时候，各类研究课题方向和相应的难点。
>
> 由于笔者自己的精力有限，需要搜集的资料却有很多，导致自己写着写着部分内容就变成了成果陈列，后面也会继续完善，会有第三篇专门讲横向对比。该篇主要调研的是 AntV 的相关工作，中间也穿插了一些很棒的数据可视化项目，欢迎点击参考文章部分的相关链接访问。

## 1. 数字孪生

喜欢钢铁侠的朋友肯定对第一季主角设计钢铁侠战衣的场景印象深刻，战衣 360 度立体建模，托尼手一挥就能对其做修改，最终得到了强大的钢铁侠一代战衣，其实这个就是很典型的数字孪生的应用场景。

![钢铁侠](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09932a80a9bd4496b333f8ed950213e6~tplv-k3u1fbpfcp-watermark.image)

**数字孪生（DT, Data Twin）**，又译作数字映射或者数字分身。这个概念近几年也一直比较火，被 PD 和设计师们所推崇。首先需要介绍的是，什么是数字孪生？

> Wiki: **数字孪生** 指在信息化平台内模拟物理实体、流程或者系统，类似实体系统在信息化平台中的双胞胎。借助于数字映射，可以在信息化平台上了解物理实体的状态，甚至可以对物理实体里面预定义的接口组件进行控制。

相关的主要论文如下：

![数字孪生 - 论文](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54b68b8dff0e4ad7bb305ec59a190106~tplv-k3u1fbpfcp-watermark.image)

这边也找到了一篇比较新的 [2018 年的综述论文][ieee_0]，其中提及到了数据建模、数据融合等技术。

数字孪生的具体链路可以大致地分为了四个部分：数据采集、数据融合、数据建模和交互映射。

![数字孪生的具体链路](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f04cd1f02154ccca7ad608db5772600~tplv-k3u1fbpfcp-watermark.image)

这里举一个例子，阿里集团下的菜鸟利用了大量的物联网设备（比如 LEMO 手持设备）作为基石，将设备采集到的数据数字化，然后通过模拟仿真来辅助决策，最后实现反馈驱动物理世界进行改造升级。

![菜鸟 - 数字孪生](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9542892df1864cfea6b5ff515c51eca0~tplv-k3u1fbpfcp-watermark.image)

## 2. 图分析与图可视化

图是一种数据结构：实体和关系的集合。而什么是图可视化，就是把图数据结构直观地展示给用户的手段，辅助用户分析复杂的关系型数据。

关于图的起源、图的典型应用场景、图的主要问题和挑战等内容，可以看一下这篇[《AntV - 2019 - 十吾 - Hello World 图可视化》][shiwu_graph]。

### 2.1 图的分析洞察

此处 @ G6-Graphin，我关注得比较多的是自动布局这个事情，非常有趣且有用。

![@G6-Graphin](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2f01b386ef5c4e38920f68517b5987c5~tplv-k3u1fbpfcp-zoom-1.image)

### 2.2 大规模数据的图可视化

对 G6 的性能测试，用来验证 G6 能够承载的数据量，G6 团队分别使用 5000+ 图元、将近 20000 图元及 50000+ 图元的示例进行了测试（默认布局、无 FitView）。
从结果来看，20000 左右图元时，G6 是可以正常交互的，当数据量达到 50000+ 时，交互就会出现一定的卡顿，但对于绝大部分业务来说，都不建议在画布上展示如此多的数据。

![G6 - 20000](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b30946b50b094265beded529492cbb2a~tplv-k3u1fbpfcp-watermark.image)

上图展示了 G6 在 20000 个图元下的效果，看上去有点像是菌群，关系紧密的节点围绕成簇。

那么如果需要力导向的布局呢，在不考虑节点可交互的情况下，G6(4.0+)利用 GPU 并行计算，推出了 gforce 和 fruchterman 两种布局，最多绘制过 5500w+ 的节点，下面两张表格对比了两个算法在不同数据规模、不同算法下 GPU 与 CPU 的计算时间：

![G6 - Gforce](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f4ba805127243ff97ab4edc7d58b429~tplv-k3u1fbpfcp-watermark.image)

### 2.3 三维立体的图可视化

G6 完成的大多数可视化成果，都是在二维平面上，利用 Canvas 进行绘图，下图是基于 G6 Graphin 完成的 Graph Studio，给出的示例数据集包含百来个节点，为了减少图的视觉混论，提供了多种布局的切换分析，如圆形布局、有向分层、径向布局等。

![Graph - Studio](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/182506e2a21e45cc921ad11410a1756c~tplv-k3u1fbpfcp-zoom-1.image)

但是如果遇到了数据量更为庞大、关系更加复杂的图应用场景，除了借助 Graphin 这样的工具切换布局从而减少图的视觉混乱之外，还有没有其他的解决方案？答案可能是基于 WebGL 技术的三维立体图可视化。

阿里数据的某个团队在这个方向上给出了这样的一份答卷：

![三维图可视化](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dba9a935d32b4b9f9132edd4bee1b58a~tplv-k3u1fbpfcp-zoom-1.image)

以前我自己也有类似的一些想法，但是距离做出来还有很远很远的距离，现在看到这种完善的三维拓扑图可视化效果，备受冲击 Orz。因为是三维的图可视化视图，所以以前很多在平面上遇到的大规模图可视化分析难点，比如视图混乱、关系密杂、海量节点数等问题，在这里都有了相对的解决方案。

![3d - explore - graph](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0c43ec9dce045b0a0255d7b9c016f9f~tplv-k3u1fbpfcp-watermark.image)

点的权重通过不同的图形和体积加以区分，同时还能够呈现出在视图中，点和点之间的层次关系，而大量的叶子节点也被隐含在主体节点圈的下方，显得整个视图非常干净通透。

![3d - explore - more](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ccfd74c32294b128c4402d2b7083ca5~tplv-k3u1fbpfcp-watermark.image)

在图的布局上面，该团队延展出三维的“视角”，各个视觉所要呈现出的数据含义各不相同，这一块我也相信会有更大的探索空间。

更多的信息可以在文章最下方的参考文章中找到对应的链接，一窥整个作品的魅力。

这里不是说所有可视化都需要在三维空间中呈现，可视化的最终目的是帮助用户更好更快地理解数据，三维空间相比二维平面而言，数据的维度上多了一层，这对于用户的快速理解是有碍的，有一些简单的数据集，用二维平面的效果结合数据清洗和聚合的手段，可视化的效果会更好。

而合理的三维可视化方案，也能减少如在大规模数据集下，二维平面可视化中的视觉混淆感。所以用或者不用三维，取决于真实的业务场景是什么样的。

### 2.4 图可视化解决方案

![G6 - application](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15e5c16c5d774d2c9a53c7c59c8e6518~tplv-k3u1fbpfcp-watermark.image)

![G6 - more](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b36ea302829401287cb3801ef13f99c~tplv-k3u1fbpfcp-watermark.image)

第一张图展示了 G6 面向顶层的应用，如何设计自己的技术流程和前端解法。

第二张图展示了 G6 团队，目前理想的图可视化能力大图。

相信大家也看到了 2020 年 11 月， [G6 Graphin 首页][antv_g6_graphin]的 **图可视分析解决方案白皮书**，还没有看的赶紧下载下来瞧一瞧吧。这份白皮书包含了六个部分，如下图所示:

![Graphin - 白皮书](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fcabb3083ff34ead892fc4690fc5ccc9~tplv-k3u1fbpfcp-watermark.image)

## 3. 地理信息数据可视化

1. Uber - kepler

   ![Uber - kepler](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2737594c56124ce7b47a6e404ffdebc2~tplv-k3u1fbpfcp-watermark.image)

   Uber 的开普勒项目对地理信息可视化做了七种基础分类，如下，分别是：Arc \ Line \ Hexgon \ Point \ HeatMap \ GeoJSON \ Buildings

2. 百度度小满 - Buildings

   ![Duxiaoman](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a972743611b4deaabafad8a059ac2a3~tplv-k3u1fbpfcp-zoom-1.image)

   上图的这个作品对应的分类是 Buildings，目前流出的只有设计稿，猜测是百度的度小满团队在做，不知道完成度如何，大致推断应该是先利用 C4D 等工具先完成城市建模，再在此基础上完成的地理信息数据可视化平台。

3. 阿里 - DataV

   ![DataV - 杭州城市学区数据可视化](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e28bbfd4a6c547e28c0f935a92b8db70~tplv-k3u1fbpfcp-watermark.image)

   DataV 着重于实现用户能交互的数据大屏，地理信息数据可视化是非常好的大屏实现方向之一，上图展示了它的一个 demo 项目 —— 杭州市的学区分析视图。

   用户点击地图中的某个学校图标之后，左下角的学校详情内容会立即切换成这个学校的对应内容。

## 4. 第四个维度 - 时间

时间是一个奇妙的维度，它让一滩死水的数据拥有了灵性。

这里指得不是把时间当成一个静态的维度，而是通过时间来控制图的变化，达到类似动画播放的效果，本质上是让一个静态的图表变成了动态可视化的呈现。

下图是一个典型的竞速图，大家也经常在 GDP 发展、疫情数据总结里见到过这种类型的动态柱状图。

![动态柱状图](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8520cbb54ef64a22bba8f35156c4cee4~tplv-k3u1fbpfcp-zoom-1.image)

G6 在去年的组件设计里，新增了一个时序组件：[TimeBar](https://g6.antv.vision/zh/docs/design/component/timebar), 目前提供了三种类型：趋势图、简版以及时间刻度。实测在使用中，会出现滑块溢出边界或者到不了边界的情况，组件应该还处于一个完善的阶段。

![G6 - timebar](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61dc8e099f5b4a109be2dd9b6150fac4~tplv-k3u1fbpfcp-watermark.image)

![G6 - timebar - design](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6e36f7051f74dada86861ebe0b7c0ec~tplv-k3u1fbpfcp-watermark.image)

## 5. 单元数据可视化

数据的每一项被我们称为 `数据单元(DataUnit)` 或者数据项 `(DataItem)`。

`identity(id)`是数据单元的唯一标识，为每一个数据单元维护该属性可能会导致大型数据集的`视觉混乱`。

为了解决这个问题，许多可视化技术都是基于数据抽象的，比如**聚合**、**分割**或**过滤**。这些抽象的或聚合的可视化技术没有在数据项和可视标记之间保持绝对的一对一映射，而是将多个数据项合并到不再可以分离的可视聚合中，并且标识属性因此不存在，聚合可视化的示例有条形图、柱状图和直方图。

单元可视化的优势:

1. 感知：维护标识，允许用户在动画转换和交互期间跟踪数据单元
2. 物理：提供了物理转化和构建视图的独特方式
3. 交互：用户可以获得每个单独的数据项的详细信息，同时也支持一些过滤操作

单元可视化的弱点：

1. 计算可伸缩性：内存、计算和渲染性能会是限制因素
2. 显示可伸缩性：只有能够区分数据单元的视图，单元可视化才有价值，所有对显示屏幕的像素数或者分辨率也有要求
3. 感知可伸缩性（视觉杂波）： 极少量的数据集并不适用于单元可视化，用聚合可视化（如堆叠条形图）可能效果更好

在单元可视化中，同样涉及到可视化语法的概念，这种基于语法的可视化方法的抽象，使人们对图形的思考、推理和交流更加容易。关于图形语法，可以参考这篇微软和蚂蚁都推荐的起源文：Wilkinson's 《The Grammar of Graphics》

### 5.1 微软 - SandDance

SandDance 是微软研究院于 2016 年推出的数据可视化免费 Web 应用，由微软研究院的可视化和交互式数据分析（VIDA）小组创建，该小组专注于以人为中心的数据处理方法，探索数据可视化、沉浸式分析和对机器学习模型的理解等领域。

![微软 - SandDance](https://user-images.githubusercontent.com/11507384/54236654-52d42800-44d1-11e9-859e-6c5d297a46d2.gif)

### 5.2 Tableau 作品

![Tableau](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83fe8fde83794ae6ad59d7f2d5399589~tplv-k3u1fbpfcp-watermark.image)

### 5.3 相关论文

1. [2018 - Atom: A Grammar for Unit Visualizations](https://www.microsoft.com/en-us/research/uploads/prod/2019/01/atom.pdf)

   - Deokgun Park, Steven Drucker, Roland Fernandez, Niklas Elmqvist
   - IEEE Transactions on Visualization and Computer Graphics | December 2018, Vol 24(12): pp. 3032-3043

2. [2015 - A Unifying Framework for Animated and Interactive Unit Visualizations](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/sanddance.pdf)

   - Steven Drucker, Roland Fernandez
   - MSR-TR-2015-65 | August 2015
   - Articles & videos

## 6. 图表制作工具

### 6.1 AntV - ChartCube 图表魔方

![AntV - ChartCube](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d48c99fc5cb44e9a708b661dbef8033~tplv-k3u1fbpfcp-watermark.image)

## 7. AI 辅助可视化

目前 AI 的方向主要有两块，一是智能图表推荐（偏向决策机），一是 D2C（偏向图形算法），下文也会从这两个角度介绍。

### 7.1 自动可视化框架（图表参谋 / 图表智能化推荐）

#### 7.1.1 AntV - AVA

> AVA 是为了更简便的可视分析而生的技术框架。 VA 代表可视分析（Visual Analytics），而第一个 A 具有多重涵义：其目标是成为一个自动化（Automated）、智能驱动（AI driven）、支持增强分析（Augmented）的可视分析解决方案。

> 只需要准备一个有效的数据集，写一个 API 调用，剩下的一切调整都能通过可视化 UI 去完成。

下图展示了 AVA 的设计思路

![AntV - AVA](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e705d66900c469698c47b0ffaa18ba4~tplv-k3u1fbpfcp-watermark.image)

AVA 的关键能力，就是**推荐规则**，从一个核心，衍生出了`智能图表`、`一键图标优化`、`图表大词典`等功能。

（笔者一开始真的以为是通过标注好的样本训练集，训练多层神经网络分类器，训练好后输入真实数据 RealDataset，通过分类器得到匹配度，这样就能选择最适合的图表类型，结果发现 AVA 的推荐器实现思路是维护知识图谱和规则表...）

![AntV - 推荐规则](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7af6598e32cf4741890cbcea1e9f3e6c~tplv-k3u1fbpfcp-watermark.image)

![AntV - 推荐规则 - 2](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bfce19721be147c19bd71a966c7270f9~tplv-k3u1fbpfcp-watermark.image)

![AntV - 推荐规则 - advisor](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b68ed5ed54f4e9b950f56f9e8832f48~tplv-k3u1fbpfcp-watermark.image)

下面展示了两组 demo，一组是 AVA 的**智能推荐**列表，另一组是 AVA 的**智能图表生成**。

![AntV - AVA](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/812e5d51a6d448ae9204d22262fec5b6~tplv-k3u1fbpfcp-watermark.image)

![AntV - AVA - Demo](https://camo.githubusercontent.com/f6c20a78b27fda30f369c050deae3e5c17cb6345b399c67c8993f7648f28203f/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f616e7466696e63646e2f51544a5059584a706a572f61766164656d6f2e676966)

### 7.2 设计稿生成可视化

#### 7.2.1 DataV - D2C - LADV

![LADV - 1](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/340d5c5884ce4d339090921b0b8a75c6~tplv-k3u1fbpfcp-watermark.image)

![LADV - 2](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aef4389cfa184f05af6e0fbf9497b4e4~tplv-k3u1fbpfcp-watermark.image)

![LADV - 3](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca6e3b6435454c968b58c2713cc3fc5a~tplv-k3u1fbpfcp-watermark.image)

在设计稿生成可视化方向中，AI 承担了识别设计稿上的图表元素，完成快速图表视图搭建的功能。

![LADV](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bebf8ce0f0f64c89bc53f18af7c919c5~tplv-k3u1fbpfcp-watermark.image)

从模型设计图看出，完成对设计稿上目标识别的主要核心部分是 [**Faster R-CNN（Region-CNN）**](https://pubmed.ncbi.nlm.nih.gov/27295650/)。

LADV 的团队还做了另一个功能，接受一张风格图片作为另一个输入，从风格图提取色彩搭配，其中主色提取的部分采用了 DBSCAN 密度聚类算法。

![LADV - 色彩提取](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af83795d4f4441d988f4d1928897f644~tplv-k3u1fbpfcp-watermark.image)

## 8. 数据大屏 和 BI 赋能

严格意义上来讲，无论是数据大屏或者是 BI 报表，都属于数据可视化的应用，在这里也只做一个简单的概述。

### 8.1 蚂蚁金服 - DeepInsight

> 大数据时代，由数据驱动的用户行为分析、运营分析、业务分析无疑是最被关注的“热词”，尤其对于拥有海量数据的大中型企业来说，对数据的需求已远远超越了传统数据报表所能提供的范畴。如何运用自助式 BI 实现当代企业精细化运营，已成为企业运营管理的新课题。
>
> BI（商业智能，Business Intelligence）。它是一套完整的解决方案，通过企业中现有的数据进行有效地搜集、清洗、整合、挖掘和分析，快速提供报表并提出预测和辅助决策依据，帮助管理者做出经营决策。

相关文章和资源：

1.  [DeepInsight 的产品首页](https://tech.antfin.com/products/DAP)
2.  [DeepInsight 的使用体验视频](https://v.qq.com/x/page/m0778wsupo4.html)
3.  [SEEConf - 2020 - 精雕细琢，打造极致可视化图表体验](https://www.yuque.com/seeconf/2020/ysufx8)

**DeepInsight** 是蚂蚁金服自主研发的专注于大数据的 **数据洞察分析平台** ，主要面向企业分析人员、业务人员、开发人员，为企业提供数据驱动业务发展的下一代 BI 工具，包括可视化图表、智能分析组件，支持二次开发，业务构建分析平台更灵活，让数据能在企业中快速流转，通过报告和报表帮助业务快速发现问题和定位原因，发挥数据更大的价值。

下图展示了 DeepInsight 的使用截图，感兴趣的同学也可以看 [这个视频](https://v.qq.com/x/page/m0778wsupo4.html)。

![DeepInsight](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86ce3f4d16284a6099ef54c2b1a80876~tplv-k3u1fbpfcp-watermark.image)

DeepInsight 是如何完成报表分析的呢，大致上分成三个步骤：

1. 连接数据

   为了让数据洞察分析平台分析您的数据，首先需要建立 数据洞察分析平台与数据的连接。数据源支持 ODPS、MySQL、Explorer、HybridDB 等数据库。

2. 分析数据

   数据连接后，创建工作簿，制作包含表格的简单报表，并添加可交互的筛选器进行数据分析，获取可执行的洞见。

3. 共享和发布

   最终作品可以共享给指定用户访问，或者发布到固定门户供所有用户查看。

![DeepInsight - 工作流](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8457dec35b24486a35684e3870db5b8~tplv-k3u1fbpfcp-watermark.image)

### 8.2 阿里云 - DataV

> DataV 数据可视化是使用可视化应用的方式来分析并展示庞杂数据的产品。DataV 旨让更多的人看到数据可视化的魅力，帮助非专业的工程师通过图形化的界面轻松搭建专业水准的可视化应用，满足您会议展览、业务监控、风险预警、地理信息分析等多种业务的展示需求。

DataV 是阿里云旗下的一个提供专业数据可视化大屏的产品。不仅是阿里云，每个云平台也都会有这样的产品提供给 C 端或者 B 端的用户，这种数据大屏由于十分瞩目和酷炫，在商家和政企的用户里就非常受欢迎。最具有影响力的应用之一，就是每年双十一晚会的数据大屏项目。

![DataV - 基础图表](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb87df10b96345cd9cf09ecec5aa75c5~tplv-k3u1fbpfcp-watermark.image)

![DataV - 编辑器 - 模板](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/37c9c8208ca644169bde8c6bf1648106~tplv-k3u1fbpfcp-watermark.image)

![DataV - 编辑器 - 界面](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e81f1ba9e4b4d0198c415fd1a816a73~tplv-k3u1fbpfcp-zoom-1.image)

## 9. 企业数据可视化解决方案

AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。从下图中可以看到整个 AntV 的架构，包含绘图引擎、通用、框架、中间件及应用。

![AntV - 企业级智能数据可视化解决方案](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88addedd0a6b4a23871457eb8fb097d9~tplv-k3u1fbpfcp-watermark.image)

将上述的框架图的底层部分进行拆解，得到以下的一张流程图：

![AntV - 可视化语义系统](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/575d6d17a49c4fcd8eda885c8f53c405~tplv-k3u1fbpfcp-watermark.image)

## 10. 其他方向

1. 多屏多端

![DataV - 多屏多端](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76c4ff8bb3b044608c28e2857bb0826a~tplv-k3u1fbpfcp-watermark.image)

2. 城市建模 -> 城市数字孪生 -> 智慧社区/智慧城市

![DataV - 三维城市数字孪生体系](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45d4a870a0e840b3b65366c44469e63d~tplv-k3u1fbpfcp-watermark.image)

## 参考文章

1. 该篇文章中引用了一些前端早早聊上的讲师资料，此处不一一列举，也欢迎各位关注这个会议。
2. [《知乎 - 2020 - 数字孪生在物流行业的应用》][zhihu_dig_mirror]
3. [《IEEE - 2018 - F. Tao, H. Zhang, A. Liu and A. Y. C. Nee, "Digital Twin in Industry: State-of-the-Art," in IEEE Transactions on Industrial Informatics, vol. 15, no. 4, pp. 2405-2415, April 2019, doi: 10.1109/TII.2018.2873186.》][ieee_0]
4. [wiki - 2020 - 数字孪生][wiki_dt]
5. [机器之心 - 2020 - 数字孪生][mh_dt]
6. [《AntV - 2019 - 十吾 - Hello World 图可视化》][shiwu_graph]
7. [《站酷 - 2020 - 数据之美：值与关联数据可视化》][zhanku_graph]
8. [《G6 - Components - Timebar》][g6_timebar]
9. [《AntV - 2020 - Ant Design 4.0 来了！第三届 SEE Conf 都讲了什么？》][seeconf3]
10. [《AntV - AVA - 2020 - 欢迎进入 2020 数据可视化智能研发时代》][ava2020]
11. [《AntV - AVA - 2020 - AVA 1.0 你的图表参谋》][ava202001]
12. [《AntV - AVA - 2020 - PPT - 可视化智能研发流程 AVA》][avappt]
13. [Tableau - 2020 - 为什么选择 tableau][tableau]
14. [视频 - 2018 - AntV，返璞归真幻化万千可视化表达 — 绝云 & 御术][antv_forall]
15. [《DeepInsight - 2018 - 蚂蚁金服数据洞察分析平台 DeepInsight：人人都是数据分析师》][deepinsight]
16. [《DataV - 什么是 DataV 数据可视化》][datav]

[zhihu_dig_mirror]: https://zhuanlan.zhihu.com/p/125733253
[ieee_0]: https://ieeexplore.ieee.org/abstract/document/8477101/authors#authors
[wiki_dt]: https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%97%E6%98%A0%E5%B0%84
[mh_dt]: https://www.jiqizhixin.com/graph/technologies/5413ecf7-c9e7-44c0-8fc0-7eb0ddfb7676
[antv_g6_graphin]: https://graphin.antv.vision/zh
[shiwu_graph]: https://zhuanlan.zhihu.com/p/83685690
[zhanku_graph]: https://www.zcool.com.cn/work/ZMzg4OTQ5ODQ=.html
[g6_timebar]: https://g6.antv.vision/zh/docs/design/component/timebar#%E6%9E%84%E6%88%90%E5%85%83%E7%B4%A0
[seeconf3]: https://juejin.cn/post/6844904038698319879
[ava2020]: https://www.yuque.com/antv/blog/ygdubv
[ava202001]: https://www.yuque.com/antv/blog/2020ava
[avappt]: https://tool.lu/ja_JP/deck/jI/detail?slide=35
[tableau]: https://www.tableau.com/zh-cn/why-tableau/what-is-tableau#video
[antv_forall]: https://v.youku.com/v_show/id_XMzMwNDMwMjcxNg==.html
[deepinsight]: https://developer.aliyun.com/article/638786
[datav]: https://help.aliyun.com/document_detail/30360.html?spm=a2c4g.11186623.6.544.51be67786UIhKL
