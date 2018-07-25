import React from 'react';
import styled from 'styled-components';

import BlueLAXStick from '../../assets/clinics/BlueLAXStick.svg';
import RedLAXStick from '../../assets/clinics/RedLAXStick.svg';
import CTAButtonRed from '../reusable/CTA_button_red.MUI';
import CTAButtonBlue from '../reusable/CTA_button_blue.MUI';

const Clinic = props => {
  return (
    <ClincWrapper>
      <h1>{`${props.clinicSeason || 'Upcoming'} Clinics`}</h1>
      <RegistrationDate>{`Registration starts ${
        props.clinicRegDate
      }`}</RegistrationDate>
      <Description>{`${props.clinicDescription || ''}`}</Description>
      <RegistrationClassesWrapper>
        <RegistrationClass title="Boys">
          <LaxGraphic src={BlueLAXStick} alt="Boys Graphic" />
          Boys Classes
          <CTAButtonBlue>Details</CTAButtonBlue>
        </RegistrationClass>
        <RegistrationClass title="Girls">
          <LaxGraphic src={RedLAXStick} alt="Girls Graphic" />
          Girls Classes
          <CTAButtonRed>Details</CTAButtonRed>
        </RegistrationClass>
      </RegistrationClassesWrapper>
    </ClincWrapper>
  );
};

export default Clinic;

const ClincWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
`;

const RegistrationDate = styled.h4`
  font-weight: 300;
  margin: 0;
  font-size: 1.1rem;
  color: #4f4f4f;
`;

const Description = styled.p`
  font-weight: 300;
  color: #4f4f4f;
`;

const RegistrationClassesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RegistrationClass = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  box-shadow: 4px 6px 40px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 14rem;
  width: 14rem;
  margin: 2rem;
  padding: 1rem;
`;

const LaxGraphic = styled.img``;
