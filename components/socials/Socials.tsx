import React from 'react'
import style from './socials.module.css'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons'
import Button from '../reveal_button/Button'

function Socials() {
    return (
        <div className={style.container}>
            <a href="https://github.com/Robinerra" rel="noreferrer" target={"_blank"}> <IconBrandGithub /> </a>
            <a href="https://www.linkedin.com/in/elise-willar-96a743254/" rel="noreferrer" target={"_blank"}> <IconBrandLinkedin /> </a>
            <p className={style.separate}>/</p>
            <Button url="./resume.pdf" newtab={true} text="Resume" iconName="IconFileDownload" iconSize="16" iconColor='white' />
        </div>
    )
}

export default Socials