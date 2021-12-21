import classNames from "classnames";
import NextImage from "next/image";
import { useState } from "react";

import styles from "./styles.module.scss";

interface ImageDisplayProps {
  images: string[];
  thumbnails: string[];
}

export const ImageDisplay = ({ images }: ImageDisplayProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleThumbClassName = (idx: number) => {
    return classNames({
      [styles.display__thumb_active]: idx === currentImage,
      [styles.display__thumb_item]: true,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.display__main}>
        <NextImage
          src={images[currentImage]}
          alt="image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.display__thumb_list}>
        {images.map((image, index) => (
          <div
            className={handleThumbClassName(index)}
            key={index}
            onClick={() => setCurrentImage(index)}
          >
            <NextImage src={image} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
