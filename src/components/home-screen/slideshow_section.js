import React from 'react';
import styled from 'styled-components';

import SlideshowMock from '../../assets/home-screen/SlideshowMock.svg';

const SlideshowSection = () => {
  return (
    <SlideshowSectionWrapper>
      <SlideshowBG>
        <img src={SlideshowMock} alt="Slideshow" />
      </SlideshowBG>
      <SlideshowSectionFooter />
    </SlideshowSectionWrapper>
  );
};

export default SlideshowSection;
const SlideshowSectionWrapper = styled.div`
  overflow: hidden;
`;

const SlideshowBG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    113.33deg,
    #c4c4c4 0%,
    #058ed9 0.01%,
    #0069c0 100%
  );
  height: 34rem;
  width: 100%;
  overflow: hidden;
`;

const SlideshowSectionFooter = styled.div`
  width: 0;
  height: 0;
  border-left: 100vw solid transparent;
  border-right: 200px solid transparent;

  border-top: 200px solid #058ed9;

  @media (max-width: 768px) {
    border-top: 120px solid #058ed9;
  }
`;
