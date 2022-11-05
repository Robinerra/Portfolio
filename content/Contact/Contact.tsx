import React from 'react'
import style from './contact.module.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import Button from '../../components/Reveal_button/Button'
import Socials from '../../components/Socials/Socials'


function Contact() {
    return (
        <section id="contact">

            <div className={style.container}>


                <div className={style.form}>
                    <ContactForm />
                </div>
                <div className={style.text}>
                    <p>Copyright (C) 2022 Elise Willar</p>
                    <Socials />
                </div>

            </div>
        </section>
    )
}

export default Contact