# FE Tech Stack

## 数据层

<div id="services" class="tech-stack">
    <ul class="tech-list">
        <li class="tech-card" v-for="item in services">
            <img :src="item.src" />
        </li>
    </ul>
</div>

<script>
    const services = [
        {
            name: "rxjs",
            src: "https://cn.rx.js.org/manual/asset/Rx_Logo_M.png"
        }
    ]

    new Vue({
        el: '#services',
        data: { services: services }
    })
</script>

[rxjs]: https://cn.rx.js.org/manual/asset/Rx_Logo_M.png
