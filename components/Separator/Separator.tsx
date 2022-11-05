import React from 'react'
import style from './separator.module.css'
import styled from 'styled-components'

interface details {
  height: string;
  animated: boolean;
}

function Separator(props: details) {

  let extra = ""

  if (props.animated === true) {
    extra += `${style.animated} `
  }

  switch (props.height) {
    case ("20"):
      extra += `${style.twozero} `
      break;
    case ("40"):
      extra += `${style.fourzero} `
      break;
    default:
      extra += ""
      break;
  }

  return (
    <div className={style.container}>
      <div className={`${extra} ${style.separator}`}>

      </div>
    </div>

  )
}

export default Separator