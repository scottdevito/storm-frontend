import React from 'react';
import styled from 'styled-components';
import StaffSection from './staff_section';

const MeetOurTeamSection = () => {
  return (
    <MeetOurTeamSectionWrapper>
      <h1>Meet our team</h1>
      <p>Lorem ipsum dolar. Description of the team.</p>
      <StaffSection />
    </MeetOurTeamSectionWrapper>
  );
};

export default MeetOurTeamSection;

const MeetOurTeamSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 10rem;
`;
