import FullWidthBg from '@/components/FullWidthBg/FullWidthBg';
import styles from './Head.module.scss'
import headBg from '../../../../public/images/RoadMap/RoadMap_head.jpg'
import Roades from '@/data/RoadMapContent.json'
import AnchorLink from '@/components/AnchorLink/AnchorLink';

const Head = () => {
  return (
    <section>
      <FullWidthBg
        url={headBg}
        type='image'
        classSection={styles.head}
      >
        <h2 className={styles.title}>
          Road Map
          <br />
          Solaris MetaVerse 2023-2024®
        </h2>

        <div className={styles.phases}>
          <h2 className={styles.phases_title}>
            Phase one
          </h2>
          <ul className={styles.phases_list}>
            {Roades.map((currentEvent, i) =>(
              <li key={i} className={styles.phases_item}>
                {
                  currentEvent.href.slice(0, 1) === '#' ? (
                    <AnchorLink
                      toSection={currentEvent.href}
                      customClass={styles.phases_link}
                    >
                      {currentEvent.title}
                    </AnchorLink>
                  ) : (
                  <a
                    href={currentEvent.href}  
                    className={styles.phases_link}
                  >
                    {currentEvent.title}
                  </a>
                  )
                }
              </li>
            ))}

            <li className={styles.phases_item}>
              ?
            </li>
          </ul>
        </div>
      </FullWidthBg>
    </section>
  );
};

export default Head