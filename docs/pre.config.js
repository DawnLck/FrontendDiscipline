// Pre Config

// Docsify
window.$docsify = {
  loadSidebar: true,
  subMaxLevel: 2,
  loadNavbar: true,
  alias: {
    '/LowCode/_sidebar.md': '/_sidebar.md',
    '/Resolution/_sidebar.md': '/_sidebar.md',
    '/.*/_navbar.md': '/_navbar.md',
  },
  auto2top: true,
  // Dark Switch
  darkMode: {
    dark: {
      background: '#1c2022',
      toggleBtnBg: '#34495e',
      textColor: '#b4b4b4',
    },
    light: {
      background: '#FFF',
      toggleBtnBg: '#ccc',
      textColor: 'var(--theme-color)',
    },
  },

  // 字数统计
  count: {
    countable: true,
    position: 'top',
    margin: '10px',
    float: 'left',
    fontsize: '1em',
    color: 'rgb(90,90,90)',
    language: 'chinese',
    localization: {
      words: '',
      minute: '',
    },
    isExpected: true,
  },
};

// TechListData

const TechListData = {
  datax: [
    {
      name: 'rxjs',
      title: true,
      src: 'https://cn.rx.js.org/manual/asset/Rx_Logo_M.png',
      link: 'https://cn.rx.js.org/',
    },
  ],
  tools: [
    {
      name: 'vite',
      cover: true,
      src:
        'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7976ad0cf5a2495e8b4f9c1488cad5a6~tplv-k3u1fbpfcp-zoom-1.image',
      link: 'https://vitejs.dev/',
    },
    {
      name: 'gulp',
      title: true,
      src:
        'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png',
      link: 'https://gulpjs.com/',
    },
  ],
  framework: [
    {
      name: 'vue',
      title: true,
      src: 'https://cn.vuejs.org/images/logo.png',
      link: 'https://cn.vuejs.org/',
    },
    {
      name: 'react',
      title: true,
      src:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
      link: 'https://react.docschina.org/',
    },
  ],
};

// DevToolsData

const DevToolsData = {
  sys: [
    {
      name: 'rxjs',
      title: true,
      src: 'https://cn.rx.js.org/manual/asset/Rx_Logo_M.png',
      link: 'https://cn.rx.js.org/',
    },
  ],
};
