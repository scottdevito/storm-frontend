import React, { Component } from 'react';
import styled from 'styled-components';
import AppBarNav from '../components/reusable/app_bar_nav.MUI';
import Hero from '../components/home-screen/hero';

class HomeScreen extends Component {
  render() {
    return (
      <HomeScreenWrapper>
        <AppBarNav />
        <Hero />
      </HomeScreenWrapper>
    );
  }
}

export default HomeScreen;

const HomeScreenWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
