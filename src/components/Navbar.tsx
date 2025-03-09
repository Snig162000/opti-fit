import Link from 'next/link';
import styles from '../styles/global.module.css';

const Navbar = () => {
    return (
        <nav className={styles.topNav}>
            <Link href={'/'}style={{listStyle: 'none'}}>Optifit</Link>
            <span>
            <Link className={styles.tabs} href={'/dashboard'}>Dashboard</Link>
            <Link className={styles.tabs} href={'/meals'}>Meals</Link>
            <Link className={styles.tabs} href={'/workouts'}>Workouts</Link>
            </span>
        </nav>
    );
}

export default Navbar;