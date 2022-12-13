module.exports = {
	i18n: {
		locales: ['en'],
		defaultLocale: "en",
		localeDetection: false,
	},
	poweredByHeader: false,
	async rewrites() {
		return [
			{
				source: "/bee.js",
				destination: "https://cdn.splitbee.io/sb.js",
			},
			{
				source: "/_hive/:slug",
				destination: "https://hive.splitbee.io/:slug",
			},
			{
				source: "/r/images.unsplash.com/:path*",
				destination: "https://images.unsplash.com/:path*"
			},
			{
				source: "/home",
				destination: "/"
			}
		];
	},
	experimental: {
		appDir: true
	},
	images: {
		domains: ['images.unsplash.com']
	}
}