import React from 'react';
import styled from 'styled-components';

const Project = (props) => {
  const { img, disc,heading} = props.item;

  return (
    <Container className="project">
      {/* Pass img prop to ImageWrapper */}
      <img src={img} alt="project" />
      <div className="disc">
        <h1>{heading}</h1>
        <p>
          {disc}
          <a href="#">demo</a>
        </p>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    transition: all 400ms ease-in-out;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.8));
    h1 {
      font-size: 1rem;
      color:#01be96;
    }
    p {
      width: 90%;
      font-size: 0.8rem;
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }

  &:hover .disc {
    transform: translateY(0);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Use object-fit to ensure the image covers the entire container */
    transition: transform 400ms ease-in-out;
  }

  &:hover img {
    transform: scale(1.3);
  }
`;
