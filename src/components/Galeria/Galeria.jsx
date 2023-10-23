import React from "react";
import Titulo from "../Titulo/Titulo";
import Tags from "./Tags/Tags";
import Populares from "./Populares/Populares";
import styled from "styled-components";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`
const Galeria = ({fotos = []}) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ul>
            
          </ul>
          {fotos.map((foto) => foto.titulo)}
        </SecaoFluida>
        <Populares/>
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
