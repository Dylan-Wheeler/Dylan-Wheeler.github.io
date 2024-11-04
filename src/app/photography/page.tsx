import ImageGallery from "@/components/ImageGallery";
import styles from "./page.module.scss";
import { getPhotos } from "./util/photosUtils";
import Article, { ArticleSize } from "@/components/Article";

export default function Photography() {
  const allPhotos = getPhotos()

  return (
    <>
      <main className={styles.main}>
        <Article size={ArticleSize.Large}>
          <h1 className="page-title">Photography</h1>
          <ImageGallery images={allPhotos} />
        </Article>
      </main>
    </>
  );
}
