import styled from 'styled-components';

export const Container = styled.div`
  max-width: 512px;
  display: block;
  margin: 0 auto;
  background-color: white;
  box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08),
    0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 10.4px;
  padding: 12px 24px 0px;
  width: 100%;
  margin-bottom: 64px;
  @media screen and (max-width:768px) {
    padding: 0;
  }
`;

export const FlexContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width:768px) {
    justify-content: center;
  }
`

export const ArrowButton = styled.button`
    background: transparent;
    cursor: pointer;
    outline: 0;
    border: 0;
    padding-bottom: 8px;
`
export const ArrowIcon = styled.img`
  transition: .2s ease;
  &:hover{
    opacity: 0.87;
  }
`
export const Numbers = styled.div`
  display: flex;
  align-items: center;
  height: 36.2px;
  @media screen and (max-width:768px) {
    padding-top: 10px;
  }
`;

export const PageNumber = styled.div`
  cursor: pointer;
  color:${props=>props.active ? '#5876C5' : '#70778b'};
  margin-right: 8px;
  font-weight: 700;
  font-size: 20.8px; 
  line-height: 25px;
  letter-spacing: 1.73333px;
  width: 31.2px;
  height: calc(100% - 1.3px);
  text-align: center;
  border-bottom: 1.3px solid ${props=>props.active ? '#5876C5' : 'transparent'};
 `
export const VerticalLine = styled.div`
  height:31px;
  width: 1.3px;
  background: #DEE3EF;
  transform: translateY(-5px);
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width:768px) {
    display: none;
  }
`