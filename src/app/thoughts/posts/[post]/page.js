import Footer from "@/components/Footer"
import { getPostContent, getPosts } from "../../util/postUtils"
import ReactMarkdown from 'react-markdown'
import { TransitionLink } from "@/components/TransitionLink"

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
        <div className="post-back-button-container">
          <TransitionLink id='post-back-button' className="icon-button" href={`..`}><span className="material-symbols-outlined">chevron_backward</span></TransitionLink>
        </div>

        <h1 className="page-title post-title">{data.title}</h1>
        <h2 className="post-date">{new Date(data.date).toLocaleDateString("pdt", {timeZone: "UTC"})}</h2>
        <hr/>
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
        <Footer/>
      </article>
    </main>
  )
}

export default Post