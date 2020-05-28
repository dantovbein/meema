import React from 'react';
import { Header } from "../Header";
import { Footer } from "../Footer";
import { AskForBudget } from '../AskForBudget';
import { Contact } from "../Contact";
import { About } from '../About';
import { Team } from '../Team';
import { Products } from '../Products';
import { News } from '../News';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <About/>
      <Products/>
      <AskForBudget/>
      <Contact/>
      <Team/>
      <News/>
      <Footer />
    </div>
  );
}

export default App;
