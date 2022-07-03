import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header';
import Welcome from "./pages/Welcome/Welcome";
import Sidebar from './components/SideBar/SideBar';
import { pages } from './utils/pages/pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #FEE4CE;
  width: 100%;
  height: 100%;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Background>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />{" "}
          {pages.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={page.element}
            />
          ))}
      </Routes>
    </Background>
  </Router>
  
);
