import React, { Component } from 'react';
import styled from 'styled-components';

import CTASticks from '../../assets/home-screen/CTASticks.svg';
import CTAButtonRed from '../reusable/CTA_button_red.MUI';

class Hero extends Component {
  state = {};
  render() {
    return (
      <HeroWrapper>
        <HeroBG />
        <CTAWrapper>
          <CTA>
            <h1>Summer registration is open!</h1>
            <CTASticksImg src={CTASticks} alt="CTA Sticks" />
            <CTAButtonRed bgColor="#FF6978">Register</CTAButtonRed>
          </CTA>
        </CTAWrapper>
        <HeroFooter />
      </HeroWrapper>
    );
  }
}

export default Hero;

const HeroWrapper = styled.div`
  width: 100%;
`;

const HeroBG = styled.div`
  background: linear-gradient(
    113.33deg,
    #c4c4c4 0%,
    #058ed9 0.01%,
    #0069c0 100%
  );
  height: 24rem;
  width: 100%;
`;

const HeroFooter = styled.div`
  width: 0;
  height: 0;
  border-left: 200px solid transparent;
  border-right: 100vw solid transparent;

  border-top: 200px solid #058ed9;
  transform: translateX(-200px);

  @media (max-width: 768px) {
    border-top: 120px solid #058ed9;
  }
`;

const CTAWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 0px;
  width: 100%;
  display: flex;
  overflow: visible;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  background-color: #fff;
  z-index: 20;
  box-shadow: 4px 6px 40px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 23rem;
  padding-top: 11rem;
  padding-bottom: 12rem;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 22rem;
  }

  @media (max-width: 425px) {
    width: 60%;
    padding-top: 8rem;
    padding-bottom: 8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.6rem;
  }
`;

const CTASticksImg = styled.img`
  width: 75%;
  padding-top: 1rem;
  padding-bottom: 3rem;
`;
