import React, { useContext } from "react";
import { Link } from 'react-router-dom';


import { ACTIONS, PATH } from "../../constants";
import { Context } from './../../providers/context';
import { useTime } from './../../hooks/useTime';


import {
  Container,
  Avatar,
  Pic,
  Content,
  Title,
  HospitalName,
  Location,
  LocationIcon,
  FlexContainer,
  Rating,
  StarIcon,
  BookmarkContainer,
  BookmarkIcon,
  PostedTime,
  Text,
  EmptyContainer
} from "./styles";


const Card = ({isRatedJob, card}) => {

  const { dispatch } = useContext(Context)

  const selectJob = () => {
    dispatch({type:ACTIONS.SELECT_JOB, job:card})
  }

  const { daysPast } = useTime({startTime:card.createdAt, endTime:card.updatedAt})


  return (
    <Container>
      <Content ratedJob={isRatedJob}>
        <Avatar>
          <Pic src={card.pictures[Math.floor(Math.random() * 2)]} alt="Pic" />
        </Avatar>
        <Text>
          <Link to={`/info/${card.id}`} onClick={selectJob}>
            <Title>{card.title}</Title>
          </Link>
          <HospitalName>
            {card.name} • {card.address}
          </HospitalName>
          <FlexContainer>
            <LocationIcon src={PATH.locationIcon} alt="Location" />{" "}
            <Location>{card.address}</Location>
          </FlexContainer>
        </Text>
      </Content>
      <BookmarkContainer>
        {isRatedJob ? (
          <Rating>
            {new Array(5).fill(0).map((star) => (
              <StarIcon src={PATH.starIcon} alt="Star" />
            ))}
          </Rating>
        ) : null}
        <EmptyContainer>
          <BookmarkIcon src={PATH.bookmarkIcon} alt="Bookmark" />
          <PostedTime>Posted {daysPast} days ago</PostedTime>
        </EmptyContainer>
      </BookmarkContainer>
    </Container>
  );
};

export default Card;
