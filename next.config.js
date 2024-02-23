module.exports = {
	poweredByHeader: false,
	async redirects() {
		return [
			{
				source: "/mastodon",
				destination: "https://techhub.social/@daryl",
				permanent: true
			}	
		]
	},
	async rewrites() {
		return [
			{
				source: "/.well-known/webfinger",
				destination: "/webfinger"
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
	}
	
}
