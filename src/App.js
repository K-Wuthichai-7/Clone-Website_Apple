import React from "react";
import NavbarCollapss from "./component/Navbar";
import Header from "./component/Header";
import Content from "./component/Content";
import Newiphone from "./component/Newiphone";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function App() {
  return (
    <>
      <NavbarCollapss />
      <Header />
      <Content />
      <Newiphone />
    </>
  );
}

export default App;
