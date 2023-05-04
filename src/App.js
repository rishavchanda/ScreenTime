import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Home from './pages/Home'
import ShowDetails from './pages/ShowDetails'

const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.bgLight};
  overflow-y: hidden;
  overflow-x: hidden;
`;

function App() {

  // use state hooks
  const [darkMode, setDarkMode] = useState(true);

  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Body>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/details" element={<ShowDetails/>} />
          </Routes>
        </BrowserRouter>
      </Body>
    </ThemeProvider>
  );
}

export default App;
