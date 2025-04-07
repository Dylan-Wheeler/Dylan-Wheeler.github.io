import React from 'react'
import Footer from './Footer'

export enum ArticleSize {
  Large = 'large',
  Regular = 'regular',
  Gallery = 'gallery',
}

type ArticleProps = {
  children: React.JSX.Element | React.JSX.Element[] | string,
  size?: ArticleSize,
}

function Article(props: ArticleProps) {
  const articleClass = `prose slide-enter-content ${props.size === ArticleSize.Large ? "prose-large" : ""} ${props.size === ArticleSize.Gallery ? "prose-gallery" : ""}`;
  return (
    <article className={articleClass}>
      {props.children}
      <Footer />
    </article>
  )
}

export default Article