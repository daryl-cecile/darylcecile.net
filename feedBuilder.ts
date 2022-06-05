import {writeFileSync} from "fs";
import {Feed} from "feed";
import {getSortedNotesData} from "./lib/notes";
import {parseISO} from "date-fns";

const feed = new Feed({
	title: 'Daryl Cecile',
	description: 'My notes',
	id: 'https://darylcecile.net',
	link: 'https://darylcecile.net',
	language: 'en',
	image: 'https://darylcecile.net/images/core/header.png',
	favicon: 'https://darylcecile.net/images/core/profile.ico',
	copyright: `Daryl Cecile © ${new Date().getFullYear()}`,
	generator: 'mFeed',
	feedLinks: {
		json: "https://darylcecile.net/rss/json",
		atom: "https://darylcecile.net/rss/atom",
	},
	author: {
		name: 'Daryl Cecile',
		email: 'darylcecile@gmail.com',
		link: 'https://darylcecile.net'
	}
});

getSortedNotesData(false).forEach(note => {

	feed.addItem({
		title: note.title,
		id: note.slug,
		link: `https://darylcecile.net/notes/${note.slug}`,
		description: '',
		content: note.renderedContent,
		author: [
			{
				name: 'Daryl Cecile',
				email: 'darylcecile@gmail.com',
				link: 'https://darylcecile.net'
			}
		],
		date: parseISO(note.date),

	})

});



writeFileSync("./public/rss.xml", feed.rss2());
writeFileSync("./public/atom.xml", feed.atom1());
writeFileSync("./public/rss.json", feed.json1());
