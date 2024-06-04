import styles from "./page.module.scss";
import Link from 'next/link'
import { getPosts } from './util/postUtils'

// Lots of the blog handling code was sourced from https://www.singlehanded.dev/blog/building-markdown-blog-with-nextjs-app-router

export default function Blog() {
  const blogPosts = getPosts()

  return (
    <>
      <main className={styles.main}>
        <article className="prose slide-enter-content">
          <h1 className="page-title">Blog</h1>
          {
            blogPosts.sort((a, b) => {Date.parse(a.date) > Date.parse(b.date)}).map(post => (
              <article key={post.slug}>
                <Link href={`blog/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </article>
            ))
          }
        </article>
      </main>
    </>
  );
}
