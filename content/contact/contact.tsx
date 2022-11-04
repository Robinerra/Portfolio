import React from 'react'
import style from './contact.module.css'
import ContactForm from '../../components/contactForm/contactForm'
import Button from '../../components/reveal_button/button'
import Socials from '../../components/socials/socials'


function contact() {
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

export default contact