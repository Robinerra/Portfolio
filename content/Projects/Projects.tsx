import React from 'react'
import style from './projects.module.css'
import Project from '../../components/Project/Project'

function Projects() {
  return (
    <section id="projects">

      <div className={style.container}>

        <div className={style.content}>


          <h1>Projects & Work</h1>

          <div className={style.projectsContainer}>
            <Project name="elisewillar.com" description='A portfolio using NextJS and React.' image="/images/projects/portfolio.png" link="elisewillar.com" github="https://github.com/Robinerra/Portfolio" tech={["devicon-nextjs-original", "devicon-react-original colored", "devicon-typescript-plain colored"]}  />
            
            <Project name="More to come..." description='The journey has just now begun.' image="/images/projects/project.png" />
           
            
          </div>

        </div>
      </div>

    </section>
  )
}

export default Projects