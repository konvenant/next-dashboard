import React from 'react'
import styles from "./rightbar.module.css"
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
     <div className={styles.item}>
       <div className={styles.bgContainer}>
        <Image
        src="/astronaut.png"
        alt=''
        fill
        className={styles.bg}
        />
       </div>
       <div className={styles.texts}>
        <span className={styles.notification}> 🔥  Available Now</span>
        <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>  
        <span className={styles.subtitle}>Takes 4 minutes to learn</span>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
        <button className={styles.button}>
          <MdPlayCircleFilled />
          Watch
        </button>
     </div>
     </div>

     <div className={styles.item}>
       <div className={styles.texts}>
        <span className={styles.notification}> 🔥  Available Now</span>
        <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>  
        <span className={styles.subtitle}>Takes 4 minutes to learn</span>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
        <button className={styles.button}>
          <MdPlayCircleFilled />
          Watch
        </button>
     </div>
     </div>
    </div>
  )
}

export default Rightbar