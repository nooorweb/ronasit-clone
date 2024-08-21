import React from "react";
import AsCompany from "../Company/index.jsx";
import Protfolio from "../Protfolio/index.jsx";
import Review from "../Reviews/index.jsx";
import Client from "../Client-review/index.jsx";
import Accordiyan from "../Accordyan/index.jsx";
import Footer from "../Footer/index.jsx";

const Home2 = () => {
  return (
    <div className="md:px-20 px-4">
       <AsCompany />
      <Protfolio /> 
      <Client />  
       <Review />
      <Accordiyan />  

      <Footer />
    </div>
  );
};

export default Home2;
