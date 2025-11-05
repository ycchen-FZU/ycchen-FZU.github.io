
const currentUrl = window.location.href;
const siteUrl = "https://ycchen-FZU.github.io"; 
let updatedUrl = currentUrl.replace("https://ycchen-FZU.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("en-us".length > 0) {
  updatedUrl = updatedUrl.replace("/en-us", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/en-us/";
    },
  },{id: "dropdown-selected-papers",
              title: "Selected Papers",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/en-us/selected_papers/";
              },
            },{id: "dropdown-first-corresponding-author-papers",
              title: "First/Corresponding Author Papers",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/en-us/first_corresponding_papers/";
              },
            },{id: "dropdown-joint-papers",
              title: "Joint Papers",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/en-us/joint_papers/";
              },
            },{id: "dropdown-conference-papers",
              title: "Conference Papers",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/en-us/conference_papers/";
              },
            },{id: "dropdown-books",
              title: "Books",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/en-us/books/";
              },
            },{id: "dropdown-software",
              title: "Software",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/en-us/software/";
              },
            },{id: "news-my-academic-homepage-is-now-live-sparkles-smile",
          title: 'My academic homepage is now live! :sparkles: :smile:',
          description: "",
          section: "News",},{
          id: 'lang-zh-cn',
          title: 'zh-cn',
          section: 'Languages',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
