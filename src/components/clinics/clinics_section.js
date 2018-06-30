import React from 'react';
import styled from 'styled-components';

const ClinicsSection = () => {
  return <ClinicsSectionWrapper>Clinics Section</ClinicsSectionWrapper>;
};

export default ClinicsSection;

const ClinicsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;
