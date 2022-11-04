import React from 'react'
import style from './contact.module.css'
import ContactForm from '../../components/contactForm/ContactForm'
import Button from '../../components/reveal_button/Button'
import Socials from '../../components/socials/Socials'


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