module.exports = {
	i18n: {
		locales: ['en'],
		defaultLocale: "en",
		localeDetection: false,
	},
	poweredByHeader: false,
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
	},
}