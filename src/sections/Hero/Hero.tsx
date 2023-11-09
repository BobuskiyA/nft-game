import FullWidthImage from "@/components/FullWidthImage/FullWidthImage";
import HeroImage from "../../../public/images/Starfield-IntoTheStarfield_Wallpaper_3840x2160-01.jpg";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section>
      <FullWidthImage
        image={HeroImage}
        alt="hero"
        classSection={styles.hero}
      >
        <p className={`small-text ${styles.under_header}`}>
          Connect MetaMask wallet and get 150$ols Token as a gift, which will be
          capitalized in 2024.
        </p>
        <button className={styles.pop_up_button} />

        <div className={styles.download}>
          <h2 className={`bold ${styles.download_title}`}>
            <span className={styles.download_title_blur}>Start</span>
            closed beta test
          </h2>

          <button className={styles.download_button}>Start the engine</button>

          <p className={`bold ${styles.download_sub_title}`}>
            WORLDWIDE RELEASE 09.06.2024
          </p>
        </div>

        <div className={styles.about}>
          <h1 className={styles.about_title}>
            <span className="bold">Solaris</span> Metaverse
          </h1>

          <h2>
            Developed on Frostbite
          </h2>
          <h2 className="bold">
            ONLY FOR PC
          </h2>

          <div className={styles.buttons}>
            
          </div>
        </div>
      </FullWidthImage>
    </section>
  );
};

export default Hero;
