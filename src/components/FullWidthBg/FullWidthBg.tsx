import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";
import styles from "./FullWidthBg.module.scss";

type Props = {
  url: string | StaticImageData;
  children: ReactNode;
  alt?: string;
  customClass?: string;
  classSection?: string;
  type?: "video" | "image";
};

const FullWidthBg: FC<Props> = ({
  url,
  alt,
  children,
  customClass = "",
  classSection = "",
  type = "image",
}) => {
  const classForBg = customClass
    ? `${styles.image} ${customClass}`
    : `${styles.image}`;
  const classForSection = classSection
    ? `${styles.full_width_image} ${classSection}`
    : `${styles.full_width_image}`;

  return (
    <div className={classForSection}>
      {type === "video" && typeof url === "string" ? (
        <video
          loop
          muted
          autoPlay
          className={classForBg}
        >
          <source src={url} />
        </video>
      ) : (
        <Image
          src={url}
          alt={alt ? alt : 'background'}
          className={classForBg}
        />
      )}

      {children}
    </div>
  );
};

export default FullWidthBg;
