import React from 'react'
import style from './background.module.css'
import Prism from 'prismjs';


export default function background() {


  //Doing this was such a PAIN.
  //Basically, we have here a bunch of paragraph elements that cover the whole line and slowly have their width changed to 0 using a CSS animation.


  //This thing just tells prisim (What I used for syntax highlighting) to highlight the text in the code block below when everything's ready.
  () => {
    Prism.highlightAll();

  }

  //I scream in terror. 
  return (
    <div className={style.container}>
      <div className={style.hiders}>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>

      <pre>
        <code className={`language-javascript ${style.typing}`}>
          {`import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
import Description from '../components/description/description'
import Footer from '../components/footer/footer'
import Nav from '../components/nav/nav'
import Background from '../components/background/background'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Elise Willar.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        {
          //SEO is very important
        }
        <meta name="description" content="Elise Willar, Software Engineer & Web Developer." />
        <meta name="author" content="Elise Willar" />
        {
          //This is obscure, it basically lets you change an accent color in the native UI on android devices. 
          //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
        }
        <meta name="theme-color" content="#F96E46" />

      //Easter egg
      </Head>
      <Background/>
      <Header/>
      <Nav/>
      <Description/>
      <Footer/>
      </div>
  )
}

export default Home
                     `}
        </code>
      </pre>

    </div>
  )
}
