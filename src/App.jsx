import { useState } from "react";
import "./App.css";
import {  Brand, CTA, Navbar } from "./components";
import {
  WhatGPT3,
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
} from "./containers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
