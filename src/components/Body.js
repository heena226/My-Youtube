import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import WatchPage from './WatchPage';
import { Outlet } from 'react-router-dom';
import SearchResults from './SearchResults';

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <Sidebar />
        <Outlet>
          <MainContainer />
          <WatchPage />
          <SearchResults />
        </Outlet>
    </div>
  )
}

export default Body