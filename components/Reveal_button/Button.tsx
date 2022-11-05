import React, { ComponentElement } from 'react'
import { StyleRegistry } from 'styled-jsx';
import style from './button.module.css'
import { IconFileDownload, IconArrowDown, IconSend } from "@tabler/icons"

interface details {
  text: string;
  url: string;
  newtab: boolean;
  //Icon stuff
  iconName: string;
  iconSize: string;
  iconColor: string;
}

function Button(props: details) {
  let tabTarget = ""
  let icon = []

  if (props.newtab === true) {
    tabTarget += "_target"
  }

  //Hardcoding it is the only way since icons are components in tablericons

  //No need to run if there's no icon name value
  if (props.iconName) {
    switch (props.iconName) {

      case ("IconFileDownload"):
        icon.push(<IconFileDownload className={style.icon} size={props.iconSize} color={props.iconColor} />);
        break;

      case ("IconArrowDown"):
        icon.push(<IconArrowDown className={style.icon} size={props.iconSize} color={props.iconColor} />);
        break;

      case ("IconSend"):
        icon.push(<IconSend className={style.icon} size={props.iconSize} color={props.iconColor} />);
        break;
    }


  }


  return (
    <div className={style.container}>


      <a href={props.url} target={tabTarget} rel="noreferrer noopener" className={style.button}>


        <div className={style.circle}>
          {icon}
        </div>

        <div className={style.text}>
          {props.text}
        </div>

      </a>

    </div>

  )
}

export default Button