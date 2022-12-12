import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import '../App.css';
import YT from '../img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Container = styled.div`
    flex: 1;
    background-color: ${({theme}) =>theme.bgLighter};
    height: 100vh;
    color: ${({theme}) =>theme.text};
    font-size: 14px;
    position: sticky;
    overflow: hidden;
    top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;

`;

const Logo = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 font-weight: bold;
 margin-bottom: 20px;
`;

const Img = styled.img`
    height: 25px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 4px;
    border: 1px solid ${({theme}) =>theme.bgLighter};

    &:hover{
        background-color: ${({theme})=> theme.soft};
        border-radius: 3px;
        border: 0.5px solid gray;
        backgroud: transparent;
    }
`;
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) =>theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 300;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;
const Title = styled.h2`
    font-size: 14px;
    font-weight:  500;
    color: #aaaaaa;
    margin-bottom: 20px;
`;
const Menu = ({darkMode,  setDarkMode}) => {
  return (
    <Container>
    <Wrapper>
    <Link to='/' style={{textDecoration: "none", color: "inherit"}}>
        <Logo>
           <Img  src={YT}/>
            Youtube-Clone     
        </Logo>
    </Link>
        <Item>
            <HomeIcon/>
            Home
        </Item >
        <Item>
            <ExploreIcon/>
            Explore
        </Item >
        <Item>
            <SubscriptionsIcon/>
            Subscriptions
        </Item >
        <Hr />
        <Item>
            <VideoLibraryIcon/>
            Library
        </Item >
        <Item>
            <HistoryIcon />
            History
        </Item>
        <Hr />
        <Login>
            Sign in to like videos, comment, and Subscribe.
            <Link to='signin' style={{textDecoration: 'none'}}></Link>
            <Button><AccountCircleIcon />SIGN IN</Button>
        </Login>
        <Hr />
        <Title>BEST OF YT-CLONE</Title>
        <Item>
            <LibraryMusicIcon/>
            Music
        </Item >
       
        <Item>
            <SportsBasketballIcon/>
            Sports
        </Item >
        <Item>
            <SportsEsportsIcon />
            Gaming
        </Item>
        <Item>
            <MovieCreationIcon/>
            Movies
        </Item >
        <Item>
            <LiveTvIcon/>
            Live
        </Item >
        <Hr />
        <Item>
            <SettingsIcon/>
            Setting
        </Item >
        <Item>
            <ReportIcon/>
            Report
        </Item >
        <Item>
            <HelpIcon />
            Help
        </Item>
        <Item onClick={()=>setDarkMode(!darkMode)}>
            <LightModeIcon />
            {darkMode? "Light":"Dark"} Mode
        </Item>
    </Wrapper>
    </Container>
  )
}

export default Menu