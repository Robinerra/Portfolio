import React from 'react'
import style from './landing.module.css'
import Header from '../../components/Header/Header'
import Separator from '../../components/Separator/Separator'


function Landing() {
  return (
    <section id="Home">
      <div className={style.container}>
        <Header />
      </div>
    </section>
  )
}

export default Landing