window.$docsify = {
  loadSidebar: true,
  subMaxLevel: 2,
  loadNavbar: true,
  alias: {
    "/LowCode/_sidebar.md": "/_sidebar.md",
    "/Resolution/_sidebar.md": "/_sidebar.md",
    "/.*/_navbar.md": "/_navbar.md",
  },
  auto2top: true,
  // Dark Switch
  darkMode: {
    dark: {
      background: "#1c2022",
      toggleBtnBg: "#34495e",
      textColor: "#b4b4b4",
    },
    light: {
      background: "#FFF",
      toggleBtnBg: "#ccc",
      textColor: "var(--theme-color)",
    },
  },

  // 字数统计
  count: {
    countable: true,
    position: "top",
    margin: "10px",
    float: "left",
    fontsize: "1em",
    color: "rgb(90,90,90)",
    language: "chinese",
    localization: {
      words: "",
      minute: "",
    },
    isExpected: true,
  },
};
