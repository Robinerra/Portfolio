import React from 'react'
import style from './project.module.css'
import Image from 'next/future/image';
import { IconExternalLink, IconBrandGithub } from '@tabler/icons'

interface details {
  name: string;
  image: string;
  description: string;
  link?: string;
  github?: string;
  tech?: Array<string>;
}

function Project(props: details) {
  let linksArray = []
  let devicon: JSX.Element[] = []

  if (props.github) {
    linksArray.push(<a href={`${props.github}`} target="_blank" rel="noreferrer"><IconBrandGithub className={style.icon} /></a>)
  }
  if (props.link) {
    linksArray.push(<a href={`${props.link}`} target="_blank" rel="noreferrer"><IconExternalLink className={style.icon} /></a>)
  }
  if (props.tech) {
    Array.from(props.tech).forEach(i => {
      devicon.push(<i className={`${i} ${style.techIcon}`} />)
    })
  }


  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Image src={props.image} className={style.image} alt="Image of project" width="500" height="500" />

        <div className={style.text}>

          <p className={style.name}>{props.name}</p>

          <p className={style.description}>{props.description}</p>


          <div className={style.externals}>
          <p className={style.icons}>{devicon}</p>
            <p className={style.links}>{linksArray}</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Project

