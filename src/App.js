import React from 'react'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Opportunities from './components/Opportunities';


function App() {

  return (
    <>
      <div className="App">
        <NavBar />
        <Opportunities />
        <Footer />
      </div>
    </>
  );
}

export default App;
