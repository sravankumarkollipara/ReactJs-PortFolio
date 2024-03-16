// SliderComp.js
import React, { useRef } from 'react';
import Slider from "react-slick";
import Project from './Project';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


let data = [
  {
    img: "https://png.pngtree.com/thumb_back/fw800/background/20231005/pngtree-3d-illustration-of-a-vinyl-record-music-player-image_13534735.png",
    disc: `Boost Master Music Website:Created a dynamic and engaging music website named "Boost Master" using HTML, CSS, JavaScript.`,
    heading:`BoostMatser Music Website`
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUE0tzBg-VnZCTYIx_5jpjoERUwgeRHyXhdg&usqp=CAU",
    disc: "Banking Web Application:Developed a secure and user-friendly banking web application using modern web technologies such as HTML5, CSS3, JavaScript,servelt,oracle database,jdbc and java",
    heading:`Banking Web Application`
  },
  {
    img: "https://www.bigscal.com/wp-content/uploads/2022/04/image2-1.jpg",
    disc: "To implement password validation and authentication using HTML, CSS, and JavaScript, you can create an HTML form with fields for username and password. Use CSS for styling the form elements. In JavaScript.",
    heading:`Password Authentication:`
  },
  {
    img: "https://png.pngtree.com/thumb_back/fw800/background/20231005/pngtree-3d-illustration-of-a-vinyl-record-music-player-image_13534735.png",
    disc: `Boost Master Music Website:Created a dynamic and engaging music website named "Boost Master" using HTML, CSS, JavaScript.`,
    heading:`BoostMatser Music Website`
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUE0tzBg-VnZCTYIx_5jpjoERUwgeRHyXhdg&usqp=CAU",
    disc: "Banking Web Application:Developed a secure and user-friendly banking web application using modern web technologies such as HTML5, CSS3, JavaScript,servelt,oracle database,jdbc and java",
    heading:`Banking Web Application`
  },
  {
    img: "https://www.bigscal.com/wp-content/uploads/2022/04/image2-1.jpg",
    disc: "To implement password validation and authentication using HTML, CSS, and JavaScript, you can create an HTML form with fields for username and password. Use CSS for styling the form elements. In JavaScript.",
    heading:`Password Authentication:`
  },
  
  
];
var settings = {
  className: "center",
    centerMode: true,
  dots:false,
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
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};

const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject="";
  sliderProject=data.map((item, i) =>(
    <Project item={item} key={i} />
      ))
  
  return (
    <Container>
    <Slider ref={arrowRef} {...settings}>
      {sliderProject}
    </Slider>
    <Buttons>
      <button onClick={()=>arrowRef.current.slickPrev()}className="back"><IoIosArrowBack/></button>
      <button onClick={()=>arrowRef.current.slickNext()}className="next"><IoIosArrowForward/></button>
      </Buttons>
</Container>
  );
}

export default SliderComp;
const Container=styled.div`
position:relative;
`
const Buttons=styled.div`
  button{
    width:2rem;
    height:2rem;
    background-color:rgba(255,255,255,0.100);
    cursor:pointer;
    color:#01be96;
    border:none;
    position:absolute;
    top:45%;
    right:-1rem;
  }
  .back{
    left:-1rem;
  }
`