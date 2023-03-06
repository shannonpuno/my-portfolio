import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Home from './components/Home'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Routes>
            <Route exact path="/"  element= {<Home/>} />
            <Route path="/navigation" element = {<Navigation/>} />
            <Route path="/project" element={<Project/>} />
          </Routes>
        </Main>
      </Wrapper>
    </Router>

  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; `;

const Main = styled.main`
  flex: 1;
  padding: 1rem; `;
