import React from 'react';
import styled from 'styled-components';

import Hero from '../components/reusable/hero';
import AppBarNav from '../components/reusable/app_bar_nav.MUI';
import MeetOurTeamSection from '../components/staff/meet_our_team_section';
import Footer from '../components/reusable/footer';

const StaffScreen = () => {
  return (
    <StaffScreenWrapper>
      <AppBarNav />
      <Hero />
      <MeetOurTeamSection />
      <Footer />
    </StaffScreenWrapper>
  );
};

export default StaffScreen;

const StaffScreenWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
