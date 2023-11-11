import FullWidthBg from '@/components/FullWidthBg/FullWidthBg';
import styles from './Future.module.scss'
import FutureImage from "../../../public/images/future/future.jpg";
import Image from 'next/image';


const Future = () => {
  return (
    <section>
      <FullWidthBg
        type='video'
        url={FutureImage}
        customClass={styles.about_project}  
      >
        <div className={styles.text}>  
          <h2 className={`big-text ${styles.futere_title}`}>EXPERIENCE OF THE FUTURE </h2>
          <p className="first-text">
          Solaris is a blockchain-based meta-universe that has huge potential to grow and attract millions of users from around the world.  Solaris is a unique combination of gameplay, blockchain and token economy with the ability to earn money through pools and in-game activities, SMV promises to be one of the most popular and innovative crypto-games on the market in 2024.
          </p>
          <p>
          In addition to exciting gameplay and unforgettable experience of conquering the universe, our project offers another unique advantage - the opportunity to earn tokens. You can earn tokens by exchanging and freezing your assets, as well as by participating in pools. Our team is looking forward to 2024 to present you our next level steaking system, which will be absolutely revolutionary. We strive to constantly develop and improve our project to provide you with the most advanced earning and investing opportunities.
          </p>
        </div>
      </FullWidthBg>
    </section>
  );
}

export default Future;