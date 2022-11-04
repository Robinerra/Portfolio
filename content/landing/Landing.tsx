import React from 'react'
import style from './landing.module.css'
import Header from '../../components/header/Header'
import Separator from '../../components/separator/Separator'


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