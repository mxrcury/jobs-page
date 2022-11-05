import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 31%;
  justify-content: space-between;
    max-width: 1269px;
    margin: 56px auto 169px;
    @media screen and (max-width:1313px) {
      display: block;
      margin: 0 auto;
      padding: 0 40px;
    }
    @media screen and (max-width:768px) {
      padding: 0 16px;
      display: block;
    }
`
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width:540px) {
    flex-direction: column;
    align-items: flex-start;
  }`;

export const Content = styled.div``;

export const Map = styled.div`
width: 402px;
height: 436px;
background-color: black;
@media screen and (max-width:1313px) {
      width: 100%;
    }
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.413333px;

  color: #3a4562;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width:580px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Options = styled.div`
  display: flex;
  align-items: center;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
`;
export const Icon = styled.img`
  margin-right: 15.5px;
`;
export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: #3a4562;
`;

export const HorizontalLine = styled.div`
  background: #3A4562;
  width: 100%;
  height: 1px;
  mix-blend-mode: normal;
opacity: 0.13;
  margin-bottom:15px ;
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  padding: 18px 30px;
  background: #384564;
  border-radius: 8px;
  color: white;
  border: 0;
  outline: 0;
  cursor: pointer;
  margin-bottom: 32px;
  transition: .2s ease;
  &:hover{
    background: #383962;
  }
`;

export const Salary = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.625px;
  color: #3a4562;
  @media screen and (max-width:560px) {
    margin-left: auto;
  }
`;
export const PostedTime = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.355988);
`;

export const Subtitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.625px;
  color: #3a4562;
`;

export const List = styled.ul`
margin-bottom: 35px;
`;

export const ListItem = styled.li`
  list-style-type: square;
  position: relative;
&::marker {
    color: rgba(56, 69, 100, 0.632594);
  }
`;

export const Types = styled.div`
  
`;

export const Type = styled.button`
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.457143px;
  color: ${props=>props.color === 'primary' ? '#55699e' : '#988B49'};
  padding: 17px 45px;
  background: ${props=>props.color === 'primary' ? 'rgba(161, 177, 219, 0.317343)' : '#FFCF0026'};
  border: 1px solid ${props=>props.color === 'primary' ? 'rgba(85, 105, 158, 0.3)' : '#FFCF00'};
  border-radius: 8px;
  margin-right: 8px;
  outline: 0;
  &:last-child{
    margin-right: 0;
  }
`;


export const Images = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 98px;
`;

export const Img = styled.img`
  width: 200px;
  height: 116px;
  object-fit: cover;
  background: #d8d8d8;
  border-radius: 8px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

export const BackButton = styled.button`
  background: rgba(56, 69, 100, 0.14);
  mix-blend-mode: normal;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  transform: translateX(-89px);
  padding: 18px 26px 16px;
  display: flex;
  align-items: center;

  color: #3a4562;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  @media screen and (max-width:1500px) {
    transform: translate(0);
  }
  @media screen and (max-width:1313px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width:768px) {
    display: none;
  }
`;

export const BackArrowIcon = styled.img`
  margin:0 19px 2px 0;
`;