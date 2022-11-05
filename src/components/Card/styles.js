import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  background-color: white;
  box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08),
    0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  &:nth-last-child(2) {
    margin-bottom: 49px;
  }
  padding: 24px 16px;
  @media screen and (max-width: 1177px) {
    padding:12px 8px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction:column-reverse;
    align-items: flex-start;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EmptyContainer = styled.div``;

export const Avatar = styled.div`
  margin-right: 26px;
`;
export const Pic = styled.img`
  border-radius: 100%;
  max-height: 85px;
  min-width: 85px;
  object-fit: cover;
`;

export const Content = styled.div`
  max-width: ${(props) => (props.ratedJob ? "959px" : "1087px")};
  display: flex;
  align-items: center;
`;

export const Text = styled.div``;

export const Title = styled.h2`
  max-width: 712px;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.625px;
  color: #3a4562;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.5625px;
    text-align: left;
  }
`;

export const HospitalName = styled.p`
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.23619px;
  color: #878d9d;
  margin-bottom: 8px;
`;

export const Location = styled.p`
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.23619px;
  color: #878d9d;
`;

export const LocationIcon = styled.img`
  margin-right: 8px;
`;
export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;
`;

export const StarIcon = styled.img`
  margin-right: 4px;
  @media screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

export const BookmarkContainer = styled.div`
  display: flex;
  max-width: 100%;
  @media screen and (max-width:768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const BookmarkIcon = styled.img`
  display: block;
  margin-left: auto;
  margin-bottom: 66px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const PostedTime = styled.p`
  font-size: 16px;
  line-height: 25px;
  text-align: right;
  letter-spacing: 0.23619px;
  color: #878d9d;
  @media screen and (max-width: 768px) {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
  }
`;
