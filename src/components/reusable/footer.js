import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <PrimarySection>Logo</PrimarySection>
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
`;
