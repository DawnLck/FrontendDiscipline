# Dawnlck - 前端数据可视化小报告 - 02 - 研究课题

更新于 2021 - 01 - 08 ...

> 和可视化搭建这种应用型的注重架构不太一样，数据可视化作为一个研究领域，衍生出了许多的可视化研究的课题，该篇作为前端可视化报告的第二篇，主要简述前端数据可视化的各类技术方向和相应的难点。每一个点后面都有大量的研究工作，笔者也没有办法在一篇的篇幅内，形成具有一定深度的技术挖掘，只能概览一下大体的几个发展路线。

## 1. 数字孪生

喜欢钢铁侠的朋友肯定对第一季主角设计钢铁侠战衣的场景印象深刻，战衣 360 度立体建模，托尼手一挥就能对其做修改，最终得到了强大的钢铁侠一代战衣，其实这个就是很典型的数字孪生的应用场景。

![钢铁侠](img/DataVisulize.02.23-07-26.png)

**数字孪生（DT, Data Twin）**，又译作数字映射或者数字分身。这个概念近几年也一直比较火，被 PD 和设计师们所推崇。首先需要介绍的是，什么是数字孪生？

> Wiki: **数字孪生** 指在信息化平台内模拟物理实体、流程或者系统，类似实体系统在信息化平台中的双胞胎。借助于数字映射，可以在信息化平台上了解物理实体的状态，甚至可以对物理实体里面预定义的接口组件进行控制。

简单地理解，数字孪生听上去很高端，做的就是把实体数字化呈现的事情。

相关的主要论文如下：

![数字孪生 - 论文](img/DataVisulize.02.22-38-57.png)

这边也找到了一篇比较新的 2018 年的综述论文，感兴趣的可以在最下方的参考链接中查看，其中提及到了数据建模、数据融合等技术。

那么数字孪生的具体链路是什么呢？我将其大致地分为了四个部分：数据采集、数据融合、数据建模和交互映射。

![数字孪生的具体链路](img/DataVisulize.02.23-05-09.png)

菜鸟在数字孪生领域的探索是领先的，它利用大量的物联网设备（比如 LEMO）作为基石，将设备采集到的数据数字化，然后通过模拟仿真来辅助决策，最后实现反馈驱动物理世界进行改造升级。

![菜鸟 - 数字孪生](img/DataVisulize.02.23-21-29.png)

## 2. 图分析与图可视化

图是一种数据结构：实体和关系的集合。而什么是图可视化，就是把图数据结构直观地展示给用户的手段，辅助用户分析复杂的关系型数据。

关于图的起源、图的典型应用场景、图的主要问题和挑战等内容，可以看一下这篇[《AntV - 2019 - 十吾 - Hello World 图可视化》][shiwu_graph]。

### 2.1 图的分析洞察

此处 @ G6-Graphin，我关注得比较多的是自动布局这个事情，非常有趣且有用。

![@G6-Graphin](./img/G6_graphin.gif)

### 2.2 大规模数据的图可视化

对 G6 的性能测试，用来验证 G6 能够承载的数据量，G6 团队分别使用 5000+ 图元、将近 20000 图元及 50000+ 图元的示例进行了测试（默认布局、无 FitView）。
从结果来看，20000 左右图元时，G6 是可以正常交互的，当数据量达到 50000+ 时，交互就会出现一定的卡顿，但对于绝大部分业务来说，都不建议在画布上展示如此多的数据。

![G6 - 20000](img/DataVisulize.02.22-42-09.png)

上图展示了 G6 在 20000 个图元下的效果，看上去有点像是菌群，关系紧密的节点围绕成簇。

那么如果需要力导向的布局呢，在不考虑节点可交互的情况下，G6(4.0+)利用 GPU 并行计算，推出了 gforce 和 fruchterman 两种布局，最多绘制过 5500w+ 的节点，下面两张表格对比了两个算法在不同数据规模、不同算法下 GPU 与 CPU 的计算时间：

![G6 - GForce](img/DataVisulize.02.23-02-54.png)

### 2.3 三维立体的图可视化

G6 完成的大多数可视化成果，都是在二维平面上，利用 Canvas 进行绘图，下图是基于 G6 Graphin 完成的 Graph Studio，给出的示例数据集包含百来个节点，为了减少图的视觉混论，提供了多种布局的切换分析，如圆形布局、有向分层、径向布局等。

[Graph - Studio](img/GraphStudio.gif)

但是如果遇到了数据量更为庞大、关系更加复杂的图应用场景，除了借助 Graphin 这样的工具切换布局从而减少图的视觉混乱之外，还有没有其他的解决方案？答案可能是基于 WebGL 技术的三维立体图可视化。

阿里数据的某个团队在这个方向上给出了这样的一份答卷：

![三维图可视化](img/3d_graph.gif)

以前我自己也有类似的一些想法，但是距离做出来还有很远很远的距离，现在看到这种完善的三维拓扑图可视化效果，备受冲击 Orz。因为是三维的图可视化视图，所以以前很多在平面上遇到的大规模图可视化分析难点，比如视图混乱、关系密杂、海量节点数等问题，在这里都有了相对的解决方案。

![Exploer - graph](img/DataVisulize.02.13-49-15.png)

点的权重通过不同的图形和体积加以区分，同时还能够呈现出在视图中，点和点之间的层次关系，而大量的叶子节点也被隐含在主体节点圈的下方，显得整个视图非常干净通透。

![Exploer - more](img/DataVisulize.02.13-54-41.png)

在图的布局上面，该团队延展出三维的“视角”，各个视觉所要呈现出的数据含义各不相同，这一块我也相信会有更大的探索空间。

更多的信息可以在文章最下方的参考文章中找到对应的链接，一窥整个作品的魅力。

这里不是说所有可视化都需要在三维空间中呈现，可视化的最终目的是帮助用户更好更快地理解数据，三维空间相比二维平面而言，数据的维度上多了一层，这对于用户的快速理解是有碍的，有一些简单的数据集，用二维平面的效果结合数据清洗和聚合的手段，可视化的效果会更好。

而合理的三维可视化方案，也能减少如在大规模数据集下，二维平面可视化中的视觉混淆感。所以用或者不用三维，取决于真实的业务场景是什么样的。

### 2.4 图可视化解决方案

![G6 - application](img/DataVisulize.02.14-39-09.png)

![G6 - dream](img/DataVisulize.02.14-40-54.png)

第一张图展示了 G6 面向顶层的应用，如何设计自己的技术流程和前端解法。

第二张图展示了 G6 团队，目前理想的图可视化能力大图。

相信大家也看到了 2020 年 11 月， [G6 Graphin 首页][antv_g6_graphin]的 **图可视分析解决方案白皮书**，还没有看的赶紧下载下来瞧一瞧吧。这份白皮书包含了六个部分:

1. AntV 图可视化解决方案
2. 图可视化解决方案 - 云安全
3. 图可视化解决方案 - 知识图谱
4. 图可视化解决方案 - 企业风控
5. 图可视化解决方案 - 图数据库
6. 图可视化解决方案 - 性能优化

![图可视分析解决方案白皮书](img/DataVisulize.02.23-30-28.png)

## 3. 地理信息数据可视化

![Uber - kepler](img/DataVisulize.02.14-02-33.png)

Uber 的开普勒项目对地理信息可视化做了七种基础分类，如下，分别是：Arc \ Line \ Hexgon \ Point \ HeatMap \ GeoJSON \ Buildings

![Duxiaoman](img/DataVisulize.02.14-13-57.png)

上图的这个作品对应的分类是 Buildings，目前流出的只有设计稿，猜测是百度的度小满团队在做，不知道完成度如何，大致推断应该是先利用 C4D 等工具先完成城市建模，再在此基础上完成的地理信息数据可视化平台。

## 4. 第四个维度 - 时间

时间是一个奇妙的维度，它让一滩死水的数据拥有了灵性。

这里指得不是把时间当成一个静态的维度，而是通过时间来控制图的变化，达到类似动画播放的效果，本质上是让一个静态的图表变成了动态可视化的呈现。

下图是一个典型的时间的应用，大家也经常在疫情数据总结里见到过这种类型的柱状图，引入时间维度后形成了动态的柱状图。

![动态柱状图](img/time_bar.gif)

G6 在去年的组件设计里，新增了一个时序组件：[TimeBar](https://g6.antv.vision/zh/docs/design/component/timebar), 目前提供了三种类型：趋势图、简版以及时间刻度。实测在使用中，会出现滑块溢出边界或者到不了边界的情况，组件应该还处于一个完善的阶段。

![G6-timebar](img/G6-timebar.gif)

![G6_Timebar_design](img/DataVisulize.02.14-20-57.png)

## 5. 单元数据可视化

### 5.1 微软 - SandDance

SandDance 是微软研究院于 2016 年推出的数据可视化免费 Web 应用，由微软研究院的可视化和交互式数据分析（VIDA）小组创建，该小组专注于以人为中心的数据处理方法，探索数据可视化、沉浸式分析和对机器学习模型的理解等领域。

![微软 - SandDance](img/SandDance.gif)

### 5.2 相关论文

1. [2018 - Atom: A Grammar for Unit Visualizations](https://www.microsoft.com/en-us/research/uploads/prod/2019/01/atom.pdf)

   - Deokgun Park, Steven Drucker, Roland Fernandez, Niklas Elmqvist
   - IEEE Transactions on Visualization and Computer Graphics | December 2018, Vol 24(12): pp. 3032-3043

2. [2015 - A Unifying Framework for Animated and Interactive Unit Visualizations](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/sanddance.pdf)

   - Steven Drucker, Roland Fernandez
   - MSR-TR-2015-65 | August 2015
   - Articles & videos

## 6. 主题待定（Story Telling?）

## 7. 数据的视图切换

> 待补充

AntV - AVA

## 8. 机器学习、人工智能的应用

> 待补充

人工智能如何辅助数据可视化搭建

DataV 团队 - D2C - 基于机器视觉来识别设计稿

## 9. 数据大屏 和 BI 赋能

严格意义上来讲，无论是数据大屏或者是 BI 报表，都属于数据可视化的应用，在这里也只做一个简单的概述。

> 待补充

如何快速搭建一个 BI 可视化分析决策页面...

## 参考文章

该篇文章中引用了一些前端早早聊上的讲师资料，此处不一一列举，也欢迎各位关注这个会议。

[《知乎 - 2020 - 数字孪生在物流行业的应用》][zhihu_dig_mirror]

[《IEEE - 2018 - F. Tao, H. Zhang, A. Liu and A. Y. C. Nee, "Digital Twin in Industry: State-of-the-Art," in IEEE Transactions on Industrial Informatics, vol. 15, no. 4, pp. 2405-2415, April 2019, doi: 10.1109/TII.2018.2873186.》][ieee_0]

[wiki - 2020 - 数字孪生][wiki_dt]

[机器之心 - 2020 - 数字孪生][mh_dt]

[《AntV - 2019 - 十吾 - Hello World 图可视化》][shiwu_graph]

[《站酷 - 2020 - 数据之美：值与关联数据可视化》][zhanku_graph]

[《G6 - Components - Timebar》][g6_timebar]

[zhihu_dig_mirror]: https://zhuanlan.zhihu.com/p/125733253
[ieee_0]: https://ieeexplore.ieee.org/abstract/document/8477101/authors#authors
[wiki_dt]: https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%97%E6%98%A0%E5%B0%84
[mh_dt]: https://www.jiqizhixin.com/graph/technologies/5413ecf7-c9e7-44c0-8fc0-7eb0ddfb7676
[antv_g6_graphin]: https://graphin.antv.vision/zh
[shiwu_graph]: https://zhuanlan.zhihu.com/p/83685690
[zhanku_graph]: https://www.zcool.com.cn/work/ZMzg4OTQ5ODQ=.html
[g6_timebar]: https://g6.antv.vision/zh/docs/design/component/timebar#%E6%9E%84%E6%88%90%E5%85%83%E7%B4%A0