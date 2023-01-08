import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar'
import Navbar from './components/Navbar2'
import Header from './components/Header'
import Features from './components/Features'
import Team from './components/Team'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Features />
      <Team />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
