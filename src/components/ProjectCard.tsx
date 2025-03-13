import React from 'react'
import { Col } from 'react-bootstrap'


const ProjectCard = ({img,link}:{img:string,link:string}) => {
  return (
    <Col md={6} lg={6} className='projectCard'>
        <a href={link}>
    <img alt='project' src={`./projekty/${img}`} />
    </a>
  </Col>
  )
}

export default ProjectCard