import fs, { existsSync } from 'fs'
import fsAsync from "fs/promises";
import path from 'path'
import {Mark} from './Mark';
import {Note} from "../types";
import { cache } from 'react';

const postsDirectory = path.join(process.cwd(), 'notes_markdown');

export const getAllNotesDataSorted_UnCached = (ignoreContent?:boolean) => {
	// Get file names under /notes
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData:Note[] = [];

	for (let fileName of fileNames){
		// Remove ".md" from file name to get id
		const slug = fileName.replace(/\.(?:md|mdx)$/, '')

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8');
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

export const getAllNotesDataSorted = cache(getAllNotesDataSorted_UnCached);

export const getAllNotesSlug_UnCached = ()=>{
	const fileNames = fs.readdirSync(postsDirectory)
	return fileNames.map(fileName => {
		return {
				params: {
				slug: fileName.replace(/\.(?:md|mdx)$/, '')
			}
		}
	})
};

export const getAllNotesSlugs = cache(getAllNotesSlug_UnCached);

export const getNoteData_UnCached = async (slug:string, ignoreContent?:boolean) => {
	const fullPath = path.join(postsDirectory, `${slug}.md`)
	
	if (!existsSync(fullPath)) return null;

	const fileContents = await fsAsync.readFile(fullPath, 'utf8')
	const markdownParser = new Mark();

	const post = markdownParser.parse(fileContents)

	return {
		slug,
		...post,
		content: !!ignoreContent ? null : post.content,
		renderedContent: !!ignoreContent ? null : post.renderedContent
	} as Note
};

export const getNoteData = cache(getNoteData_UnCached);