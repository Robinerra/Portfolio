import React from 'react'
import { StyleRegistry } from 'styled-jsx';
import style from './button.module.css'

interface details {
    text: string;
    url: string;
    newtab: boolean;
}

function button(props:details) {
  let additional = ""

  if (props.newtab === true) {
    additional += "_target"
  }

  

  return (
    <a href={props.url} target={additional} rel="noreferrer noopener" className={style.button}>{props.text}</a>

)
}

export default button