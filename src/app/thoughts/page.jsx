import { TransitionLink } from "@/components/TransitionLink";
import styles from "./page.module.scss";
import { getPosts } from './util/postUtils'
import Article from "@/components/Article";

// Lots of the blog handling code was sourced from https://www.singlehanded.dev/blog/building-markdown-blog-with-nextjs-app-router

export default function Blog() {
  const blogPosts = getPosts()

  return (
    <>
      <main className={styles.main}>
        <Article>
          <h1 className="page-title">Thoughts</h1>
          <ul className="thoughts-list nested-slide-enter-content">
          {
            blogPosts.sort((a, b) => {Date.parse(a.date) > Date.parse(b.date)}).map(post => (
              <li className="thoughts-list-item" key={post.slug}>
                <TransitionLink className="thoughts-list-item-text" href={`thoughts/posts/${post.slug}`}>
                  <span className="thoughts-list-item-date">{new Date(post.date).toLocaleDateString("pdt", {timeZone: "UTC", year: "numeric", month: "short"})}</span>
                  {post.title}
                </TransitionLink>
              </li>
            ))
          }
          </ul>
        </Article>
      </main>
    </>
  );
}
