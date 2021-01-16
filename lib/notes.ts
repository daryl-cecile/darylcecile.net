import fs from 'fs'
import path from 'path'
import {Mark} from './Mark';
import {Note} from "../types";

const postsDirectory = path.join(process.cwd(), 'notes_markdown')

export function getSortedNotesData():Note[] {
  // Get file names under /notes
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData:Note[] = [];

  for (let fileName of fileNames){
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '')

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
      ...matterResult
    });
  }

  // Sort notes by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllNotesSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getNoteData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const markdownParser = new Mark();

  const post = markdownParser.parse(fileContents)

  return {
    slug,
    ...post
  }
}
