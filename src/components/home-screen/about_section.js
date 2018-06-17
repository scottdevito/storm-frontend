import React from 'react';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <AboutDescription>
        <h1>Some About Description Title</h1>
        <p>Lorem ipsum dolar amet basi</p>
      </AboutDescription>
    </AboutSectionWrapper>
  );
};

export default AboutSection;

const AboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 17rem;
  margin-bottom: 17rem;
  text-align: center;
  width: 100%;
`;

const AboutDescription = styled.div`
  max-width: 75%;
`;
