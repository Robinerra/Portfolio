import React from 'react'
import style from './project.module.css'
import Image from 'next/image';

interface details {
    name: string;
    image: string;
    description:string;
}

function project(props: details) {


  return (
    <div className={style.container}>
        <Image src={props.image} width="100%" height="100%"/>

        <p className={style.name}>{props.name}</p>
        <p className={style.description}>{props.description}</p>
    </div>
  )
}

export default project