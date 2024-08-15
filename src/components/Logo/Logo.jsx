import Button from '../Button/Button';

import styles from './Logo.module.css';

const Logo = () => {

    return (
        <div className={styles.logolockup}>
            <span className={styles.bebas}>
                <span className={styles.lg}>B</span>rent 
                <span className={styles.colorswap}><span className={styles.lg}>A</span>rsenault</span>
            </span>
            <span className={styles.title}>
                <span className={styles.colorswap}>Front End</span> Developer
            </span>

            <div className={styles.buttons}>
                <Button 
                    url="https://www.linkedin.com/in/brentarsenault/"
                    target="_blank"
                    text="Linkedin" />

                <Button 
                    url="./assets/resume/Brent_Arsenault_Resume.pdf"
                    target="_self"
                    text="Resume" />
            </div>
        </div>
    )
};

export default Logo;