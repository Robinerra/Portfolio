import React from 'react'
import style from './separator.module.css'
import styled from 'styled-components'

interface details {
  height: string;
  animated: boolean;
}

const Div = styled.div<{height: string;}>`
height: ${props => props.height}
`;

function separator(props: details) {
  

  let extra = ""
  
  if (props.animated === true) {
      extra += `${style.animated}`
  }

  return (


    <Div height={props.height} className={`${style.separator} ${extra}`}/>

  )
}

export default separator