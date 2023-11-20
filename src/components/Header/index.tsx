import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';

import Link from 'next/link';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerComtent}>
                <a href="#">
                    <Image src={logo} alt='Tech por nascimento logo' />
                </a>

                <nav>

                    <Link href="/">
                        <a>Home</a>
                    </Link>

                    <Link href="/posts">
                        <a>Posts</a>
                    </Link>

                    <Link href="/sobre">
                        <a>Quem somos?</a>
                    </Link>

                </nav>

                <a className={styles.buttonReady} href="http://">COMEÇAR</a>

            </div>
        </header>
    );
}