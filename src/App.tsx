import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header';
import Hero from './components/home/Hero';
import Servicios from './components/home/Servicios';
import Works from './components/home/Works';
import Footer from './components/shared/Footer';
import ScrollToTop from './components/shared/ScrollToTop';



function App() {
  return (
    <div className=''>
      <ScrollToTop />
      <Header />
      <Hero />
      <Servicios />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
