// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import FAQ from './components/FAQ'; // Import FAQ component
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Introduction />
        <FAQ /> {/* Render FAQ component */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
