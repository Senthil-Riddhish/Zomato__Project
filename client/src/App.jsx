import './App.css';
import { Route, Routes } from "react-router-dom";
import HomeLayoutHoc from "./HOC/Home.hoc";
import Homepage from "./pages/HomePage";
function  App() {
  return (
    <>
          <HomeLayoutHoc component={Homepage} path="/" />
          <HomeLayoutHoc component={Homepage} path="/:type" />
    </>
  );
}

export default App;
