# Dawnlck - 前端数据可视化小报告 - 01 - 背景调研

> Last Modified: 2021/1/8

## 前言

在上一次对可视化搭建进行分析研究后，对**数据可视化**也很感兴趣的笔者，就着手开始做数据可视化相关的一份小报告了。本次小报告因为篇幅的考虑，也分成了三块：01 背景调研 - 02 研究课题 - 03 业内成果陈列，此篇是第一部分，会从四个维度（What、Who、Why、How）来介绍前端数据可视化。

## What 数据可视化是什么？

在我们的真实世界里，数据无所不在。当我们用文字、图形、阿拉伯数字去试着表达我们接受到的数据，其实就是在完成一次数据可视化。

**数据可视化** 是利用人眼感知能力对数据进行的可视表达，以帮助用户`认识数据`、`洞察数据`、`理解数据`、`使用数据`的技术。

**数据可视化** 是创造性的设计美学、缜密的数据算法和严谨的工程技术结合的产物，用形象、有趣的形式呈现沉闷繁杂的数据。

> 早在 300 年前折线图、柱形图、饼图被发明，时至今日有了纷繁多样的数据可视化表现形态，而生产方式也从原始手绘到今天可以通过代码、工具自动生成，数据可视化领域跟过去相比已经有了翻天覆地的变化，特别是最近 10 年，随着 D3（D3: Data-Driven Documents IEEE InfoVis 2011） 以及大量统计图表类库和工具出现，让数据可视化设计和生产门槛大幅降低。

![数据可视化 - 历程](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ddd46a3c9404844b006f07465ea7c08~tplv-k3u1fbpfcp-watermark.image)

那么数据可视化涉及了哪些知识学科呢 📖？

![数据可视化 - 知识学科](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d46199cf98f41e79b6ad6e6c3e07d6d~tplv-k3u1fbpfcp-watermark.image)

## Who 面向的用户是谁

可以是**开发者**、**设计师**、**产品经理**、**BI 分析师**，也可以是 **C 端的消费者**、**企业客户**等等，数据流动至何处，与什么样的角色相接触，**数据可视化** 面向的用户就是谁。

## Why 为什么需要数据可视化

数据的可视化旨在帮助用户更好更快地理解数据背后的含义，它的作用有很多，以下列举了一小部分。

1. 数据洞察和分析
2. 辅助业务决策和业务提效
3. ....（此处有一千个哈姆雷特）

## How 如何实现各类数据的可视化

首先，关于图形学和数学的相关知识，比如贝塞尔曲线、椭圆参数方程、仿射变化等，在这篇文章中[《掘金 - 2020 - 带你一起走进前端图形学》][juejin-02]有所提及

在开发中，我们都知道由二十多种设计模式，在数据可视化中当然也存在着不同的数据可视化手段，分别对应着不同的数据场景。

比如我们大家常见的柱状图和饼图，两种都适合二维的数据集，也都是能够反应数据的差异，前者利用高度差，后者利用面积差。对于差异并不明显的数据集，建议使用柱状图，因为人眼对面积的细微差异并不敏感，但是对于数据项较少的数据场景，比如部分和其他的比重占比差异，饼图更具有优势。

所以，对图表的分类，以及使用规范的制定，都是很重要的。

![Bar Or Pie](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bfb114cd4e4f4a5fb363911a7d5c97d1~tplv-k3u1fbpfcp-watermark.image)

这里先简单引一下 **AntV** 对图表类型的九种分类，具体的每种分类对应了不同的子类和具体使用的差别。

![AntV - 图表分类](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72f573a0765e4b58939bc6d78116633f~tplv-k3u1fbpfcp-watermark.image)

想了解更多，可以在[《AntV - 2018 - 图表分类》][antv_charts_classify]中看到有详细的说明，这边只取了其中的 **比较类** 的页面，作为一个例子作为说明。

![AntV - 图表分类 -  比较类](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b02f47599e824dc8918456f9ff0675a1~tplv-k3u1fbpfcp-watermark.image)

那么对于这些图表，我们有什么可行的绘制手段吗，或者说浏览器的渲染引擎绘制图形有哪几种方式？如下图所示，针对二维的图表类型，我们有 DOM 、Canva、SVG 的实现方式，针对三维的立体数据可视化模型，则由 WebGL 进行支撑。

![Browser - 绘制方法](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ebf97fbbe2af4cbfb275d55fe0ca830d~tplv-k3u1fbpfcp-watermark.image)

## Case 一些经典的小例子 🌰

1. 四组数据的可视化

   ![四组二维数据的可视化](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf861fdb736d48be9f175b2a2cb69db2~tplv-k3u1fbpfcp-watermark.image)

2. 鸢尾花数据集可视化

   ![iris - dataset](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6172a4fec7bb451eaebb3ad9478bdac8~tplv-k3u1fbpfcp-watermark.image)

3. 一组设计精美的图表

   ![charts](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/567cfbb4d8f041a78e078850699bbbcb~tplv-k3u1fbpfcp-watermark.image)

## 经典文献

![文献参考](img/DataVisulize.01.23-59-02.png)

AntV 为我们提供了一些文献参考，如上图所示。其中标红的是 AntV 的起源也是设计核心 ———— Wilkinson 的著作《The Grammer of Grapics》图形语法，G2 的命名就来源于此，这本也是我们入门图形语法的必读书。

> 可惜的是，这本书要花钱买，而且只有英文 = =，还好笔者英语还行。

## 参考文章

1. [《掘金 - 2020 - 我对 web 前端与可视化的一些思考》][overview01]
2. [《掘金 - 2020 - 带你一起走进前端图形学》][juejin-02]
3. [《AntV - 2018 - 图表分类》][antv_charts_classify]
4. [《阮一峰 - 2014 - 数据可视化：基本图表》][ruan_basic]
5. [《CHARTIO - 2019 - How to Choose Between a Bar Chart and Pie Chart》][bar_pie]
6. [墨者学院 - 数据可视化入门教程][mozhe_school]
7. [AntV - 语雀 - 可视化私房菜][antv_school]
8. [SeeConf - 2020 - 第三届 SEE Conf 2020 视频回放 && PPT][seeconf3]
9. [《Your guide to Data Visualization for Comparison》][]

[overview01]: https://juejin.cn/post/6865921593726468103
[juejin-02]: https://juejin.cn/post/6912086785405386765
[ruan_basic]: http://www.ruanyifeng.com/blog/2014/11/basic-charts.html
[antv_charts_classify]: https://antv-2018.alipay.com/zh-cn/vis/chart/index.html
[bar_pie]: https://chartio.com/learn/charts/how-to-choose-pie-chart-vs-bar-chart/
[mozhe_school]: https://www.yuque.com/mo-college/beginner-tutorial
[antv_school]: https://www.yuque.com/antv/blog
[seeconf3]: https://www.yuque.com/seeconf/2020/slide
[medium_guide]: https://medium.muz.li/guide-to-data-visualization-comparison-part-1-678382ceef00
