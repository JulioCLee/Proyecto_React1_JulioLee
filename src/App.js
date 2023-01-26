import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselFadeExample from "./Componentes/CarouselFadeExample";
import Header from "./Componentes/Header";
import MiApi from './Componentes/MiApi';
import poke from './assets/img/poke.png';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <CarouselFadeExample></CarouselFadeExample>
      <div className='slogan'>
        <img src={poke} alt='poke' className='poke' />
        <span>Pokemones</span>
        <img src={poke} alt='poke' className='poke' />
      </div>
      <MiApi></MiApi>
      <footer>
         TODOS LOS DERECHOS RESERVADOS - JULIO LEE
      </footer>
    </div>
  );
}

export default App;
