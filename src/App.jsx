import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais/EstilosGlobais";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import BarraLateral from "./components/BarraLateral/BarraLateral";
import Banner from "./components/Banner/Banner";
import bannerBackground from './assets/banner.png'

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

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho/>
      <BarraLateral/>
      <Banner titulo='A galeria mais completa de fotos do espaço!' backgroundImage={bannerBackground} />
    </FundoGradiente>
  );
}

export default App;
