import { getPostContent, getPosts } from "../../util/postUtils"
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const posts = getPosts()
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

function Post({ params }) {
  const { data, content } = getPostContent(params.slug)
  
  return (
    <main>
      <article className="prose">
        <h1 className="page-title">{data.title}</h1>
        <h2>{new Date(data.date).toLocaleDateString()}</h2>
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </article>
    </main>
  )
}

export default Post