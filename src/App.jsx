import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBbar/Navbar';
import ItemListContainer from './components/ContenedorList/ItemListContainer';
import Footer from './components/footer/Footer';

function App() {
  const greeting = "⚡Bienvenido, espero te guste la primera entrega. Saludos⚡";
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer greetings={greeting}></ItemListContainer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
