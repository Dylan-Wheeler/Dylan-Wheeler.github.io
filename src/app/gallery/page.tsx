import Article from "@/components/Article";
import styles from "./page.module.scss";

export default function Gallery() {
  return (
    <>
      <main className={styles.main}>
        <Article>
          This is the gallery page!
        </Article>
      </main>
    </>
  );
}
