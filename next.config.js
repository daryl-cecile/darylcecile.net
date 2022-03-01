module.exports = {
	// disable for now until esp ready for go-live
	// i18n: {
	// 	locales: ['en-GB'],
	// 	localeDetection: false,
	// },
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