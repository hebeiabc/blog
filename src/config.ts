import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
	title: 'Hebei Blog',
	subtitle: '爱你所爱！',
	lang: 'zh_CN', // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
	themeColor: {
		hue: 225, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: 'https://img.cdn1.vip/i/691999553c9a2_1763285333.webp', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: 'center', // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: '', // Credit text to be displayed
			url: '' // (Optional) URL link to the original artwork or artist's page
		}
	},
	favicon: [
		{
			src: 'https://img.cdn1.vip/i/691b1d00d7264_1763384576.png', // Path of the favicon, relative to the /public directory

			//theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: '128x128', // (Optional) Size of the favicon, set only if you have favicons of different sizes
		}
	],
	toc: {
		enable: false,
		depth: 1
	}
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: '运行状态',
      url: 'https://stats.uptimerobot.com/vEzyYHZyRo',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
    {
      name: '企鹅群',
      url: 'https://qm.qq.com/q/jTAs8Al51m',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
	{
      name: '主网站',
      url: 'https://blog.bmd.sc.cn',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
	{
      name: '副网站',
      url: 'https://blog.bmd.sc.cn/',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
	
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://img.cdn1.vip/i/691997b5c3ffa_1763284917.webp',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: '鹤北',
  bio: 'Protect What You Love./爱你所爱！',
  links: [
    // {
      // name: 'Twitter',
      // icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      // url: 'https://twitter.com',
    // },
    // {
      // name: 'Steam',
      // icon: 'fa6-brands:steam',
      // url: 'https://store.steampowered.com',
    // },
    //{
      //name: 'GitHub',
      //icon: 'fa6-brands:github',
      //url: 'https://github.com/afoim',
    //},
    {
      name: 'QQ',
      icon: 'fa6-brands:qq',
      url: 'https://qm.qq.com/q/jTAs8Al51m',
    },
    {
      name: 'Email',
      icon: 'fa6-solid:envelope',
      url: 'mailto:hebei@ysop.top',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: '鹤北博客',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
// 在文件末尾添加 expressiveCodeConfig 导出
export const expressiveCodeConfig = {
  // 默认配置或根据项目需要配置
  themes: ['github-dark'],
  styleOverrides: {
    borderRadius: '0.5rem',
    codeFontSize: '0.875rem',
  },
};