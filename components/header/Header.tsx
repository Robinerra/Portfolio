import React from 'react'
import style from './header.module.css'
import { IconMapPin, IconMail } from '@tabler/icons'

function Header() {
    return (
        <div id={style.container}>

            <div>
                <p className={style.name}>Elise Willar.</p>
            </div>

            <p>Software Engineer/Web Developer</p>

            <p className={style.subtext}><IconMapPin size={"1em"} /> Nevada, USA </p>
            <p className={style.subtext}><IconMail size={"1em"} /> elisewillar@gmail.com</p>
        </div>
    )
}

export default Header