import React from 'react'
import Button from '../button/button'
import style from './nav.module.css'

function nav() {
  return (
    <div className={style.container}>
              <Button url="/resume.pdf" newtab={true} text="Resume" /> - <Button newtab={true} url="/projects" text="Projects" />
    </div>
    
  )
}

export default nav