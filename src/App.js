import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Companies from './components/companies/companies';
import Residencies from './components/residencies/residencies';
import Value from './components/values/value';
import Contact from './components/contact/contact';
import GetStarted from './components/getStarted/getStarted';
import Footer from './components/footer/footer';

function App() {
  return (
      <div className='App'>
        <div>
          <div className='white-gradient'></div>
        <Header />
        <Hero />
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>      
  );
}

export default App;
