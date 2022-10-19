import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {

  return (
          <BrowserRouter>
              <Routes>
                  <Route path={""} element={<Home />} />
                  <Route index element={<Login />} />
                  <Route path="Register" element={<Register />} />
              </Routes>
          </BrowserRouter>
  );
}

export default App;
