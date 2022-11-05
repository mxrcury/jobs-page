import styled from 'styled-components';


export const Container = styled.div`
  width: 402px;
  background: #2a3047;
  border-radius: 8px;
  height: 436px;
  display: grid;
  grid-template-rows: 50% 50%;
  @media screen and (max-width:1313px) {
      width: 100%;
    }
  @media screen and (max-width:768px) {
    width: 100%;

  }
`;

export const Content = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Circle = styled.div`
background: #202336;
  width: 273px;
  height:273px;
  border-radius: 100%;
    position: absolute;
    left:-20%;
    top:-15%;
    z-index: 1;
`;

export const Text = styled.div`
  position: absolute;
  z-index: 2;
  color: white;
  max-width: 277px ;
  margin: 31px 62.5px 20px;
`;


export const HospitalName = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.625px;
  color: #e7eaf0;
`;

export const LocationIcon = styled.img``;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: #e8ebf3;
`;