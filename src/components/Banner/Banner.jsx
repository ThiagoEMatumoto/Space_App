import React from "react";
import styled from "styled-components";

const Wrapper = styled.figure`
  border-radius: 2rem;
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  max-width: 100%;
`;

const Titulo = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`;

const Banner = ({titulo, backgroundImage}) => {
  return <Wrapper $backgroundImage={backgroundImage}>
    <Titulo>
      {titulo}
    </Titulo>
  </Wrapper>;
};

export default Banner ;
