import React, { Component } from 'react';
import styled from 'styled-components';

class Hero extends Component {
  state = {};
  render() {
    return (
      <HeroWrapper>
        <HeroBG />
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
