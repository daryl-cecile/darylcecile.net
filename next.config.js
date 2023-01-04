module.exports = {
	poweredByHeader: false,
	async rewrites() {
		return [
			{
				source: "/mastodon",
				destination: "https://techhub.social/@daryl"
			},
			{
				source: "/.well-known/webfinger",
				destination: "/api/webfinger"
			},
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
