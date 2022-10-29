import React from 'react'
import style from './header.module.css'
import Image from 'next/image'
import Button from '../button/button'
import hand_waving from './waving_hand_yellow.png'
import { IconMapPin, IconMail } from '@tabler/icons'


function header() {
  return (

    <div id={style.container}>


          <div className={style.greeting}>
            <p><Image className={style.waving} src={hand_waving} width="24px" height="24px" /> Hello, I'm</p>
          </div>


          <p className={style.name}>Elise Willar,</p>

          <p className={style.title}>Software Engineer & Web Developer.</p>

          <p className={style.subtext}><IconMapPin size={"1em"} /> Nevada, USA </p>
          <p className={style.subtext}><IconMail size={"1em"} /> elisewillar@gmail.com</p>
        
      </div>

  )
}

export default header