import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
//lAYOUT 
import HomeLayout from '../layouts/Homepage.layout';

function HomeLayoutHoc({ component: Component, path, ...rest }) {
  return (<>
    <Routes>
      <Route
        {...rest}
        path={path} 
        element={
          <HomeLayout>
            <Component />
          </HomeLayout>
        }
      />
    </Routes>
  </>);
}
export default HomeLayoutHoc;
