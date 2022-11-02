import React from 'react'
import style from './landing.module.css'
import Header from '../../components/header/header'
import Separator from '../../components/separator/separator'


export default function landing() {
  return (
    <div className={style.container}>
        <Header/>
        <Separator animated={true} height="40vh"/>
    </div>
  )
}
