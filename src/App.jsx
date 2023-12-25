

import React from 'react';
import { Typography, Layout, Space } from 'antd';
import { NavLink, Route,Routes } from 'react-router-dom';
import './App.css';

import { Navbar, Exchanges, HomePage, Cryptocurrencies, News, CryptoDetails } from './components';

const { Title } = Typography;

const App = () => {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
            </Routes>
            {/* Use Route components for each route */}
            
          </div>
        </Layout>

        <div className="footer" style={{ color: 'white', bottom: 0, width: '100%' }}>
          <Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            CryptoVerse
            <br />
            All rights reserved
          </Title>
          <Space>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/exchanges'>Exchanges</NavLink>
            <NavLink to='/news'>News</NavLink>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
