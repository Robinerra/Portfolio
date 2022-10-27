import React from 'react'
import style from './description.module.css'
import Button from '../button/button'


function description() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h3 className={style.textAlignLeft}>An introduction to me,</h3>


        <p>I started programming in 2017 by writing Discord chatbots with NodeJS using Discord.JS as a hobby during middleschool.
          I quickly gained a love for programming and started doing it every day, building more complex features for my bots and branching into new fields.
          <br /><br />
          5 years later in 2022, after programming every day, switching to linux, exploring video game development, web development, servers, networking, advanced javascript and tons of APIs and modules, I realized this is what I want to do for a living.<br /><br />
        </p>

        <h3>Outside of programming,</h3>
        <p>
          I enjoy cycling, cooking, music (I play the piano), gaming, art, preserving technology and music, electronic hardware, photography and hiking.
        </p>
      </div>
    </div >
  )
}

export default description