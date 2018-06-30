import React, { Component } from 'react';
import styled from 'styled-components';

import AppBarNav from '../components/reusable/app_bar_nav.MUI';
import HeroCTA from '../components/home-screen/hero_cta';
import AnnouncementsSection from '../components/home-screen/announcements_section';
import SlideshowSection from '../components/home-screen/slideshow_section';
import AboutSection from '../components/home-screen/about_section';
import Footer from '../components/reusable/footer';

class HomeScreen extends Component {
  render() {
    return (
      <HomeScreenWrapper>
        <AppBarNav />
        <HeroCTA />
        <AnnouncementsSection />
        <SlideshowSection />
        <AboutSection />
        <Footer />
      </HomeScreenWrapper>
    );
  }
}

export default HomeScreen;

const HomeScreenWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
