import type { NextPage } from 'next'
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
        {
        //Keywords are mostly obsolete at this point but still have some purpose.
        }
        <meta name="keywords" content="Elise Willar, Portfolio, Software Engineer, Web Developer, Programmer, Willar, Elise, Ellie Willar, Ellie, NodeJS, Javascript, PERN, Postgres, React, NextJS, Developer, React.js" />
        <meta name="author" content="Elise Willar" />
        {
          //This is obscure, it basically lets you change an accent color in the native UI on android devices. 
          //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
        }
        <meta name="theme-color" content="#F96E46" />


      </Head>
      <Background/>
      {/* <Background2/> */}
      <Header/>
      <Nav/>
      <Description/>
      <Footer/>
      </div>
  )
}

export default Home
