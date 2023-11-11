import FullWidthBg from '@/components/FullWidthBg/FullWidthBg';
import styles from './AboutProject.module.scss'

const AboutProject = () => {
  return (
    <section id="about-project">
      <FullWidthBg
        type='video'
        url={'/videos/AboutProject.mp4'}
        customClass={styles.about_project}  
      >
        <div className={styles.text}>  
          <h2 className="bold">EXPLORE OUTER SPACE</h2>
          <p>
            Venture through the stars and explore more than 10.000 generated planets. Navigate bustling cities, explore dangerous bases, and traverse wild landscapes. Meet and recruita memorable cast of characters, join in the adventures of various factions, and embark on quests across the Settled Systems.
          </p>
        </div>
      </FullWidthBg>
    </section>
  );
}

export default AboutProject;