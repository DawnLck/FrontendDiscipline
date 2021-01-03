# Dev Tools

## 系统工具

<div id="tech-datax" class="tech-stack">
    <ul class="tech-list">
        <li class="tech-card" :class="{'tech-card-cover': item.cover}" v-for="item in tools.sys">
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
        data: { tools: DevToolsData }
    })
</script>
