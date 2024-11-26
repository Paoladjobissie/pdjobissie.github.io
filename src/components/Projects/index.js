import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, from Automation, Monitoring, DevOps, Security to Backup. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'automation' ?
            <ToggleButton active value="automation" onClick={() => setToggle('automation')}>AUTOMATION</ToggleButton>
            :
            <ToggleButton value="automation" onClick={() => setToggle('automation')}>AUTOMATION</ToggleButton>
          }
          <Divider />
          {toggle === 'monitoring' ?
            <ToggleButton active value="monitoring" onClick={() => setToggle('monitoring')}>MONITORING</ToggleButton>
            :
            <ToggleButton value="monitoring" onClick={() => setToggle('monitoring')}>MONITORING</ToggleButton>
          }
          <Divider />
          {toggle === 'devops' ?
            <ToggleButton active value="devops" onClick={() => setToggle('devops')}>DEVOPS</ToggleButton>
            :
            <ToggleButton value="devops" onClick={() => setToggle('devops')}>DEVOPS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects