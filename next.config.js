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
			}
		];
	},
	async redirects() {
		return [
			{
				source: '/en-US',
				destination: '/',
				permanent: true,
			},
			{
				source: '/en-US/:path*',
				destination: '/:path*',
				permanent: true,
			},
		]
	}
}