
import './App.css';
import Header from './components/Banner/Header';
import styled from 'styled-components'
import ProfComponent from './components/Banner/ProfComponent';
import Services from './components/Services/Services';
import Projects from './components/Banner/Projects/Projects';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clients from './components/Clients/Clients';
import Footer from './components/Clients/Footer/Footer';
import { Fade } from 'react-awesome-reveal';


function App() {
  return (
    <Container>
      <Banner>
        <Fade>
        <Header/>
        <ProfComponent/>
        </Fade>
      </Banner>
      <Services/>
      <LightColor>
        <Projects/>
      </LightColor>
      <Clients/>
      <LightColor>
        <Footer/>
      </LightColor>
    </Container>
  );
}

export default App;
const Container=styled.div``;
const Banner=styled.div`
background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
height:100vh;
@media(max-width:640px){
  height:100%;
  padding-bottom:1rem;
}
`
const LightColor=styled.div`
  background:linear-gradient(159deg,rgb(45,45,58)0%,rgb(43,43,53)100%);
  
`

