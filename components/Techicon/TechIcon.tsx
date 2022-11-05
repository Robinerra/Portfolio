import React from 'react'
import style from "./techIcon.module.css"

interface details {
    name: string
    link: string
    icon: string
}

function TechIcon(props: details) {

    return (
        <li>
            <a href={props.link} tabIndex={-1} target={"_blank"} rel="noreferrer" className={style.link}>
                <i className={props.icon} /> {props.name}
            </a>
        </li>
    )
}

export default TechIcon