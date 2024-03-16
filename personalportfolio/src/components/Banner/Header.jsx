import React, { useState } from 'react'
import styled from 'styled-components'
import { GiCandleFlame } from "react-icons/gi";


const Header=(props)=>{
    const [bar, setBar] = useState(false);

    return(
        <Container bar={bar}>
            <Logo>
                <span className='green'><GiCandleFlame /></span>
                    <h1>Portfolio</h1>
                    
                
            </Logo>
            <Nav bar={bar}>
                <span><a href="#home">Home</a></span>
                <span ><a href="#project">Projects</a></span>
                <span ><a href="#service">services</a></span>
                <span> <a href="#client">Testmonials</a></span>
                <span> <a href="#footer">PortFolio</a></span>
            </Nav>
            < div  onClick={()=>setBar(!bar)}
            className="bars">
                <div className="bar"></div>
            
            
            </div>
        </Container>
    )
}
export default Header;
const Container=styled.div`
    display:flex;
    align-items:center;
    
    justify-content:space-between;
    max-width:1280px;
    width:80%;
    margin:0 auto;
    padding:0.5rem;
    @media(max-width:763px){
        width:90%;
    }
    .bars{
            display:none;
    }
    @media(max-width:640px){
        .bars{
            width:40px;
            height:40px;
        
            position:relative;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:0.5rem;
            z-index:100;
            .bar {
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props=>props.bar?"transparent":"#fff"};
                transition:all 400ms ease-in-out;
            }
            
            .bar:before,
            .bar:after {
                content: "";
                width: 100%;
                height: 2px;
                background-color: #fff;
                position: absolute;
                transition:all 400ms ease-in-out;
            
            }
            
            .bar:before {
                transform: ${props=>props.bar?"rotate(45deg)":"translateY(10px)"}
            
            }
            
            .bar:after {
                transform: ${props=>props.bar?"rotate(-45deg)":"translateY(-10px)"}
                
            }
            
                   
        }
    }
    
`
const Logo=styled.div`
display:flex;
align-items:center;

gap:0.5rem;
span{
    font-size:1.8rem;
    
}
h1{
    font-weight:600;
    font-size:1.2rem;
}

`
const Nav = styled.div`
@media(max-width:640px){
    position:absolute;
    display:flex;
    
    flex-direction:column;
    background-color:#01be96;
    top:0;
    right:0;
    left:0;
    bottom:0;
    justify-content:center;
    align-items:center;
    font-size:2rem;
    gap:2rem;
    font-weight:700;
    height: ${props=>props.bar?"100vh":0};
    transition: height  400ms ease-in-out;
    overflow:hidden;
    z-index:99;

}
    span {
        margin-left: 1rem;
        a {
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            
            &:before {
                content: " ";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scaleX(0); /* Scale only on X-axis */
                transform-origin: left;
                transition: transform 400ms ease-in-out;
            }
            
            &:hover:before {
                transform: scaleX(1); /* Scale only on X-axis */
                transform-origin: left;
            }
            &:hover{
                opacity:0.7;
            }
        }
    }
`
