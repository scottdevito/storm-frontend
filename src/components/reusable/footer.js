import React from 'react';
import styled from 'styled-components';

import StormLogo from '../../assets/StormLogo.jpg';

const Footer = () => {
  return (
    <FooterWrapper>
      <PrimarySection>
        <StormLogoImg src={StormLogo} alt="Storm Lax Logo" />
      </PrimarySection>
      <SecondarySection>
        © 2018 Storm Lacrosse Academy (21796). All rights reserved.
      </SecondarySection>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PrimarySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 9rem;
  width: 100%;
  background: #393e41;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SecondarySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100%;
  background: #0061a7;
  color: #fff;
  text-align: center;
`;

const StormLogoImg = styled.img`
  border-radius: 4px;
  margin-right: 6rem;

  @media (max-width: 768px) {
    margin-right: 0rem;
  }
`;
