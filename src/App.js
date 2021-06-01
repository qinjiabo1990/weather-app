import React from 'react';
import Body from './App/Body';
import Footer from './App/Footer';
import Header from './App/Header';



function App() {
  //passing DATA
  //getting lon and lat
  //getting location from input bar in header
  return (
    <>
      <Header />
      <Body 
        city = 'Brisbane'
      />
      <Footer />
    </>
  );
}

export default App;
