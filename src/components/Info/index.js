import React,{useContext} from 'react'
import { Link } from 'react-router-dom';

import { PATH } from '../../constants'

import { Container, Title, Content, Header,Options, Option, Paragraph,Icon, HorizontalLine, Button, FlexContainer, Salary, PostedTime, Subtitle, List, ListItem, Types, Type, Images, Img, BackButton, BackArrowIcon } from './styles'
import { Context } from './../../providers/context';
import { useTime } from './../../hooks/useTime';
import Contacts from '../Contacts';
import { useMemo } from 'react';


const Info = () => {

  const {state} = useContext(Context)
  const { selectedJob } = state

  console.log(selectedJob)


  const { daysPast } = useTime({
    startTime: selectedJob.createdAt,
    endTime: selectedJob.updatedAt,
  });
  const contacts = useMemo(
    () => ({
      location: selectedJob.location,
      address: selectedJob.address,
      email: selectedJob.email,
      phone: selectedJob.phone,
      name: selectedJob.name,
    }),
    []
  );

  return (
    <Container>
      <Content>
        <Header>
          <Title style={{ maxWidth: "900px" }}>{selectedJob.name}</Title>
          <Options>
            <Option style={{ marginRight: "31px" }}>
              <Icon src={PATH.bookmarkIcon} alt="Bookmark" />
              <Paragraph>Save to my list</Paragraph>
            </Option>
            <Option>
              <Icon src={PATH.shareIcon} alt="Bookmark" />
              <Paragraph>Share</Paragraph>
            </Option>
          </Options>
        </Header>
        <HorizontalLine style={{ marginBottom: "39px" }} />
        <Button>APPLY NOW</Button>
        <FlexContainer>
          <Title
            style={{
              fontSize: "24px",
              lineHeight: "30px",
              letterSpacing: "-0.75px",
              maxWidth: "501px",
            }}
          >
            {selectedJob.title}
          </Title>
          <Salary>
            € {selectedJob.salary}
            <Paragraph>Brutto, per year</Paragraph>
          </Salary>
        </FlexContainer>
        <PostedTime>Posted {daysPast} days ago</PostedTime>
        {/* ? - додавання стилю певним словам із JSON рядка */}
        <Paragraph>{selectedJob.description}</Paragraph>
        <Subtitle style={{ marginBottom: "25px" }}>Responsibilities</Subtitle>
        <Paragraph style={{ marginBottom: "20px" }}>
          Wellstar Medical Group, a physician-led multi-specialty group in
          Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic
          surgeon to join their existing cardiovascular program. This is an
          opportunity to play a key role on a multidisciplinary team of
          cardiologists and surgeons.
        </Paragraph>
        <Paragraph style={{ marginBottom: "20px" }}>
          The ideal candidate will have five or more years of experience in
          cardiac surgery. This candidate should be facile with off-pump
          revascularization, complex aortic surgery, minimally invasive valve
          and valve repair, transcatheter valve replacement, surgical atrial
          fibrillation ablation, ventricular assist device placement, and extra
          corporeal membrane oxygenation.
        </Paragraph>
        <Subtitle>Compensation & Benefits:</Subtitle>
        <List>
          {selectedJob.benefits.map((job) => (
            <ListItem>
              <Paragraph>{job}</Paragraph>
            </ListItem>
          ))}
        </List>
        <Button style={{ marginBottom: "86px" }}>APPLY NOW</Button>
        <Title style={{ lineHeight: "34px", marginBottom: "9px" }}>
          Additional Info
        </Title>
        <HorizontalLine />
        <Paragraph style={{ marginBottom: "10px" }}>Employment type</Paragraph>
        <Types style={{ marginBottom: "23px" }}>
          {selectedJob.employment_type.map((type) => (
            <Type color="primary">{type}</Type>
          ))}
        </Types>
        <Paragraph style={{ marginBottom: "10px" }}>Benefits</Paragraph>
        <Types style={{ marginBottom: "87px" }}>
          {selectedJob.benefits.map((type) => (
            <Type>{type}</Type>
          ))}
        </Types>
        <Title style={{ lineHeight: "34px", marginBottom: "9px" }}>
          Additional Info
        </Title>
        <HorizontalLine />
        <Images >
          {selectedJob.pictures.map((src, idx) => (
            <Img src={src} alt={`Image_${idx + 1}`} />
          ))}
        </Images>
        <Link to={`/`}>
          <BackButton> <BackArrowIcon src={PATH.backArrowIcon} alt='Back' /> RETURN TO JOB BOARD</BackButton>
        </Link>
      </Content>
      <Contacts contacts={contacts} location={selectedJob.location}/>
    </Container>
  );
}

export default Info
