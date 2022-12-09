import * as React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Accueil from './pages/Accueil';
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Accueil />
      <Footer />

    </div>
  );
}
