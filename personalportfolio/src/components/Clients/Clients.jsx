import React from 'react'
import styled from 'styled-components';
import ClientSlider from './ClientSlider';
import Slider from "react-slick";
import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Slide } from 'react-awesome-reveal';
let clients=[
    {
        name:"Mattew William",
        position:"Graphic Designer",
        img_url:"https://img.lovepik.com/photo/50140/4127_lovepik-foreigner-business-man-browsing-newspaper-photo-image_wh860.jpg",
        stars:5,
        disc:`From the first telephone conversation, we were convinced that they knew what we were looking for. We are extremely pleased with the work done by time4design in turning our ideas into a much better version of themselves. With a few simple questions, some content, and an understanding of what we were trying to develop.`
    },
    {
        name:"Wilson David",
        position:"web designer",
        img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPChypwfCMoRandZNaHcyjj7nlPfKyF4M4VA&usqp=CAU",
        stars:4,
        disc:`The prospect of choosing a website design team and building a new, dynamic website for our psychology practice was a daunting one. I was immediately struck by the fresh, clean and professionally artistic styles I found with time4design. The process of working with Wayne and his team at T4D has likewise been a smooth and positive one.`
    },
    {
        name:"scarlett johnson",
        position:"System Adminstrator",
        img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1HAdA2NavAmQo5ySu1L9yk8q0I0yQvRGFQ&usqp=CAU",
        stars:3,
        disc:`I’m pleased to say that boyermanagement.com has drawn rave reviews. It positions us as a world-class organization and adds credibility to our brand. I’ve seen no other firm that does what we do have a website that looks as good as ours, or is as easy to navigate as ours.we truly feel that our new website appeals..`
    },
    {
        name:"James correl",
        position:"Software Developer",
        img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX92sa4O7DzaU7ShmCsT98W_cDDh4wKDiKbxhZSJCD64GmswtU4av0eC1pzjp6lizipXc&usqp=CAU",
        stars:4,
        disc:`As the CEO and founder of several companies you make a million decisions, if most of them are good then things work out. This was one of my best decisions. Wayne Anderson and his team at time4design was a crucial part of our initial development/concept team for the vision and creation of our new company. They have been responsive.`
    }
]
var settings = {
    
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows:false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  };
  
const Clients = () => {
  const arrowRef = useRef(null);
    let clientDisc="";
    clientDisc=clients.map((item,i)=>(
        <ClientSlider item={item} key={i}/>
    ))

  return (
    <Container id='client'>
      <Slide direction="left">
        <span className="green">Testimonials</span>
        <h1>What Clients say</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef}{...settings}>
                {clientDisc}
            </Slider>
             <Buttons>
              <button onClick={()=>arrowRef.current.slickPrev()}><IoIosArrowBack/></button>
              <button onClick={()=>arrowRef.current.slickNext()}><IoIosArrowForward/></button>
             </Buttons>
            
        </Testimonials>

    </Container>
  )
}

export default Clients;
const Container=styled.div`
    width:80%;
    max-width:1280px;
    margin:0 auto;
    padding:4rem 0;
    @media(max-width:840px){
      width:90%;
    }
    span{
        font-weight:700;
        text-transform:uppercase;
    }
    h1{
        padding-top:1rem;
        text-transform:capitalize;
    }
    .slick-list, .slick-slider, .slick-track 
 {
  padding:0;
 }
 .slick-dots{
  text-align:left;
  margin-left:1rem;

 }
 .slick-dots li button:before{
  content: "";
  }

 .slick-dots li button{
     width:9px;
  height:4px;
  background:linear-gradient(159deg,rgb(45,45,58)0%,rgb(43,43,53)100%);
  padding:0.1rem;
  margin-top:1rem;
  transition:all 400ms ease-in-out;
  border-radius:50px;
}
.slick-dots li.slick-active button{
  background:#01b696;
  width:15px;

}

.slick-dots li{
  margin:0;
}
`
const Testimonials=styled.div`
  margin-top:2rem;
  position:relative;


`
const Buttons=styled.div`
position:absolute;
right:0.7rem;
bottom:-2rem;

button{
  background-color:transparent;
  margin-left:0.5rem;
  border:none;
  color:#01be96;
  cursor:pointer;
  font-size:1.1rem;

}
@media(max-width:530px)
{
  display:none;
}
`