# Dawnlck - 前端数据可视化小报告 - 03 - 成果陈列

> 本次小报告因为篇幅的考虑，分成了三块，这是第三个部分，陈列当前国内外的一些数据可视化的成果。

![数据可视化 - 产品分布](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f4714d39b1f4a949f0b331ec5247952~tplv-k3u1fbpfcp-watermark.image)

下文列举了一些大家耳熟能详的产品，国内的比如 Echarts 和 AntV，国外的比如 D3 以及 Highcharts。

## 一、国内可视化产品

### 1. [AntV][antv]

**AntV** 是蚂蚁集团全新一代数据可视化解决方案，基于图形交互语法的理念实现数据可视化，旨在 **“让数据栩栩如生”**。其设计原则源自 AntDesign，遵循 **“准确>清晰>有效>美”** 的四条核心原则。

在一开始的时候，AntV 还是只有 G2 撑起门面，现在 AntV 大家族里已经有了 F2（移动端图表库）、G6（图可视化）、X6（图编辑和应用）、L7（地理信息数据可视化）、AVA（智能数据可视化分析）

![AntV - 产品矩阵](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3c7ce6ae00d4dccbf2a027614d8831b~tplv-k3u1fbpfcp-watermark.image)

### 2. [ECharts][echarts]

**Echarts** 最早诞生于 2012 年的 8 月，经历了 2013、2014、2016、2018、2020 五次更迭，目前来到了 Echarts5.0 的阶段。

![Echarts - 5.0 - 模块和特性](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fec1de2125884ee589aaed5cca0a3873~tplv-k3u1fbpfcp-watermark.image)

![Echarts - 发展历程](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03955525f46d4631bd83a0dc60a79dad~tplv-k3u1fbpfcp-watermark.image)

## 二、国外可视化产品

### 1. [HighCharts][highcharts]

**Highcharts** 系列软件是由专业的图表软件厂商 HIGHSOFT 开发的，国内由简数科技负责运营，第一个版本是在 2009 年发布的，截止到目前已经有 3 款成熟的图表软件及相关的云服务。在全球范围内客户众多，包括 72 个全球 100 强企业，知名企业如 facebook、twitter、微软等都有在使用。

产品目前共分为四个部分：

| 产品矩阵         | 说明                                            |
| ---------------- | ----------------------------------------------- |
| Highcharts       | 方便快捷的纯 JavaScript 交互性图表              |
| Highcharts Stock | 方便快捷的创建股票图、大数据量时间轴图表        |
| Highcharts Maps  | 优秀的 HTML5 地图组件，支持下钻，触摸、手势操作 |
| Highcharts gantt | 简单好用的 JavaScript 甘特图库                  |

截至这篇文章的时候，Highcharts 的最新版本为 9.0.1，几乎保持着一年一个大版本的迭代速度。

`9.0` 主要完成了对 Typescript 的适配，对 **系列** 和 **指标** 等进行了基于 ES6 类 的继承性重构，其他还包括日期选择器、3D 面积计算等优化。

`8.0` 增加了一些新的图表类型，强化了动态图表的叙事能力。

`7.0` 增加了如桑基图等一些拓扑图、时间线、3D 金字塔和漏斗图、气泡图、网络型拓扑图，完善了甘特图的一些细节。

### 2. [amCharts][amcharts]

amCharts 创建于 2004 年, 目前仍旧是一个未开源的状态，该图表库在一些类型的图表上做得非常简洁好看，如 Timeline 和 桑基图。

amCharts 分为四个部分，Charts、Map、TimeLine 以及 Editor（严格来说 Editor 不算是一个分类）。目前国内用的比较少，国外也都是一些大客户如微软、苹果、NASA 等在使用他们的产品。

### 3. [D3.js][d3js]

D3.js 是一个 Javascript 库，用于根据数据处理文档。

D3 为开发者提供了一种声明性的方法，可以对任意节点集进行操作。

```js
d3.selectAll('p').style('color', function (d, i) {
  return i % 2 ? '#fff' : '#eee';
});
```

使用 D3.js，产生了非常多的优秀的数据可视化的作品，它为数据可视化提供了很多让开发者自定义的能力。

## 三、小对比

![API - 陈列](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bfddcbe58e464c369809fdf0a869556f~tplv-k3u1fbpfcp-watermark.image)

## 参考链接

1. [AntV - 蚂蚁数据可视化][antv]
2. [Echarts - Apache - 一个基于 JavaScript 的开源可视化图表库][echarts]
3. [Echarts - 《ECharts 技术发展简史》][echarts]
4. [Highcharts - 让数据可视化更简单][highcharts]
5. [amCharts - JavaScript Charts & Maps][amcharts]
6. [d3js][d3js]
7. [chart.js][chartjs]
8. [高德 - loca][loca]
9. [高德 - mapLab][maplab]
10. [百度 - MapV (已很久没有迭代版本了)][mapv]
11. [微软 - SandDance - 单元数据可视化][sanddance]
12. [BizChart - 企业中后台的可视化解决方案][bizchart]
13. [Flourish - Beautiful and easy data visualization and storytelling][flourish]
14. [MIT - sigma.js(2017)][sigma]
15. [《八爪鱼 - 30 个值得推荐的数据可视化工具（2020 年更新）》][bazhuayu]

[antv]: https://antv.vision/zh/
[echarts]: https://echarts.apache.org/zh/index.html
[echarts-grow]: https://mp.weixin.qq.com/s/CSM7bcd5mevvgi1Jo3zp8Q
[highcharts]: https://www.highcharts.com.cn/
[amcharts]: https://www.amcharts.com/
[d3js]: https://d3js.org/
[chartjs]: https://www.chartjs.org/
[loca]: https://developer.amap.com/api/loca-api/prod_intro
[maplab]: https://maplab.amap.com/
[mapv]: https://mapv.baidu.com/
[sanddance]: https://sanddance.js.org/
[bizchart]: https://bizcharts.net/index
[flourish]: https://flourish.studio/
[bazhuayu]: https://zhuanlan.zhihu.com/p/51695598
[sigma]: http://sigmajs.org/
