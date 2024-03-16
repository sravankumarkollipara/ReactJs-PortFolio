import React from 'react';
import { GrCloudSoftware } from "react-icons/gr";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from 'styled-components'
import Card from './Card';
import { Slide } from 'react-awesome-reveal';

const Services = () => {
  return (
    <Container id='service'>
      <Slide direction="down">
        <h4>My<span className="green">Services</span></h4>
        <h1>What I Do</h1>
        </Slide>
        <Cards>
        <Slide direction="left">
            <Card
            Icon={GrCloudSoftware}
            title={"software developer"}
            disc={`A software developer is responsible for creating, coding,
             and debugging software applications or systems. They collaborate with team members to design solutions, write efficient code, and conduct thorough testing to ensure functionality and quality. Additionally, they continuously learn and adapt to new technologies, contribute to documentation, and support deployed software.`}/>
            </Slide>
            <Slide direction="up">
            <Card
            Icon={FiCodesandbox}
            title={"Web designer"}
            disc={`web designer is a creative professional who specializes in designing visually appealing and user-friendly websites. They combine technical skills with artistic flair to create layouts, graphics, and interfaces that effectively communicate a client's message or brand identity. Web designers often work closely with clients or project managers to understand requirements, develop concepts.`}/>
          </Slide>
          <Slide direction="right">
        <Card
            Icon={CgWebsite}
            title={"Code Analyzer"}
            disc={`A code analyzer is a software tool used by developers to automatically review and analyze source code for potential bugs, vulnerabilities, and performance issues. It scans through the codebase, identifies coding patterns, and provides insights and recommendations to improve code quality, maintainability, and efficiency. Code analyzers help developers catch errors early in the development process.`}/>
        </Slide>
        </Cards>
        
    </Container>
  )
}

export default Services
const Container=styled.div`
width:80%;
max-width:1280px;
margin:0 auto;
padding:3rem 0;
@media(max-width:840px){
  width:90%;
}
h1{
    padding-top:1rem;
}
`
const Cards=styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
margin-top:4rem;
gap:1rem;
`