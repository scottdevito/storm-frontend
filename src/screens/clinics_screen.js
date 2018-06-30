import React from 'react';
import styled from 'styled-components';
import AppBarNav from '../components/reusable/app_bar_nav.MUI';
import Hero from '../components/reusable/hero';
import Footer from '../components/reusable/footer';
import ClinicsSection from '../components/clinics/clinics_section';

const ClinicsScreen = () => {
  return (
    <ClinicsScreenWrapper>
      <AppBarNav />
      <Hero />
      <ClinicsSection />
      <Footer />
    </ClinicsScreenWrapper>
  );
};

export default ClinicsScreen;

const ClinicsScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
