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
            <Project name="bingopup.com" description='(Work in progress) A website for making and sharing bingo sheet memes.' image="/images/projects/bingopup.png" link="" github="" tech={["devicon-nextjs-original", "devicon-react-original colored", "devicon-typescript-plain colored", "devicon-postgresql-plain colored", "devicon-express-original"]}  />



            <Project name="More to come..." description='' image="/images/projects/project.png" />
           
            
          </div>

        </div>
      </div>

    </section>
  )
}

export default Projects