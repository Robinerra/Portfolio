import React from 'react'
import style from './landing.module.css'
import Header from '../../components/header/header'
import Separator from '../../components/separator/separator'


export default function landing() {
  return (
    <section id="Home">
      <div className={style.container}>
        <Header />
      </div>
    </section>
  )
}
