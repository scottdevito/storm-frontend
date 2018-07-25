import React from 'react';
import styled from 'styled-components';
import Clinic from './clinic';

// TODO: Map over available clinics from the database and display them dynamically

const ClinicsSection = () => {
  return (
    <ClinicsSectionWrapper>
      <Clinic
        clinicSeason="Winter"
        clinicRegDate="September 30th"
        clinicDescription="Other text paragraph other text text other different text. Other text paragraph other text text other different text. Other text paragraph other text text other different text. "
      />
    </ClinicsSectionWrapper>
  );
};

export default ClinicsSection;

const ClinicsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 6rem;
`;
