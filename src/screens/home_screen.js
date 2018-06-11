import React, { Component } from 'react';
import styled from 'styled-components';

import AppBarNav from '../components/reusable/app_bar_nav.MUI';
import Hero from '../components/home-screen/hero';
import AboutSection from '../components/home-screen/about_section';
import SlideshowSection from '../components/home-screen/slideshow_section';

class HomeScreen extends Component {
  render() {
    return (
      <HomeScreenWrapper>
        <AppBarNav />
        <Hero />
        <AboutSection />
        <SlideshowSection />
      </HomeScreenWrapper>
    );
  }
}

export default HomeScreen;

const HomeScreenWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
