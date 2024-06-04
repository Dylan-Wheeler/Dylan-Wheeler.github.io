import ImageGallery from "@/components/ImageGallery";
import styles from "./page.module.scss";
import { getPhotos } from "./util/photosUtils";

export default function Photography() {
  const allPhotos = getPhotos()

  return (
    <>
      <main className={styles.main}>
        <article className="prose prose-large">
          <h1 className="page-title">Photography</h1>
          <ImageGallery images={allPhotos} />
        </article>
      </main>
    </>
  );
}
