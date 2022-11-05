import React, { useState } from 'react'
import style from './contactForm.module.css'
import { IconSend } from '@tabler/icons'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/ffa745d0-5c8d-11ed-b82c-5d75eaa7ccff"

function ContactForm() {


    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {

        setTimeout(() => {

            setSubmitted(true);

        }, 100);
    };


    if (submitted) {
        return (
            <div className={style.container}>
                <h3>Thank you!</h3>
                <p>I&apos;ll get back to you as soon as I can.</p>
            </div>
        )
    }

    return (
        <div className={style.container}>

            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
            >
                <p><b>Interested in working with me?</b> Let&apos;s get in touch.</p>
                <div className={style.section} data-error={"Required"}>

                    <p className={style.text}>Your name or organization</p>
                    <input id={style.nameInput} aria-label="Input your name or organization's name" type="text" name="name/organization" required />

                </div>

                <div className={style.section}>

                    <p className={style.text}>Your email</p>
                    <input id={style.emailInput} aria-label="Input your email" type="email" name="email" required />
                    <p className={style.hint}>I&apos;ll use this to contact you</p>

                </div>

                <div className={style.section}>

                    <p className={style.text}>Your message</p>
                    <textarea aria-label="Input your message" rows={10} cols={28} id={style.messageInput} name="message" required />

                </div>

                <button className={style.submitButton} type="submit"> <IconSend className={style.sendIcon} size="0.8em" /> Send </button>

            </form>
        </div>

    )
}

export default ContactForm