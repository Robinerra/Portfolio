import React, { useState } from 'react'
import styled from 'styled-components'
import style from './contactForm.module.css'
import Button from '../reveal_button/button'
import { IconAsterisk, IconCircleCheck, IconCircleX } from '@tabler/icons'

// const FORM_ENDPOINT = "https://public.herotofu.com/v1/ffa745d0-5c8d-11ed-b82c-5d75eaa7ccff";

const FORM_ENDPOINT = ""

function contactForm() {


    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {

        setTimeout(() => {

            setSubmitted(true);

        }, 100);
    };
    if (submitted) {
     

    }

    return (
        <div className={style.container}>

            <iframe name="dummyframe" id={style.dummyframe}></iframe>

            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="dummyframe"
            >
                <p><b>Interested in working with me?</b> Let's get in touch.</p>
                <div className={style.section} data-error={"Required"}>

                    <p className={style.text}>Your name or organization</p>
                    <input id={style.nameInput} type="text" name="name/organization" required />

                </div>

                <div className={style.section}>

                    <p className={style.text}>Your email</p>
                    <input id={style.emailInput} type="email" name="email" required />
                    <p className={style.hint}>I'll use this to contact you</p>

                </div>

                <div className={style.section}>

                    <p className={style.text}>Your message</p>
                    <textarea rows={10} cols={28} id={style.messageInput} name="message" required />

                </div>

                <button type="submit"> Send </button>

            </form>
        </div>

    )
}

export default contactForm