// import React from 'react'
// import { Switch,Route} from 'react-router-dom';
// import { Layout,Typography,Space } from 'antd';
// import "./App.css";
// import { Navbar,Exchanges,HomePage,Cryptocurrencies,News,CryptoDetails } from './components'

// const App = () => {
//   console.log("hii")
//   return (
//     <div className='app'>
      
//       <div className="navbar">
//         <Navbar />
//       </div>
//       <div className="main">
//         <Layout>
//           <div className="routes">
//             <Switch> 
//               <Route exact path='/'>
//                  <HomePage />
//               </Route> 
//                <Route exact path='/exchanges'>
//                   <Exchanges />
//               </Route>
//               <Route exact path='/cryptocurrencies'>
//                   <Cryptocurrencies />
//               </Route>
//               <Route exact path='/crypto/:coinId'>
//                   <CryptoDetails />
//               </Route>
//               <Route exact path='/news'>
//                   <News />
//               </Route>
//            </Switch>
//           </div>
//         </Layout>
//       </div>
//       <div className="footer">
        
//       </div>
      
//     </div>
//   )
// }

// export default App

import React from 'react';
import {Typography, Layout, Space } from 'antd';
import "./App.css";

import { Navbar, Exchanges, HomePage, Cryptocurrencies, News, CryptoDetails } from './components';
import { NavLink,useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  

  const renderPage = () => {
    switch (location.pathname) {
      case '/':
        return <HomePage />;
      case '/exchanges':
        return <Exchanges />;
      case '/cryptocurrencies':
        return <Cryptocurrencies />;
      case '/crypto/:coinId':
        return <CryptoDetails />;
      case '/news':
        return <News />;
      default:
        return null; // or a default component for unknown paths
    }
  };

  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            {renderPage()}
          </div>
        </Layout>
      
      <div className="footer" >
        <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
          CryptoVerse 
          <br />
          All rights reserved
        </Typography.Title>
        <Space>
        <NavLink to='/' >Home</NavLink>
   <NavLink to='/exchanges' >Exchanges</NavLink>
   <NavLink to='/news' >News</NavLink>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
