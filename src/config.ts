import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "lhx",
	subtitle: "Blog",
	themeColor: {
		hue: 275, //Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	/*
	banner: {
		enable: true,
		src: "/Celestia.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pixiv @chokei", // Credit text to be displayed
			url: "https://www.pixiv.net/artworks/122782209", // (Optional) URL link to the original artwork or artist's page
		},
	},
	*/
	banner:
	{
		enable: true,
		src: "https://github.com/qinghaili142857/picx-images-hosting/raw/master/f5d2714bf70992808380c7dffc3818ce_1000948482587408176.3yeuvah6v3.webp",
		position:"top",
		credit:
			{
				enable: false,
				text: "123",
				url: "https://github.com/qinghaili142857/picx-images-hosting/raw/master/u=1424548957,3661975343&fm=253&fmt=auto&app=120&f=JPEG.2ksbr81m2t.webp",
			},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		   {
		     src: '/favicon/icon.webp',
			   theme: 'light',
			   sizes: '32x32',
		   }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Series,
		LinkPreset.About,
		LinkPreset.Friends,
		{
			name: "GitHub",
			url: "https://github.com/qinghaili142857", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		/*{
			name: "开往",
			url: "https://www.travellings.cn/train.html",
			external: true,
		},*/
	],
};

export const profileConfig: ProfileConfig = {
	avatar:"https://github.com/qinghaili142857/picx-images-hosting/raw/master/c026940bd8caf858e752eac010c5f6b2_preview_mid.2obxoyuqkx.webp",
	//avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=189563385&spec=0", // Relative to the /src directory. Relative to the /public directory if it starts with '/' 原assets/images/demo-avatar.png,可选https://q2.qlogo.cn/headimg_dl?dst_uin=189563385&spec=0
	name: "lhx's blog",
	bio: "Nothing is impossible",
	links: [
		/*{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},*/
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/qinghaili142857/lhx-blog",
		},
		/*{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://t.me/yCENzh",
		},
		{
			name: "开往",
			icon: "fa6-solid:train-subway",
			url: "https://www.travellings.cn/train.html",
		},*/
		{
			name:"Bilibili",
			icon:"fa6-brands:bilibili",
			url:"https://space.bilibili.com/3493112880040520?spm_id_from=333.1007.0.0",
		}
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
