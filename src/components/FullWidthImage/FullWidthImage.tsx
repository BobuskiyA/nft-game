import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import styles from './FullWidthImage.module.scss'

type Props = {
  image: string | StaticImport,
  alt: string,
  children: ReactNode
  customClass?: string
  classSection?: string
}

const FullWidthImage: FC<Props> = ({
  image,
  alt,
  children,
  customClass = '',
  classSection = ''
}) => {
  const classForImage = customClass ? `${styles.image} ${customClass}` : `${styles.image}`
  const classForSection = classSection ? `${styles.full_width_image} ${classSection}` : `${styles.full_width_image}`

  return (
    <div className={classForSection}>
      <Image
        src={image}
        alt={alt}
        className={classForImage}
      />
      {children}
    </div>
);
};

export default FullWidthImage;
