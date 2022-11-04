import React from 'react'
import style from './contact.module.css'
import ContactForm from '../../components/contactForm/contactForm'
import Button from '../../components/reveal_button/button'

function contact() {
    return (
        <section id="contact">

            <div className={style.container}>
      
        
                <div className={style.form}>
                    <ContactForm />
                </div>
                <div className={style.text}>
                    <p>Copyright (C) 2022 Elise Willar</p>
                    <Button url="./Resume" newtab={true} text="Resume" iconName="IconFileDownload" iconSize="16" iconColor='white' />
                </div>

            </div>
        </section>
    )
}

export default contact