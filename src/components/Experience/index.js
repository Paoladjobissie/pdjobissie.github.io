import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from "../Cards/ExperienceCard";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`;


const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
gap: 12px;
`;


const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

  const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const TimeLineSection = styled.div`
    width: 100;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
 `;

const Experience = () => {
  return (
   <Container id="experience">
    <Wrapper>
      <Title>Experience</Title>
      <Desc>Here are some of my work experiences as a Cloud Engineer</Desc>
      <TimeLineSection>
          <Timeline>
              {experiences.map((experience, index) => (
                 <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {index !== experiences.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <ExperienceCard experience={experience} />
                    </TimelineContent>
                  </TimelineItem>
               ))}
             </Timeline>
           </TimeLineSection>
         </Wrapper>
       </Container>
     );
   };

export default Experience;