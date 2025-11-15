
const currentUrl = window.location.href;
const siteUrl = "https://ycchen-FZU.github.io"; 
let updatedUrl = currentUrl.replace("https://ycchen-FZU.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-主页",
    title: "主页",
    section: "导航菜单",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-代表作",
              title: "代表作",
              description: "",
              section: "更多选项",
              handler: () => {
                window.location.href = "/selected_papers/";
              },
            },{id: "dropdown-一作-通讯",
              title: "一作/通讯",
              description: "",
              section: "更多选项",
              handler: () => {
                window.location.href = "/first_corresponding_papers/";
              },
            },{id: "dropdown-合作",
              title: "合作",
              description: "",
              section: "更多选项",
              handler: () => {
                window.location.href = "/joint_papers/";
              },
            },{id: "dropdown-会议",
              title: "会议",
              description: "",
              section: "更多选项",
              handler: () => {
                window.location.href = "/conference_papers/";
              },
            },{id: "dropdown-图书",
              title: "图书",
              description: "",
              section: "更多选项",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-软件",
              title: "软件",
              description: "",
              section: "更多选项",
              handler: () => {
                window.location.href = "/software/";
              },
            },{id: "news-我的个人主页上线啦-sparkles-smile",
          title: '我的个人主页上线啦！:sparkles: :smile:',
          description: "",
          section: "新闻",},{id: "news-2025第八届生物化工青年学者论坛暨第十四届生物化工技术创新及产业发展研讨会-口头报告",
          title: '“2025第八届生物化工青年学者论坛暨第十四届生物化工技术创新及产业发展研讨会“口头报告',
          description: "",
          section: "新闻",handler: () => {
              window.location.href = "/news/zh-cn/20251108.html";
            },},{id: "news-我的福大主页上线啦",
          title: '我的福大主页上线啦！',
          description: "",
          section: "新闻",},{
          id: 'lang-en-us',
          title: 'en-us',
          section: '语言切换',
          handler: () => {
            window.location.href = "/en-us" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '浅色主题',
      description: '切换为浅色主题',
      section: '主题',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '深色主题',
      description: '切换为深色主题',
      section: '主题',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '系统主题',
      description: '使用系统默认主题',
      section: '主题',
      handler: () => {
        setThemeSetting("system");
      },
    },];
