import React, { Component } from 'react';
import styled from 'styled-components';

import HeroFooterImg from '../../assets/HeroFooterImg.svg';

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
  height: 28rem;
  width: 100%;
`;

const HeroFooter = styled.div`
  height: 12rem;
  width: 100%;
  background-image: url(${HeroFooterImg});
  background-size: cover;
`;
