import React from 'react'
import style from './separator.module.css'
import styled from 'styled-components'

interface details {
  height: string;
  animated: boolean;
}

function separator(props: details) {
  
  let extra = ""
  
  if (props.animated === true) {
      extra += `${style.animated} `
  }

  switch(props.height) {
      case("20"):
        extra += `${style.twozero} `
        break;
      case("40"):
        extra += `${style.fourzero} `
        break;
      default:
        extra += ""        
        break;
  }

  return (

    <div className={`${extra} ${style.separator}`}>
      
    </div>

  )
}

export default separator