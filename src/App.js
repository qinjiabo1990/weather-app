import React from 'react';
import styled from 'styled-components';
import Body from './App/Body';
import Footer from './App/Footer';
import Header from './App/Header';
import FlexColumn from './components/FlexColumn';
import bg from './assets/img/home.jpg'

const Bg = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
`;


function App() {
  //passing DATA
  //getting lon and lat
  //getting location from input bar in header
  return (
    <>
      <Bg>
        <FlexColumn>
          <Header />
          <Body
            city='Sydney'
          />
          <Footer />
        </FlexColumn>
      </Bg>
    </>
  );
}

export default App;
