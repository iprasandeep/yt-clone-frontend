import React from 'react'
import styled from 'styled-components';
import {Link} from'react-router-dom';
const Container = styled.div`
  width: 300px;
  margin-bottom: 45px;
  cursor: pointer;
  
`;
const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap:10px;
`;

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;

`;
const Texts = styled.div``;

const Title = styled.h1`
font-size:16px;
font-weight: 500;
color: ${({ theme })=> theme.text};

`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme })=> theme.textSoft};
  margin: 9px 0px;

`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme })=> theme.textSoft}
`;


const Card = ({darkMode,  setDarkMode})  => {
  return (
    <Link to='/video/test' style={{textDecoration: "none"}}>
    <Container>
      <Image src="https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg"/>
      <Details>
        <ChannelImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckChF-nfhaP7gU1UAwq5SEoj_GK9HIk6wZg&usqp=CAU" />
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>YT-Clone</ChannelName>
          <Info>6000 views | 1day ago </Info>
        </Texts>
      </Details>
    </Container>
    </Link>
    
  )
}

export default Card;