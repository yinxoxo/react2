import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Welcome from "./Welcome";
import SectionTitle from "./SectionTitle";
import GridContainer from "./GridContainer";
import CtaButton from "./CtaButton";

function App() {
  {
    /* button -> show/hide container*/
  }
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id="wrapper">
      <Header />
      <Welcome />
      <SectionTitle />
      <GridContainer />
      <CtaButton toggleVisibility={toggleVisibility} />
      {isVisible && <GridContainer />}
    </div>
  );
}

export default App;
