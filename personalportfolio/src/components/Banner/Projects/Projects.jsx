import React from 'react'
import styled from 'styled-components'
import SliderComp from './SliderComp';
import { Zoom } from 'react-awesome-reveal';
const Projects = () => {
  return (
    <Container id='project'>
      <Zoom>
        <h1>Recent  <span className="green">Projects</span></h1>
        <p>I have recently completed several projects showcasing my expertise in web development and application design. One of the projects involved developing a secure and user-friendly banking web application using HTML, CSS, JavaScript,jdbc,servelts and oracle database . This application included features such as user authentication, account management, fund transfers, and transaction history. Another project was the creation of a dynamic music website called "Boost Master" using HTML, CSS, JavaScript. This website featured interactive elements for music browsing, playlists, artist profiles, and personalized recommendations. Both projects prioritized data security, responsive design, and seamless user experience.</p>
            </Zoom>
    <Slide>
        <SliderComp/>
    </Slide>
    </Container>
  )
}

export default Projects;
const Container=styled.div`
        width:80%;
        max-width:1280px;
        margin:0 auto;
        padding:3rem 0;
        text-align:center;
        @media(max-width:840px)
        {
          width:90%;
        }
        h1{
            font-size:1.9rem;
        }
        p{
            width:28rem;
            margin:0 auto;
            padding:1rem 0;
            font-size:0.9rem;
            @media(max-width:500px)
            {
              width:90%;
            }
        }
`
const Slide=styled.div``