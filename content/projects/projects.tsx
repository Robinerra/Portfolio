import React from 'react'
import style from './projects.module.css'
import Project from '../../components/project/project'

function projects() {
  return (
    <section id="projects">

      <div className={style.container}>
        <div className={style.content}>


          <h1>Projects</h1>

        <div className={style.projectsContainer}>
        <Project name="Placeholder" description='yeahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh' image="/images/project.png"/>
        <Project name="Placeholder" description='yeahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh' image="/images/project.png"/>
        <Project name="Placeholder" description='yeahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh' image="/images/project.png"/>
        <Project name="Placeholder" description='yeahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh' image="/images/project.png"/>

        
        
        </div>

        </div>
      </div>

    </section>
  )
}

export default projects