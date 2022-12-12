import {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';
import SignIn from './components/pages/SignIn';


import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  Link,
} from "react-router-dom";
import Video from './components/pages/Video'
import Home from './components/pages/Home'
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color:  ${({theme}) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 15px 50px;
`;

function App() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme: lightTheme}>

      <Container>
       <BrowserRouter>
      <Menu darkMode={darkMode} setDarkMode = {setDarkMode}/>
      <Main >
        <Navbar />
        <Wrapper>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='signin' element={<SignIn/>}>
              <Route path=':id' element={<Video/>}></Route>
            </Route>
          </Route>
        </Routes>
        </Wrapper>
      </Main>
      
    </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
