import React from "react";
import Hero from "../Hero/index.jsx";
import Intro from "../Intro/index.jsx";
import Service from "../Servicetypes/index.jsx";
import Design from "../Services/Design/index.jsx";
import Development from "../Services/Development/index.jsx";
import Maintain from "../Services/Maintainence/index.jsx";
import Sidebar from "../Sidebar/index.jsx";
import AsCompany from "../Company/index.jsx";
import Protfolio from "../Protfolio/index.jsx";
import Review from "../Reviews/index.jsx";
import Client from "../Client-review/index.jsx";
import Accordiyan from "../Accordyan/index.jsx";
import Footer from "../Footer/index.jsx";
import Header from "../Header/index.jsx";
import Calculater from "../CalculaterSec/index.jsx";
import MouseFollower from "../MouseFollower.jsx";

const Home = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <MouseFollower />
      <Header />
      <Hero />
      <Intro />
      <Service />
      <Design />
      <Development />
      <Maintain />
      <Calculater />
      <AsCompany />
      <Protfolio />
      <Client />
      <Review />
      <Accordiyan />
      <Footer />
    </div>
  );
};

export default Home;
