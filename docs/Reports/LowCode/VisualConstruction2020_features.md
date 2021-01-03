# 【Dawnlck】2020 前端可视化搭建小报告- 02 - 链路、架构和难点

> 该篇作为前端可视化报告的第二篇，主要简述前端可视化搭建的链路、架构和难点，内容含有大量图文，部分小节的内容只有配图，后续有机会继续完善。

## 0. 可视化搭建的使用链路

在开篇之前，我们先把视角提高一点，关注到**使用的链路**上，对于一个用户（研发 or 非研发），如何使用我们构建出的可视化搭建平台？

1. **Low-code**: 如果面向的是研发，场景是中后台或者 toB 的一些业务，我们需要搭建的就是低代码生产链路，用户只需要**改动少量的代码**就能完成一个应用或者页面的**全链路流程**。

   ![LowCode的使用者链路](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ebf101c0493f4faa852ffb2efc58038d~tplv-k3u1fbpfcp-watermark.image)

2. **No-code**: 如果面向的是非研发（如产品经理、设计师），场景大多数都是一些简单的营销页面，使用者会希望完全不涉及任何代码，就能把一个页面或者多个页面发布到线上，同时还能保证**可维护**、**可迭代**、**可回退**、**可监控**。

   ![No-Code的使用者链路](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a72479f351748148ad527155de704dd~tplv-k3u1fbpfcp-watermark.image)

了解了**使用者的链路**之后，我们再理解可视化搭建的一些设计思想会顺畅很多。

## 1. 可视化搭建架构

废话不多说，放上收集到的一些架构图：

1. 政采云 - 鲁班架构图

   ![政采云 - 鲁班架构图](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8cbd4aa1908b4e30bccf9569935ef5a5~tplv-k3u1fbpfcp-watermark.image)

2. 京东 - MPM

   ![京东 - MPM](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22db4fe9c5284b42be653b8db72e2c2b~tplv-k3u1fbpfcp-watermark.image)

3. 京东 - Atom

   > 下图是 Atom 可视化搭建系统的服务端架构

   ![京东 - Atom](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96a52f68417e4e93812e1c6e5eaba40b~tplv-k3u1fbpfcp-watermark.image)

4. 阿里淘系技术部 - iceluna

   - iceluna 架构图 - 整体架构

   ![阿里 - iceluna](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aeaf7772632948a29bbad31d48e7a760~tplv-k3u1fbpfcp-watermark.image)

   - iceluna 架构图 - 流程能力图

   ![ice-luna - 流式架构图](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f2748cdcb254aee9c0102daf1a18e39~tplv-k3u1fbpfcp-watermark.image)

5. 阿里淘系技术部 - imgcook

   ![阿里 - imgcook](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d99b768ca2b44bb68087ca6c72a9000f~tplv-k3u1fbpfcp-watermark.image)

6. 阿里妈妈 - 淘积木

   ![阿里妈妈 - 淘积木](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/149f0277b8164cdb90bea6bce67cfd95~tplv-k3u1fbpfcp-watermark.image)

7. 阿里 - 云凤蝶

   ![阿里 - 云凤蝶](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e782d506bd74a80af50f9eb2100d8dc~tplv-k3u1fbpfcp-watermark.image)

从这些优秀的项目架构中，笔者也试着归纳了一下，架构图如下：

![可视化搭建 - 架构归纳](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40f98c7d2d0346f7879165b3088c1b0b~tplv-k3u1fbpfcp-watermark.image)

## 2. 可视化编辑器（核心） Low-code Visual Editor

iceluna 的编辑器架构如下图所示，一个框架涵盖了三大模块（编排、渲染、内核）：

![iceluna - 编辑器架构层](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9037b58dc24742e78fbc85628135688f~tplv-k3u1fbpfcp-watermark.image)

可视化搭建的核心是编辑器，而编辑器的核心是组件。

[云凤蝶][clouddie]将编辑器对组件的操作划分成了五个具体的步骤，如下图所示：

![云凤蝶 - 编辑器的五部曲](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3197afb0f00b4800a1bb85723cbd46bd~tplv-k3u1fbpfcp-watermark.image)

### 2.1 组件的识别和导入

由开发专家，基于我们提供的开发规范，制作出精良且模块化的组件，上传至我们的组件仓库。

基础的组件元素，可以通过专业的组件库（如 AntDesign）提供，这样在设计规范和实现规范上都有了较低粒度的一个保障。

那么组件的识别和导入大致上完成了什么呢？这里列举了两点：

- 获取组件属性描述
- 生成组件 bundle

### 2.2 组件的拖拽和组合

组件拖拽和组合的过程，其实有点像拼图（二维）和搭乐高（三维），这也可能是为什么很多可视化搭建起名叫做 **“积木”**、**“乐高”**吧。

拖拽的实现现在已经挺成熟的了，无论 Mouse 事件的监听或者 HTML5 提供的 drag 和 drop 方案，都能很好地完成拖拽这个行为。

组合的过程我们这里看一下松果出行的 lego 项目是如何做的：组件在提供之初就设定了它的接口和配置，并符合定义的 JSON Schema，配合 [Vue 的动态组件特性](https://cn.vuejs.org/v2/guide/components.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6)来实现**动态的页面渲染**，用户也可以通过编辑器中的选项来控制组件的呈现形式及组合形式，最后完成组件间的拼装。

![松果出行 - 组件的组合](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7c9aca6cf90412bb22e13d1d65893e4~tplv-k3u1fbpfcp-watermark.image?imageslim)

### 2.3 组件的配置和扩展

常见的组件都会提供**基础的属性配置**，比如位置、大小、颜色、布局、文本、背景等。

但有一些组件，我们想给它加一点**通用高级属性**，如：是否渲染、是否隐藏、重复、通用样式，悬浮提示，固钉，徽标，loading 加载中等，每一个通用高级属性都是 Web 应用研发中某一类常见功能的抽象与封装。这种实现的过程，和设计模式中的装饰器模式一致 🎄。

具体如何做呢？举个例子 🌰，在 React 的技术栈中，我们可以用 HOC（Higher-Order Components 高阶组件）去包裹原始组件实现这些增强功能。

> 高阶组件（HOC）是 React 中用于重用组件逻辑的高级技术。具体而言，高阶组件是接受组件并返回新组件的函数。

- 基本属性配置（如大小、颜色、背景、文本等）
- 横向能力扩充（如 click 事件、悬浮提示、链接跳转等）

![云凤蝶 - 组件的配置和扩展](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b73bb3c0d7a47b9b54029c17b5da77c~tplv-k3u1fbpfcp-watermark.image)

### 2.4 组件编排和自适应

这里会涉及多个问题，如

1. 编辑时拖拽组件的二维坐标如何形成嵌套组件树
2. 当屏幕尺寸变化的时候，组件自身，组件与其他组件之间的位置关系如何变化

组件树的生成是为了解决对组件包含关系的描述，最常见的比如父子关系、兄弟关系等，我们可以通过盒模型的包含识别，来生成一颗类似 DOM 树的组件树。

自适应的问题，现在前端领域已经有不少解决方案了，如 rem、弹性布局、grid 布局等。

- **DSL 流派（半边代码半边实时呈现）** vs **Flex 流式编排** vs **类 PS、Sketch 自由编辑模式**
- 无限画布 && 栅格系统 && 参考线

### 2.5 组件的状态和联动

这一块的事情其实非常多，包含了状态定义、状态存储、状态共享、数据接入、组件联动等，具体的我放到了第三小节里展开介绍。

- 打通通信渠道（如 http 通信、window 的 postMessage 等）
- 状态外置（如 Redux、Vuex、Rxjs，也可以自研一个类似 Vue 响应式内核架构的发布订阅模型）

## 3. 物料管理和组件流通

从`物料`的宽泛概念理解，诸如图标、字体、图片、多媒体、3D 模型等**设计资产**，以及组件、图表、微件、区块模板等**开发资产**，都属于可视化搭建系统中的物料。

这么多类型的物料，如何管理和流通就是一个比较让人头疼的问题。

我们既要允许新的物料进入，也要允许开发者能快速便捷地修改和发布物料，还得保证这些物料是能够被组合和嵌套的。

下图展示了云凤蝶是如何快速导入 npm 组件的：

![云凤蝶 - 快速导入npm组件](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/947aea9853004a5b90f272825abed8a1~tplv-k3u1fbpfcp-watermark.image)

下图是阿里 iceluna 关于物料和组件流通的架构图。

![iceluna - 物料和组件流通](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf04a50c212440efa5716327bf5e5bff~tplv-k3u1fbpfcp-watermark.image)

## 4. 数据接入、模块通信及状态共享

数据如何在组件内流通是一个做可视化搭建避不开的问题，这个小节将针对数据接入和模块通信详细地探讨一下解决的方案。

### 4.1 数据接入

我们先讲数据接入，一个组件接入的数据类型可能会多种多样，大致上可以分为两类: 接入式数据接口和嵌入式数据服务。前者需要我们接入数据，后者需要我们提供一个标准容器。我们可以通过 API 调用、在线服务调用等手段，完成组件的数据接入。

1. Database / API 接入数据接口
2. Service / Map / Email 嵌入数据服务（比如邮件、地图）

![云凤蝶 - 数据接入](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d25879617c5b4555bcf13153e42a693a~tplv-k3u1fbpfcp-watermark.image)

### 4.2 模块通信和状态共享

在基于 Vue 技术栈的开发中，组件间的通信存在多种实现手段，比如

1. `$parent`/`$children`/`$ref` 直接获取组件实例上的属性和状态，仅限父子组件
2. 通过`Prop`传递数据 单向的数据流通，仅限父子组件
3. `$emit` && `$on` 事件机制，一般我们会在外部实现一个`EventBus`作为事件总线
4. `VueX`外置全局状态管理和共享

在可视化搭建中，其实是一样的道理，我们可以

1. 对组件进行生成唯一的实例 id，通过这个 id 来访问组件的数据
2. 对组件的接口进行声明，告诉用户它能接收什么样的数据、传递出什么样的数据，然后当用户完成组件的组合，我们可以自动为对应的父子组件接上数据。
3. 对组件包裹一层事件机制，实现对外发送组件状态和接受组件数据的能力，同时事件会在外部的事件总线上流动。
4. 外置状态管理机制，实现原理类似 MVVM 框架的状态管理器（Vuex、Redux）

这里举一个业界的例子，云凤蝶为每个页面都提供一个类似 MMVM 架构下的 Controller 角色的 View Model 文件，从而实现视图的状态驱动，其内容就是导出一个普通的 TypeScript Class，包含了**状态属性**和**状态方法**。

![云凤蝶 - 状态Controller](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c819dbb9e5944c9f961b68cd48aa5f0c~tplv-k3u1fbpfcp-watermark.image)

在页面 Controller 中定义好变量和方法之后，用户可以通过属性面板的交互操作：

- 将组件的 props 绑定到 Controller 内的变量
- 将组件的 event 绑定到 Controller 内的方法

实现了数据的流通后，云凤蝶还为此做了针对更新视图响应式的优化，核心架构就是 Reactive （响应式）和 Observable （可观测），实现的原理就是 Vue3 也使用了的 **ES6 Proxy** 封装。优化之后，当数据发生变化，就不用全局刷新，只需要刷新依赖这个数据的组件即可。

![云凤蝶 - 组件响应式状态管理](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e908611604b471da11c89d23e640104~tplv-k3u1fbpfcp-watermark.image)

## 5. 画布（布局方案、栅格及参考线、边界控制）

画布是我们处理组件，完成组件组合等操作的一个载体。

### 5.1 画布的布局

画布的布局大致上可以分为两类：

| 布局类型           | 示意图                                                                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 抽屉式（瀑布流式） | ![松果出行 - 抽屉式](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2f03ed1e8be4baa8696623d5f72764c~tplv-k3u1fbpfcp-watermark.image?imageslim) |
| 自由式             | ![松果出行 - 自由式](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4430e121a994d4783cd621c6811bae9~tplv-k3u1fbpfcp-watermark.image?imageslim) |

**抽屉式**自上而下顺序排列，可以更换组件位置，但不能实现元素定位，没有层级概念，遇到复杂布局或者需要叠放元素时不够灵活，如果需要实现复杂页面的效果则需要引入复合 UI 组件的概念，它需要大量现成的 UI 组件。优点是将可操作程度限定在了一个可控的范围内，对非设计人员来说只需要通过现有 UI 组件进行拼装即可生成一个美观度较高的页面。

**自由式**完全可随意拖拽元素位置，自由度高，只需几个基础 UI 组件即可，存在层级概念，可任意叠放拼装，在无成品 UI 组件的情况下 diy 出复杂页面。但页面不可控，对操作人员的美感要求更高。更适合 UI 同学操作使用。下图只是一个复杂布局的例子，关注布局即可先不要管业务逻辑如何实现。

### 5.2 & 5.3 画布的栅格、参考线、边界控制（待完成）

## 6. 多端和多框架适配

1. iceluna - 多框架适配

   ![iceluna - 多端适配](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9bc2939fa7ee40c9b95b33dcc8906e37~tplv-k3u1fbpfcp-watermark.image)

2. MPM - 多端适配

   ![MPM - 多端适配](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac64a9f98566426590a34a352c111318~tplv-k3u1fbpfcp-watermark.image)

## 7. 数据模型 Model / 数据约束 Schema

数据模型和数据约束是可视化搭建非常核心的一部分，良好的模型和约束设计能帮助我们更好地实现可视化搭建。

![京东 - MPM - PageData](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/548256e9a58240a49bb061ade785deca~tplv-k3u1fbpfcp-watermark.image)

![京东 - MPM - ComData](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36a8f52b2cb64d2480b9ac9adbeaff56~tplv-k3u1fbpfcp-watermark.image)

## 8. 海量部署

这里展示一套阿里的淘积木产品，所设计并落地的海量部署方案。

1. 核心问题

   ![阿里 - 淘积木 - 海量部署 - 问题](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b6ad795bcc64755bc3a03a4814f1f45~tplv-k3u1fbpfcp-watermark.image)

2. 初步方案

   ![阿里 - 淘积木 - 海量部署 - 初步方案](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/058db164980e4146afee167e51da08c5~tplv-k3u1fbpfcp-watermark.image)

3. 小规模架构

   ![阿里 - 淘积木 - 海量部署 - 小规模架构](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ca86b0f4b4643d5aa5f82ea2e0a8917~tplv-k3u1fbpfcp-watermark.image)

4. 模型建立和方案设计

   ![阿里 - 淘积木 - 海量部署 - 架构完善](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/80559cca81ce475cb47e58a10ee82cb3~tplv-k3u1fbpfcp-watermark.image)

5. 最终架构

   ![阿里 - 淘积木 - 海量部署 - 最终架构](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0500b63217134ffb91279df3c4e9e000~tplv-k3u1fbpfcp-watermark.image)

我们在实现海量部署中，可能会遇到的一些关键性问题：

1. Node 缓存回收机制阈值管理
2. IPC 大文件传输
3. 冷部署和热部署、容灾管理

## 9. 微前端的应用

> 微前端：将前端整体分解为小而简单的块的模式。这些块可以独立持续开发、持续测试和持续部署，同时仍然聚合为一个产品出现在客户面前。

下图是常见的**微前端架构示意图**：

![常见的微前端架构示意图](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35874996de6146ea9ad8a4c9bdccd8d7~tplv-k3u1fbpfcp-watermark.image)

**微前端**的思路其实特别契合可视化搭建的需要，因为对于组件而言，我们尽可能地不对上传组件者如何实现组件进行限制，因为有些人会习惯用 React、Vue 或者 Angular，有些人会写一些原生 js 的组件，这就要求我们在封装组件完成搭建的时候，提供一个可兼容各种组件的容器，这和微前端的思路不谋而合。

社区知名度较高的微前端解决方案是**single-spa**，飞冰在进行调研之后，结合自身的可视化搭建业务，提出了一种成熟的微前端方案**icestark**，应用在阿里创作者平台等项目上，大致的实现思路如下：

1.  引入框架应用（容器，Container）和子应用（项目，Item）的概念

    - 框架应用负责系统整体布局以及子应用的注册、加载与渲染。
    - 子应用是一个传统的 SPA 应用（可包含一个或多个页面），会打包出 bundle 同时发布到 CDN，那么我们需要在框架应用中注册管理所有子应用，然后在适当的时机加载对应的子应用 bundle 并将其渲染到指定节点（系统布局里面）

2.  捕捉子路由的变化

    和`vue-router`定义子路由很相似，而且也是通过劫持 history 的 API 实现路由捕获

3.  怎么渲染子应用到指定节点

    现代前端框架都提供了挂载的函数

    - React `ReactDOM.render(<App />, document.getElementById('#root'))`
    - Vue `Vue.createApp(Counter).mount('#counter')`

    如果不是用框架实现的，也可以用原生 js 封装一个`mountJsChildApp`函数实现挂载

![飞冰 - icestark - 微前端](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b855a0a00bbf4fbfb8de28a1045a2b9a~tplv-k3u1fbpfcp-watermark.image)

## 10. Serverless

Serverless 也是非常前沿的一个技术，但其实使用起来不会那么复杂，只要了解它的作用，就能明白如何结合 serverless 的能力。

> 飞冰：基于 ServerLess 的能力，在前端项目中可以完成 api 的编写以及页面的渲染，不需要再创建一个后端应用。

那么 ServerLess 提供的到底是什么能力呢？这里引入腾讯云目前的爆款 Serverless 产品-云函数 SCF 的一段说明:

> 云函数 SCF 是腾讯云为企业和广大开发者们提供的无服务器执行环境，您无需购买和管理服务器，而只需使用平台支持的语言编写核心代码并设置代码运行的条件，代码即可在腾讯云基础设施上弹性、安全地运行。腾讯云完全管理底层计算资源，包括服务器 CPU、内存、网络和其他配置/资源维护、代码部署、弹性伸缩、负载均衡等。代码按需运行，空闲时不收费。使用云函数将帮您免除所有运维性操作，使您更加专注于核心业务的开发，实现快速上线和迭代，把握业务发展的黄金时期。

喔哦，原来是不用管服务器搭建了，而且还能负载均衡、按需运行，这还可以帮我们节省搭建的成本！

那么，怎么用呢？亲，**SSR** 可以了解一下！我们只要在**云函数 SCF** 里实现对页面的 **Render** 就行啦！具体如何实现大家应该可以通过搜索引擎找到对应的实现文章。

> 此处可能需要云服务商提供临时域名用于访问站点

![SSR](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94900d3768e04abb8e399ff0b6706e39~tplv-k3u1fbpfcp-watermark.image)

## 11. AI 的引入和结合

> 目前 AI 从机器学习不断发展到了现在大热的深度学习（神经网络）， 未来 AI 到底能够发展得有多快谁也不知道，说不定我们就能在有生之年看到“奇点”的来临。

主要利用 AI 的识别和推导能力（识别也是一种推导）来协助可视化搭建，业内比较典型和成熟的成果如 **imgcook**，下面是几张关于该产品的说明图:

1. 核心想法

   ![imgcook - core](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20c4b22e7ae74c7e9a01fd306931c9b4~tplv-k3u1fbpfcp-watermark.image)

2. 产品的大致架构

   ![imgcook - pipe](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04490bc8bd624abe943f7016a45dbbc0~tplv-k3u1fbpfcp-watermark.image)

3. 用户的操作界面

   ![imgcook - interface](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bc198fc66d344848ee84290f4bfa67e~tplv-k3u1fbpfcp-watermark.image)

## 12. 其他的一些思考

实现前端可视化搭建是一个耗时长久的浩大工程，期间可能还会遇到以下技术难点，由于篇幅有限暂时不一一深入研究，后续有机会可以持续补充和完善：

1. 无限画布（允许用户在非常广阔的虚拟画布上进行自由的创作，让设计师能够直接在平台上像在 sketch 上一样工作）
2. 容灾系统（解决服务器宕机或者其他灾难发生时，保障用户数据的问题）
3. 代码可用率（检验是 low-code 还是 no-code 的最佳标准）
4. 多人协同（方便团队协作快速完成一个大型的复杂应用）

## # 参考文章

这里很多资料，来源于本人参与的早早聊大会的讲师 PPT 材料，在这其中我也做了一些筛选和整合，加入了自己制作的图表，也欢迎各位关注这个干货满满的会议。

再列举一些其他参考的文章或者网站：

1. [《前端工程实践之可视化搭建系统（一）》][doc_01]
2. [《MPM 卖场可视化搭建系统 — 要素设计》][doc_02]
3. [Github - awesome-lowcode][awesome-lowcode]
4. [《阿里云原生 - 什么是低代码（Low-Code）？》][aliyun-lowcode]
5. [Wiki - 低代码开发平台][wiki-lowcode]
6. [《腾讯 - AlloyTeam - 页面可视化搭建工具技术要点》][alloyteam]
7. [《飞冰 - 面向大型工作台的微前端解决方案 icestark》][icestark]
8. [《京东 - 凹凸实验室 - 智能可视化搭建系统 Atom 服务架构演变》][atom]
9. [《云凤蝶可视化搭建的推导与实现 - SEE Conf》][clouddie]
10. [《松果出行-活动可视化搭建系统——你的 KPI 被我承包了》][songguo]

[author]: https://juejin.cn/user/1028798614345032
[awesome-lowcode]: https://github.com/taowen/awesome-lowcode
[doc_01]: https://mp.weixin.qq.com/s/tPcIXCCQkdSXr_gTi8KT6A
[doc_02]: https://mp.weixin.qq.com/s?__biz=MzI5NjIzNjA1Nw==&mid=2247484054&idx=1&sn=f56e55e4dfdcea481e7881f9201f0c3b&chksm=ec4627e0db31aef6459de3c83e3bb320d2d7bc395de2a0aa5d595168de9d1f505099cb6374be&scene=178&cur_album_id=1581972507954315265#rd
[aliyun-lowcode]: https://juejin.cn/post/6900791928477417480
[wiki-lowcode]: https://zh.wikipedia.org/zh-cn/%E4%BD%8E%E7%A8%8B%E5%BC%8F%E7%A2%BC%E9%96%8B%E7%99%BC%E5%B9%B3%E5%8F%B0
[alloyteam]: http://www.alloyteam.com/2019/07/h5-build-tool-pipeline/
[icestark]: https://juejin.cn/post/6844903977859940360
[atom]: https://aotu.io/notes/2020/04/21/atom-services-upgrade/index.html
[clouddie]: https://zhuanlan.zhihu.com/p/101665976
[songguo]: https://juejin.cn/post/6889320306800852999
