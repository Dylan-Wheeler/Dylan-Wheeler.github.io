import { getPostContent, getPosts } from "../../util/postUtils"
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const posts = getPosts()
 
  return posts.map((post) => ({
    post: post.slug,
  }))
}

function Post({ params }) {
  const { data, content } = getPostContent(params.post)
  
  return (
    <main>
      <article className="prose slide-enter-content">
        <h1 className="page-title post-title">{data.title}</h1>
        <h2 className="post-date">{new Date(data.date).toLocaleDateString("pdt", {timeZone: "UTC"})}</h2>
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </article>
    </main>
  )
}

export default Post