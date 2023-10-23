import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais/EstilosGlobais";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import BarraLateral from "./components/BarraLateral/BarraLateral";
import Banner from "./components/Banner/Banner";
import bannerBackground from "./assets/banner.png";
import Galeria from "./components/Galeria/Galeria";
import fotos from './fotos.json'
import { useState } from "react";


const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  height: 100%;
  width: 100%;
  min-height: 100vh;
  min-width: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              titulo="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria fotos={fotosGaleria}/>
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
