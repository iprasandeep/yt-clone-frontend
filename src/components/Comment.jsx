import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin:  30px 0px;
`;
const Avatar = styled.img`
    width:  50px;
    height: 50px;
    border-radius: 50%;
`;

const Details = styled.div`
   display:  flex;
   flex-direction:  column;
   gap: 10px;
   color: ${({ theme })=> theme.text} ;
`;

const Name = styled.span`
    font-size:12px;
    font-weight: 400;
    color:  ${({ theme })=> theme.textSoft};
    margin-left: 5px; 
`;
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme })=> theme.textSoft};
    margin-left: 5px;
`;
const Text = styled.span`
    font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
        <Avatar  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckChF-nfhaP7gU1UAwq5SEoj_GK9HIk6wZg&usqp=CAU" />
        <Details >
       <Name>John Doe<Date>1 day ago</Date></Name>
       <Text>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
       </Text>
       </Details>
    </Container>
  )
}

export default Comment