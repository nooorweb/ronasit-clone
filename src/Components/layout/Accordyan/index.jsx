import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import { faqData } from "../Constants/const";
const Accordiyan = () => {
  const [isOpen, setOpen] = useState(Array(6).fill(false));

  const toggleAccordion = (index) => {
    const newIsOpen = isOpen.map((item, idx) => (idx === index ? !item : item));
    setOpen(newIsOpen);
  };

  return (
    <div className="md:px-20 px-4">
      <div className="grid gap-10 mt-10 md:pl-7 lg:grid-cols-acc-cols lg:gap-16 md:pr-11 lg:mt-24 auto-rows md:px-28 lg:px-0">
        <div className="col-span-1 lg:row-span-3">
          <div>
            <p className="text-2xl md:text-4xl font-medium">FAQ</p>
          </div>
        </div>

        {faqData.map((item, index) => (
          <div key={index} className="flex flex-col gap-1 relative">
            <div className="flex flex-col md:flex-row items-start gap-4">
              {isOpen[index] ? (
                <MinusIcon
                  className="h-size md:absolute w-size text-red-500 cursor-pointer transition-transform duration-300 ease-in-out transform rotate-180"
                  onClick={() => toggleAccordion(index)}
                />
              ) : (
                <PlusIcon
                  className="h-size  md:absolute w-size text-red-500 cursor-pointer transition-transform duration-300 ease-in-out transform rotate-20"
                  onClick={() => toggleAccordion(index)}
                />
              )}

              <h2
                className="text-acy-sizeres md:text-acy-size md:ml-16 font-medium leading-8 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
              </h2>
            </div>

            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                isOpen[index] ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p
                className={`mt-2 md:pl-12  transition-opacity duration-700 ease-in-out ${
                  isOpen[index] ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordiyan;
