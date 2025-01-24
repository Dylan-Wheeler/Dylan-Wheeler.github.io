import path from 'path'
import fs from 'fs'
import { redirect } from 'next/navigation'
import matter from 'gray-matter'

export const getPosts = () => {
  const folder = path.join(process.cwd(), 'src/app/thoughts/posts')
  const files = fs.readdirSync(folder)
  const mdFiles = files.filter(file => file.endsWith('.md'))

  return mdFiles.map(filename => {
    const contents = fs.readFileSync(path.join(folder, filename), 'utf8')
    const { data } = matter(contents)

    return {
      ...data,
      slug: filename.replace('.md', '')
    }
  })
}

export const getPostContent = (slug) => {
  const file = path.join(process.cwd(), 'src/app/thoughts/posts', slug) + '.md'
  try {
    const content = fs.readFileSync(file, 'utf8')
    return matter(content)
  } catch (e) {
    redirect("/404")
  }
}
