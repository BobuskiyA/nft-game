import { useContext } from 'react'
import { ScrollContext } from '@/helpers/scrollContext'
import { ScrollProvider } from '@/helpers/scrollProvider'
import HeaderContent from '@/data/HeaderContent.json'
import styles from './Header.module.scss'

const Header = () => {
  const scrollTo = useContext(ScrollContext)

  return (
    <header className={styles.header}>
      <ul className={styles.header_list}>
        {HeaderContent.map(currentLink => (
          <li key={currentLink.title}>
            <a
              href={`#${currentLink.link}`}
              onClick={(event) => scrollTo(event, `#${currentLink.link}`)}
            >
              {currentLink.title}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
