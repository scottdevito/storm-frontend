import React from 'react';
import styled from 'styled-components';

import AboutMike from '../../assets/about-screen/AboutMike.jpg';
import AboutChris from '../../assets/about-screen/AboutChris.jpg';
import AboutBrian from '../../assets/about-screen/AboutBrian.jpg';
import AboutClaire from '../../assets/about-screen/AboutClaire.jpg';
import AboutMatt from '../../assets/about-screen/AboutMatt.jpg';
import AboutKevin from '../../assets/about-screen/AboutKevin.jpg';

const StaffSection = () => {
  return (
    <StaffSectionWrapper>
      <StaffMemberWrapper>
        <StaffTitlePicWrapper>
          <h2>Mike O'Reilly</h2>
          <p>Director Storm Lacrosse</p>
          <p>Offensive Coach</p>
          <AboutPic src={AboutMike} alt="Mike" />
        </StaffTitlePicWrapper>
        <StaffDescription>
          <p>
            Mike has been involved in the growth of youth lacrosse in the
            Rockville Centre area for over 20 years. He started the youth
            lacrosse program with the RVC Running Rebels and assisted in the
            founding and running of the RVC Select Program. He has coached many
            PAL teams over the past 20 years. Mike has also coached at the
            travel level for the past 10 years with LI Express Lacrosse and 91
            Lacrosse. He is also a coach for St. Anthony's High School in South
            Huntington.
          </p>
          <p>
            Mike played lacrosse for St. John's University, NCAA Division I
            Lacrosse. He has succeeded on many levels and is committed to giving
            back to the sport he loves and hopes his participants will develop
            the love of the sport as well.
          </p>
        </StaffDescription>
      </StaffMemberWrapper>

      <StaffMemberWrapper>
        <StaffTitlePicWrapper>
          <h2>Chris Finley</h2>
          <p>Strength and Conditioning Trainer</p>
          <AboutPic src={AboutChris} alt="Chris" />
        </StaffTitlePicWrapper>
        <StaffDescription>
          <p>
            Chris is a former football player for St. John's University. He has
            been the Strength and Conditioning Coach for former NY Yankee Allen
            Watson's pitching clinic at East Coast Sports Academy. He also
            personally trains collegiate lacrosse players from Mount Saint
            Mary's and Colgate University. He has provided strength and
            conditioning for football players from Freeport High School.
            Currently he is working with the Storm Baseball Academy and we
            welcome him to Storm Lacrosse this summer.
          </p>
        </StaffDescription>
      </StaffMemberWrapper>

      <StaffMemberWrapper>
        <StaffTitlePicWrapper>
          <h2>Brian Sherlock</h2>
          <p>MLL Player</p>
          <p>Offensive Coach</p>
          <AboutPic src={AboutBrian} alt="Brian" />
        </StaffTitlePicWrapper>
        <StaffDescription>
          <p>
            Brian is a Professional Lacrosse player in the MLL league playing
            for the Atlanta Blaze Player 2017. He was the 3rd round draft pick,
            24th overall in draft. Brian played lacrosse at Loyola University.
            He was a team captain for three years at Loyola. He was also a
            3-time All American and 4-time All Patriot League. On and off the
            field he was successful. He was a 3-time Academic All American and
            Scholar Athlete of the Year in 2017. Brian is a St Anthony's High
            School graduate. He played football and lacrosse at St. Anthony's.
            He was All-League for football and lacrosse and also named Under
            Armour All American 2010-2011. Welcome aboard Brian.
          </p>
        </StaffDescription>
      </StaffMemberWrapper>

      <StaffMemberWrapper>
        <StaffTitlePicWrapper>
          <h2>Claire Petersen</h2>
          <p>Girl's Coach</p>
          <AboutPic src={AboutClaire} alt="Claire" />
        </StaffTitlePicWrapper>
        <StaffDescription>
          <p>
            Claire Petersen is currently one of the Assistant coaches at
            Stonybrook University and coaches trael lacrosse. She has been at
            Storm for 2 years.
          </p>
          <p>
            She was a collegiate lacrosse player. She played two years at
            Stonybrook and two years at Adelphi University. She was named
            America East Player of The Year, Nike Player of the Week,
            womenslax.com National Player of the Week, and many more
            accomplishments. She has broken NCAA records throughout her career.
            She will be training the Girl's Programs at Storm.
          </p>
        </StaffDescription>
      </StaffMemberWrapper>

      <StaffMemberWrapper>
        <StaffTitlePicWrapper>
          <h2>Matt Domanico</h2>
          <p>Defensive Coach</p>
          <AboutPic src={AboutMatt} alt="Matt" />
        </StaffTitlePicWrapper>
        <StaffDescription>
          <p>
            Matt is entering his 5th year working at St. Anthony's High School
            where he is the Academic Counselor/Assistant Academic Dean and
            Defensive Coordinator of the Freshman Lacrosse Team. His playing
            experience includes being a 2x time Captain of the Varsity Lacrosse
            Team at St. John the Baptist Diocesan High School and an All-League
            CHSAA selection as a Defenseman in 2003. Matt also went on to play 4
            years of Division III lacrosse at Oneonta State College where he was
            part of a team his sophomore year that beat nationally ranked
            Division III powerhouse RIT by a score of 10-7. During his junior
            and senior seasons, the program accomplished double digit win
            seasons for the first time in three years by winning 10 games during
            the 2006 season and achieving a 12-5 record during the 2007 season,
            which was his senior year.
          </p>
          <p>
            After his playing career ended, Matt had a passion and desire to get
            into coaching. This Spring, he will be entering his 8th year of
            coaching at the High School level. His experience includes stops as
            an Assistant Coach at his alma mater St. John the Baptist for 1 year
            and then 2 years as an Assistant Coach of the JV lacrosse team at
            Copiague High School before landing at St. Anthony's where he has
            been coaching for the last 5 years. At St. Anthony's, Matt is the
            Defensive Coordinator of the Freshman Team and coached a team that
            produced a scoring defense that had a 5.62 goals against average for
            the 2017 season.
          </p>
        </StaffDescription>
      </StaffMemberWrapper>

      <StaffMemberWrapper>
        <StaffTitlePicWrapper>
          <h2>Kevin Rice</h2>
          <p> Goalie Trainer</p>
          <AboutPic src={AboutKevin} alt="Kevin" />
        </StaffTitlePicWrapper>
        <StaffDescription>
          <p>
            Kevin grew up in New Hyde Park, New York and attended Kellenberg
            Memorial High School. At Kellenberg, he played all four years of
            lacrosse and spent three years on the varsity team. He helped
            capture Kellenberg’s first ever Downstate championship title in 2014
            and appeared in several Long Island and downstate championships in
            his four-year career. During his time at Kellenberg, he was awarded
            CHSAA All- League honors, team captain, team MVP, and Catholic
            League Goalie of the Year in 2016. Now, Kevin is a sophomore on
            Adelphi University Men’s Lacrosse team. After a redshirt freshman
            year, Kevin is ready to see playing time in the 2018 season. His
            goal is to help young lacrosse players strive on the field and off.
            Kevin specializes in working with Storm’s goalkeepers and is always
            happy to help any goalie in need of enhancing their skills.
          </p>
        </StaffDescription>
      </StaffMemberWrapper>
    </StaffSectionWrapper>
  );
};

export default StaffSection;

const StaffSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-top: 6rem;
    margin-bottom: 2rem;
  }
`;

const StaffMemberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 6rem;
  margin-bottom: 6rem;
  box-shadow: 4px 6px 40px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 2rem 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    padding: 0rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

const StaffTitlePicWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    text-align: center;
    align-items: center;
  }
`;

const StaffDescription = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 1.8rem;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AboutPic = styled.img`
  height: 18rem;
  width: 14rem;
  border-radius: 4px;
`;
