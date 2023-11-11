import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import HeroImage from "../../../public/images/hero/backgroung.jpg";
import AnchorLink from '@/components/AnchorLink/AnchorLink';
import Image from 'next/image';

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section>
      <FullWidthBg
        url={HeroImage}
        alt="hero"
        classSection={styles.hero}
      >
        <p className={`small-text ${styles.under_header}`}>
          Connect MetaMask wallet and get 150$ols Token as a gift, which will be
          capitalized in 2024.
        </p>
        <button className={styles.pop_up_button} />

        <div className={styles.download}>
          <div className={styles.download_top}>
            Has your application been approved yet?
            <h2 className={`bold ${styles.download_title}`}>
            <span className={styles.download_title_blur}>Start</span>
            closed beta test
          </h2>
          </div>
          

          <button className={styles.download_button}>Start the engine</button>

          <p className={`bold ${styles.download_sub_title}`}>
            WORLDWIDE RELEASE
            <br />
            09.06.2024
          </p>
        </div>

        <div className={styles.about}>
          <h1 className={styles.about_title}>
            <span className="bold">Solaris</span> Metaverse
          </h1>

          <h2 className={styles.about_sub_title}>
            Developed on Frostbite
          </h2>
          <h2 className={`bold ${styles.about_sub_title_adding}`}>
            ONLY FOR PC
          </h2>

          <div className={styles.buttons}>
            <AnchorLink
              toSection='#'
              customClass={styles.about_link}
            >
              Game experience
            </AnchorLink>
            <AnchorLink
              toSection='#'
              customClass={styles.about_link}
            >
              Project information
            </AnchorLink>
            <AnchorLink
              toSection='#'
              customClass={styles.about_link_leviathan}
            >
              $100,000?
            </AnchorLink>
          </div>
        </div>

        <div className={styles.bottom}>
          <div
            className={styles.planet}
          />
        </div>
      </FullWidthBg>
    </section>
  );
};

export default Hero;
