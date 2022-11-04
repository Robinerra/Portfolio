import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Landing from '../content/landing/landing'
import About from '../content/about/about'
import Projects from '../content/projects/projects'
import Separator from '../components/separator/separator'
import Contact from '../content/contact/contact'

const Home: NextPage = () => {

  return (
    <div id="mainContainer">
      <Head>

        <title>Elise Willar.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {
          //SEO is very important
        }
        <meta name="description" content="Software Engineer & Web Developer." />
        <meta name="author" content="Elise Willar" />
        {
          //This is obscure, it basically lets you change an accent color in the native UI on android devices. 
          //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
        }
        <meta name="theme-color" content="#F96E46" />
      </Head>

      <Landing />

      <Separator animated={true} height="40" />

      <About />

      <Separator height="20" animated={false} />

      <Projects />

      <Separator height="20" animated={false} />

      <Contact />

    </div>

  )
}

export default Home


