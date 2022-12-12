import React from 'react'
import styled from 'styled-components';
import Iframe from 'react-iframe'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Comments from '../Comments';
import Card from '../Card';

const Container  = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5
`;
const VideoWrapper = styled.div`
  
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400px;
  margin-top: 20px;
  margin-bottom:10px;
  color: ${({ theme })=> theme.text}

`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
color: ${({ theme })=> theme.textSoft};
  
`;
const Buttons = styled.div`
  display: flex;
  gap:20px;
  color: ${({ theme })=> theme.text}

`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin:15px 0px;
  border: 0.5px solid ${({ theme })=> theme.soft};

`;
const Recommendation = styled.div`
  flex 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color:  ${({ theme})=> theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme })=> theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
background-color:  red;
font-weight: 500;
color:  white;
border: none;
border-radius: 3px;
height: max-content;
padding: 10px;

`;
const Video = () => {
  return (
    <Container>

      <Content>
        <VideoWrapper>
          <Iframe
            width='100%'
            height= '600'
            src="https://www.youtube.com/embed/_bzjaeA6y4A"
            title='Youtube Video Player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          />
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details><Info>7, 948 views Jun 22, 2022</Info>
        <Buttons>
          <Button><ThumbUpOffAltIcon />Like</Button>
          <Button><ThumbDownOffAltIcon />Dislike</Button>
          <Button><ReplyRoundedIcon />Share</Button>
          <Button><DownloadOutlinedIcon />Download</Button>
        </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckChF-nfhaP7gU1UAwq5SEoj_GK9HIk6wZg&usqp=CAU" />
            <ChannelDetail>
              <ChannelName>prsndp</ChannelName>
              <ChannelCounter>200k subscribers</ChannelCounter>
              <Description>
                Various versions have evolved over the years, sometimes by accident, sometimes on purpose, injected humour and the like.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />

      </Recommendation>
    </Container>
  )
}

export default Video