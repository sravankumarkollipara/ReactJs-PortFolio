import React from 'react'
import styled from 'styled-components'
import {AiOutlineInstagram} from "react-icons/ai";
import {GiEarthAmerica} from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import {Slide} from "react-awesome-reveal";
const ProfComponent = () => {
  return (
    <Container id="home">
        <Slide direction="left">
        
        <Texts>
            <h4>Hello buddy,<span className="green">I'm</span></h4>
            <h1 className="green">Sravan kumar</h1>
            <h3>Java Developer and Web Designer</h3><br></br>
            <p>Passionate Java developer specializing in backend and frontend development. Experienced in code analysis for optimization and best practices adherence. Dedicated to delivering efficient and reliable software solutions.</p>
                <button>Let's Talk</button>
                <Social>
                    <p>Check out My</p>
                    <div className="social-icons">
                    <span><a href="#"><AiOutlineInstagram/></a></span>
                    <span><a href="#"><GiEarthAmerica/></a></span>
                    <span><a href="#"><FaLinkedin/></a></span>
                    </div>
                </Social>
        </Texts>
        </Slide>
        <Slide direction="right">
        <Profile>
            <div className="image-wrapper">
            <img  src="sravan3.jpg" alt="profile"></img>
            </div>
        </Profile>
        </Slide>
    </Container>
  )
}

export default ProfComponent;
const Container=styled.div`
    display:flex;
    gap:2rem;
    padding-top:2rem;
    width:80%;
    max-width:1280px;
    margin:0 auto;
    
    @media(max-width:840px){
        width:90%;
    }
    @media(max-width:640px){
        flex-direction:column;
    }
h3{
    color:brown;
}


`
const Texts=styled.div`
    flex;
    h4{
        padding:1rem 0;
        font-weight:500;
    }
    h1{
        font-size:2rem;
        font-family:'secular-One',sans-serif;
        letter-spacing:2px;
        font-style:italic;
    }
    h3{
        font-weight:500;
        font-size:1.2rem;
        padding-button:1.2rem;
        text-transform:capitalize;
    }
    p{
        font-weight:300;
    }
    button{
        padding:0.7rem 2rem;
        margin-top:3rem;
        cursor:pointer;
        background-color:#01be96;
        border:none;
        color:#fff;
        font-weight:500;
        filter:drop-shadow(0px 10px 10px #01be9551);
        :hover{
                    filter:drop-shadow(0px 10px 10px #01be9570);
                }
    }

`
const Social=styled.div`
        margin-top:3rem;
        display:flex;
        align-items:center;
        gap:1rem;

        p{
            font-size:0.9rem;
            @media(max-width:690px){
                font-size:0.7rem;
            }

        }
        .social-icons{
            display:flex;
            align-items:center;
            gap:1rem;
            span{
                width:2.3rem;
                height:2rem;
                clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
                background-color:#01be96;
                position:relative;
                transition: transform 400ms ease-in-out;

                &:hover {
                        transform: rotate(360deg);
                        }
            }
            a{
                color:#fff;
                position:absolute;
                top:55%;
                left:50%;
                transform:translate(-50%,-50%);
            }
        }
`
const Profile = styled.div`
    
.image-wrapper {
    clip-path:circle(50% at 50% 50%) ;
    background-color: #01be96;
    width: 25rem;
    transition: transform 400ms ease-in-out;
    filter: drop-shadow(5px 5px 10px #000000);
}

img {
    width: 100%; /* Ensure the image fills its container */
}

.image-wrapper:hover {
    transform: translateY(-10px);
}

/* Adjust widths for smaller screens */
@media (max-width: 790px) {
    .image-wrapper {
        width: 20rem;
    }
}

@media (max-width: 660px) {
    .image-wrapper {
        width: 18rem;
    }
}

@media (max-width: 640px) {
    .image-wrapper {
        width: 100%;
    }
}

        
    //     clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    //     background-color: #01be96;
    //     width: 25rem;
    //     transition:transform 400ms ease-in-out;
    //     @media(max-width:790px){
    //         width:20rem;
    //     }
    //     @media(max-width:660px){
    //         width:18rem;
    //     }
    //     @media(max-width:640px){
    //         width:100%;
    //     }
    //     filter: drop-shadow(5px 5px 10px #000000);
    // &:hover img{
    //     transform:translateY(-10px);
    // }
`
