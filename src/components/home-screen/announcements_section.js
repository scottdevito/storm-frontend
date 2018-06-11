import React from 'react';
import styled from 'styled-components';

const AnnouncementsSection = () => {
  return (
    <AnnouncementsSectionWrapper>
      <AnnouncementsDescription>
        <h1>Announcements</h1>
        <p>Lorem ipsum dolar amet basi</p>
      </AnnouncementsDescription>
    </AnnouncementsSectionWrapper>
  );
};

export default AnnouncementsSection;

const AnnouncementsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 18rem;
  margin-bottom: 18rem;
  text-align: center;
  width: 100%;
`;

const AnnouncementsDescription = styled.div`
  max-width: 75%;
`;
