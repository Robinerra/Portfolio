import React from 'react'
import style from './header.module.css'
import Image from 'next/image'
import hand_waving from './waving_hand.png'
import { IconMapPin, IconMail } from '@tabler/icons'
import Button from '../reveal_button/button'
import Socials from '../socials/socials'

function header() {
  return (

    <div id={style.container}>

      <div className={style.greeting}>
        <p><Image className={style.waving} alt="Waving hand" src={hand_waving} width="24px" height="24px" /> Hello, I&apos;m</p>
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

export default header