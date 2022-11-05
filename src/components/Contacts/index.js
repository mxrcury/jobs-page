import React from 'react'

import Map from '../Map'
import { PATH } from '../../constants'

import { Container, Circle,Content,Text, HospitalName, LocationIcon, Paragraph } from './styles'

const Contacts = ({location,contacts}) => {
  return (
    <Container>
      <Content>
        <Circle />
        <Text>
          <HospitalName>{contacts.name}</HospitalName>
          <Paragraph style={{ marginBottom: "7px" }}>
            <LocationIcon src={PATH.locationIcon} alt="Location Icon" />{" "}
            {contacts.address}
          </Paragraph>
          <Paragraph style={{ marginBottom: "5px" }}>
            {" "}
            {contacts.phone}
          </Paragraph>
          <Paragraph> {contacts.email}</Paragraph>
        </Text>
      </Content>
      <Map {...location} />
    </Container>
  );
}

export default Contacts
