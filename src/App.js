import React, { Component } from 'react';
import styled from 'styled-components';

import HomeScreen from './screens/home_screen';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <HomeScreen />
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  width: 100vw;
  margin: 0;
`;
