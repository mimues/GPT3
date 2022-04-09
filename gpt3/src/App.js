import React from "react";
import './app.css'

import {
  Blog,
  Footer,
  Features,
  Possibility,
  WhatGPT3,
  Header,
} from "./containers";
import { Brand, Cta, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  );
};

export default App;
