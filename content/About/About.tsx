import React from 'react'
import style from './about.module.css'
import TechIcon from '../../components/Techicon/TechIcon'

function About() {
  return (
    <section id="about">

      <div className={style.container}>

        <div className={style.section}>

          <h1>Hey.</h1>
          <p>
            I'm Elise Willar. I started programming in 2017 as a hobby, making chatbots in Discord using NodeJS & Discord.JS.
            <br />
            I quickly discovered that I love programming, so I got more advanced in NodeJS and worked it almost every day.
          </p>
          <p>
            It's 5 years later in 2022 and I've realized this is what I want to do for a living, something I love and that I'm passionate in.
            <br />            <br />

            I'm good at:
          </p>
          <ul className={style.skills}>
            <TechIcon icon="devicon-nodejs-plain colored" name="NodeJS" link="https://nodejs.org/en/" />
            <TechIcon icon="devicon-typescript-plain colored" name="Typescript" link="https://www.typescriptlang.org/" />
            <TechIcon icon="devicon-react-original colored" name="React" link="https://reactjs.org/" />
            <TechIcon icon="devicon-nextjs-original" name="NextJS" link="https://nextjs.org/" />
            <TechIcon icon="devicon-html5-plain colored" name="HTML" link="https://html.spec.whatwg.org/" />
            <TechIcon icon="devicon-css3-plain colored" name="CSS" link="https://www.w3.org/Style/CSS/Overview.en.html" />
            <TechIcon icon="devicon-express-original" name="Express" link="https://expressjs.com/" />
            <TechIcon icon="devicon-postgresql-plain colored" name="Postgresql" link="https://www.postgresql.org/" />
            <TechIcon icon="devicon-mongodb-plain colored" name="MongoDB" link="https://www.mongodb.com/" />          </ul>
          <p>I'm learning:</p>

          <ul className={style.skills}>
            <TechIcon icon="devicon-vuejs-plain colored" name="Vue" link="https://vuejs.org/" />
            <TechIcon icon="devicon-php-plain colored" name="PHP" link="https://www.php.net/" />
            <TechIcon icon="devicon-adonisjs-original" name="Astro" link="https://astro.build/" />


          </ul>

          <p>But don't worry if this doesn't align perfectly with your techstack, i'm a very fast and eager learner.</p>
        </div>
      </div>
    </section >

  )
}

export default About
