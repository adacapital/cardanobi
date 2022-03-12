import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Staking from './components/Staking'
import Education from './components/Education'
import Build from './components/Build'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Staking />
      <Education />
      <Build />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
