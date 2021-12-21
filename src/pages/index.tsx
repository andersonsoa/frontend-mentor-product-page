import { Header } from "../components/Header";
import { ImageDisplay } from "../components/ImageDisplay";
import { InfoDisplay } from "../components/InfoDisplay";
import { Layout } from "../components/Layout";

import styles from "./home.module.scss";

export default function Home() {
  const imagePaths = ["/image-product-1.jpg", "/image-product-2.jpg", "/image-product-3.jpg", "/image-product-4.jpg"];
  const thumbnailPaths = [
    "/image-product-1-thumbnail.jpg",
    "/image-product-2-thumbnail.jpg",
    "/image-product-3-thumbnail.jpg",
    "/image-product-4-thumbnail.jpg",
  ];

  return (
    <Layout>
      <Header />
      <main className={styles.container}>
        <div>
          <ImageDisplay images={imagePaths} thumbnails={thumbnailPaths} />
        </div>
        <div>
          <InfoDisplay />
        </div>
      </main>
    </Layout>
  );
}
