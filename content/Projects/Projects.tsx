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
            <Project name="Placeholder" description='A progressive placeholder element using NextJS and React.' image="/images/project.png" link="elisewillar.com" github="https://github.com/" tech={["devicon-nextjs-original", "devicon-react-original colored", "devicon-typescript-plain colored"]}  />
            
            <Project name="Placeholder" description='A progressive placeholder element using NextJS and React' image="/images/project.png" />
           
            <Project name="Placeholder" description='A progressive placeholder element using NextJS and React' image="/images/project.png" />
            
            <Project name="Placeholder" description='A progressive placeholder element using NextJS and React' image="/images/project.png" />



          </div>

        </div>
      </div>

    </section>
  )
}

export default Projects