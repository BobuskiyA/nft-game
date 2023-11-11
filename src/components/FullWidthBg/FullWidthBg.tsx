import Image, { StaticImageData } from "next/image";
import { FC, ReactNode, forwardRef, ForwardedRef } from "react";
import styles from "./FullWidthBg.module.scss";

type Props = {
  url: string | StaticImageData;
  children: ReactNode;
  alt?: string;
  customClass?: string;
  classSection?: string;
  type?: "video" | "image";
};

const FullWidthBg = forwardRef<HTMLDivElement, Props>(({
  url,
  alt,
  children,
  customClass = "",
  classSection = "",
  type = "image",
  ...props
}, ref) => {
  const classForBg = customClass
    ? `${styles.image} ${customClass}`
    : `${styles.image}`;
  const classForSection = classSection
    ? `${styles.full_width_image} ${classSection}`
    : `${styles.full_width_image}`;

  return (
    <div className={classForSection} ref={ref} {...props}>
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
});

FullWidthBg.displayName = 'FullWidthBg';

export default FullWidthBg;
