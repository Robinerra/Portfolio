import React from 'react'
import style from './header.module.css'
import Image from 'next/future/image'
import hand_waving from './waving_hand.png'
import Socials from '../Socials/Socials'

function Header() {
  return (

    <div id={style.container}>

      <div className={style.greeting}>
        <p><Image className={style.waving} alt="Waving hand" src={hand_waving} /> Hello, I&apos;m</p>
      </div>

      <div id={style.textContainer}>

        <p className={style.name}>Elise Willar,</p>

        <p className={style.title}>Software Engineer & Web Developer.</p>

        <div className={style.socials}>
          <Socials />
        </div>
      </div>
    </div>

  )
}

export default Header