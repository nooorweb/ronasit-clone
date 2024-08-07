import React, { useEffect, useState } from "react";
import "./index.css";

const Accordiyan = () => {
  const [isOpen, setIsOpen] = useState(Array(6).fill(false));

  const toggleAccordion = (index) => {
    const newIsOpen = isOpen.map((item, idx) => (idx === index ? !item : item));
    setIsOpen(newIsOpen);
  };

 
  const faqData = [
    {
      question: "Which Software Development services do you provide?",
      answer: "Our main services include UI/UX design, graphic design, mobile app development, web development, CTO as a service, business analytics, and DevOps services. Usually, when we begin a project, we work on it from start to finish — conduct a business analysis, design an interface, develop and test it, release the product and support it as long as the client needs. If you need any of the services separately, it’s not a problem."
    },
    {
      question: "What is your software development company’s pricing policy? How much do your services cost?",
      answer: "The cost of software development is influenced by various factors, including the type of application (whether web or mobile), the technologies employed, the number and complexity of features, and the project timeline. Our average prices for web development are $30,000-$60,000+, landing pages might cost around $2000-$5000+, while simple websites can cost $5000-$8000+. As for mobile app development, it can be around $25,000-$60,000+. All these prices are very approximate and based on our previous projects. To get an estimate for your project, please contact our manager."
    },
    {
      question: "How long does it take you to develop a digital product?",
      answer: "The software development time depends on the number and complexity of features we need to develop for your project. If we’re talking about creating an MVP (minimum viable product), our dedicated development team can launch it in 1-3 months."
    },
    {
      question: "What is your experience with custom software development?",
      answer: "Our software development company has 17+ years of experience in designing and developing products for different industries. You can always check our custom software development cases on our website."
    },
    {
      question: "Who is on your dedicated development team?",
      answer: "There are 50+ specialists in our software development company, including UI/UX designers, developers, and DevOps engineers. Our usual project team consists of a manager, a designer, a frontend developer, and a backend developer. If the project requires, we can dedicate more specialists."
    },
    {
      question: "Can you sign an NDA?",
      answer: "Sure! Your privacy is our priority — if you’re worried about sensitive details being disclosed during our custom software development process, we can sign an NDA."
    }
  ];

  return (
    <div className="grid grid-cols-acc-cols gap-16 pr-11 mt-24 auto-rows">
      <div className="col-span-1 row-span-3">
        <div>
          <p className="text-client-size font-medium">FAQ</p>
        </div>
      </div>

      {faqData.map((item, index) => (
        <div key={index} className="px-3 flex flex-col gap-5 relative">
          <h2 className="text-acy-size font-medium leading-8">
            {item.question}
          </h2>
          <i
            className={`icon fa-2xl left-left top-0 ${isOpen[index] ? "open" : ""}`}
            onClick={() => toggleAccordion(index)}
          ></i>
          <div className={`accordion-content ${isOpen[index] ? "open" : ""}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordiyan;
