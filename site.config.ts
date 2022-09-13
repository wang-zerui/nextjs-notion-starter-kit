import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // rootNotionPageId: 'Xinwuyun-s-blog-e706da73001b49d08ce551388aa5045e',
  rootNotionPageId: "xinwuyun-s-Blog-f47b6e868c0044f1a15fe766f6d68efb",

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: "ccfbc34180f644e39732419d6a33755b",

  // basic site info (required)
  name: 'xinwuyun blog',
  domain: 'zr-wang.com',
  author: 'Zerui Wang',

  // open graph metadata (optional)
  description: 'xinwuyun\'s blog',

  // social usernames (optional)
  github: 'xinwuyun',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: "https://cdn.jsdelivr.net/gh/xinwuyun/pictures@main/2022/07/25/db7daa8cda888baf2256a468af87dee4-avatar-44b842.png",
  defaultPageCover: "https://cdn.jsdelivr.net/gh/xinwuyun/pictures@main/2022/07/25/872921f7732290ccaa731201ea4adbfa-612561D4-FA86-4EC3-A12C-AB89292A3EE8-739304.jpeg",
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    // {
    //   title: 'Home',
    //   pageId: 'Xinwuyun-s-blog-e706da73001b49d08ce551388aa5045e'
    // },
    // {
    //   title: 'About',
    //   pageId: 'About-66237998075a4eb198898f00aeb0c5e1'
    // },
    // {
    //   title: 'Contact',
    //   pageId: 'Contact-25d7e7dfc81749aca58486405379c7f5'
    // }
  ]
})