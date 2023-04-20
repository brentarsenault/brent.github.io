import classNames from 'classnames';

import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <section className={styles['home-section']}>
      <div className={styles['lockup']}>
          <p className={classNames(styles['maintitle'], 'g-bebas')}>Brent <span className={styles.blue}>Arsenault</span></p>
          <p className={styles.subtitle}><span className={styles.blue}>Front-End</span> Engineer</p>
          {/* <p className={styles.intro}>Father. Coder. Motorsports. Sports. Beer. Snowboarder. At-Home Chef. Explorer.</p> */}
          <div className={styles['link-wrapper']}>
            <a className="g-link" href="mailto:brent1221@gmail.com">Contact Me</a> 
            <a className="g-link" href="https://www.linkedin.com/in/brentarsenault/" target="_blank">LinkedIn</a> 
            <a className="g-link" href="/Arsenault_Brent_Resume.pdf">Resume</a> 
          </div>
      </div>
    </section>
  )
}
