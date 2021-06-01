import React from 'react';
import styled from 'styled-components';
import Body from './App/Body';
import Footer from './App/Footer';
import Header from './App/Header';
import FlexColumn from './components/FlexColumn';

function App() {
  //passing DATA
  //getting lon and lat
  //getting location from input bar in header
  return (
    <>
      <FlexColumn>
        <Header />
        <Body
          city='Brisbane'
        />
        <Footer />
      </FlexColumn>

    </>
  );
}

export default App;
