# FE Tech Stack

## 数据层

<div id="services" class="tech-stack">
    <ul class="tech-list">
        <li class="tech-card" v-for="item in services">
            <a :href="item.link" target="__blank">
                <img :src="item.src" />
                <span v-if="item.name" v-text="item.name"></span>
            </a>
        </li>
    </ul>
</div>

<script>
    const services = [
        {
            name: "rxjs",
            src: "https://cn.rx.js.org/manual/asset/Rx_Logo_M.png",
            link: "https://cn.rx.js.org/"
        }
    ]

    new Vue({
        el: '#services',
        data: { services: services }
    })
</script>

[rxjs]: https://cn.rx.js.org/manual/asset/Rx_Logo_M.png
