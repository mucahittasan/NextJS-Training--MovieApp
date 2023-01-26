import Link from 'next/link'
import {BsFillPlayCircleFill} from 'react-icons/bs'

import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <BsFillPlayCircleFill /> NETFILMS
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="">Movies</Link>
          <Link href="">Series</Link>
          <Link href="">Kids</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header