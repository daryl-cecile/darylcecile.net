import {writeFileSync, readdirSync, readFileSync} from "fs";
import {Feed} from "feed";
import {parseISO} from "date-fns";
import type { Note } from "./types";
import path from "path";
import { Mark } from "./lib/Mark";

const postsDirectory = path.join(process.cwd(), 'notes_markdown');
const getNotes = (ignoreContent?:boolean) => {
	// Get file names under /notes
	const fileNames = readdirSync(postsDirectory)
	const allPostsData:Note[] = [];

	for (let fileName of fileNames){
		// Remove ".md" from file name to get id
		const slug = fileName.replace(/\.(?:md|mdx)$/, '')

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = readFileSync(fullPath, 'utf8');
		const markdownParser = new Mark();

		// Use gray-matter to parse the post metadata section
		const matterResult:Partial<Note> = markdownParser.parse(fileContents);

		if (matterResult.hidden) continue;

		// Combine the data with the id
		allPostsData.push(<Note>{
			slug,
			...matterResult,
			content: !!ignoreContent ? null : matterResult.content,
			renderedContent: !!ignoreContent ? null : matterResult.renderedContent
		});
	}

  	// Sort notes by date
	return allPostsData.sort((a, b) => {
		if ((a.lastUpdated ?? a.date) < (b.lastUpdated ?? b.date)) {
			return 1
		} else {
			return -1
		}
	})
};

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

const notes:{items:Array<Partial<Note>>} = {items:[]};

getNotes(false).forEach(note => {

	feed.addItem({
		title: note.title,
		id: note.slug,
		link: `https://darylcecile.net/notes/${note.slug}`,
		description: '',
		content: note.renderedContent,
		image: `https://darylcecile.net/api/og?slug=${note.slug}`,
		author: [
			{
				name: 'Daryl Cecile',
				email: 'darylcecile@gmail.com',
				link: 'https://darylcecile.net'
			}
		],
		date: parseISO(note.date)
	});

	notes.items.push({
		title: note.title,
		slug: note.slug,
		link: `https://darylcecile.net/notes/${note.slug}`,
		date: note.date,
		readTime: note.readTime,
		image: note.image,
		lastUpdated: note.lastUpdated,
		author: [
			{
				name: 'Daryl Cecile',
				email: 'darylcecile@gmail.com',
				link: 'https://darylcecile.net'
			}
		]
	});

});



writeFileSync("./public/rss.xml", feed.rss2());
writeFileSync("./public/atom.xml", feed.atom1());
writeFileSync("./public/rss.json", feed.json1());
writeFileSync("./public/notes.json", JSON.stringify(notes));
