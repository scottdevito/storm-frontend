import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './screens/home_screen';
import StaffScreen from './screens/staff_screen';
import ClinicsScreen from './screens/clinics_screen';

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/staff" component={StaffScreen} />
          <Route path="/clinics" component={ClinicsScreen} />
        </AppWrapper>
      </Router>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  width: 100vw;
  margin: 0;
`;
