import FullWidthBg from '@/components/FullWidthBg/FullWidthBg';
import styles from './Story.module.scss'

const Story = () => {
  return (
    <section id="story">
      <FullWidthBg
        type='video'
        url={'/videos/Game.mp4'}
        customClass={styles.story}  
      >
        <div className={styles.text}>  
          <h2 className="bold">TELL YOUR STORY</h2>
          <p>
          In SolarisMetaverse™ the most important story is the one you tell with your character. Start your journey by customizing your appearance and deciding your Background and Traits. The choice is yours. Decide who you will be and what you will become.
          </p>
        </div>
      </FullWidthBg>
    </section>
  );
}

export default Story;