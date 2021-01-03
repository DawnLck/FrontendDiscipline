# FE Tech Stack

## 应用层

<div id="tech-app" class="tech-stack">
    <ul class="tech-list">
        <li class="tech-card" :class="{'tech-card-cover': item.cover}" v-for="item in list.app">
            <a :href="item.link" target="__blank">
                <img :src="item.src" />
                <span v-if="item.title" v-text="item.name"></span>
            </a>
        </li>
    </ul>
</div>

## 数据交互层

<div id="tech-datax" class="tech-stack">
    <ul class="tech-list">
        <li class="tech-card" :class="{'tech-card-cover': item.cover}" v-for="item in list.datax">
            <a :href="item.link" target="__blank">
                <img :src="item.src" />
                <span v-if="item.title" v-text="item.name"></span>
            </a>
        </li>
    </ul>
</div>

## 脚手架工具层

<div id="techTools" class="tech-stack">
    <ul class="tech-list">
        <li class="tech-card" :class="{'tech-card-cover': item.cover}" v-for="item in list.tools">
            <a :href="item.link" target="__blank">
                <img :src="item.src" />
                <span v-if="item.title" v-text="item.name"></span>
            </a>
        </li>
    </ul>
</div>

## 框架语言层

<div id="tech-framework" class="tech-stack">
    <ul class="tech-list">
        <li class="tech-card" :class="{'tech-card-cover': item.cover}" v-for="item in list.framework">
            <a :href="item.link" target="__blank">
                <img :src="item.src" />
                <span v-if="item.title" v-text="item.name"></span>
            </a>
        </li>
    </ul>
</div>

<script>
    new Vue({
        el: '#main',
        data: { list: TechListData }
    })
</script>
