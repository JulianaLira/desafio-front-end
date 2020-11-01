// Importando o React
import React, { Component } from 'react';
import Header from './components/header';
import Slide from './components/slide';
import Noticias from './components/noticias';
import Grafico from './components/grafico';
 import LinhaHR from './components/style/linhaHR';
import Mapa from './components/mapa';
 import Footer from './components/footer';
 import Contato from './components/contato';

class App extends Component {
  render() {
    return (
      <div className="App">     
        <Header />
        <Slide />
         <Noticias />    
        <LinhaHR/> 
       <Grafico />
        <LinhaHR/> 
       <Mapa />
        <Contato />
       <Footer></Footer> 
      </div>
    );
  }
}

export default App;