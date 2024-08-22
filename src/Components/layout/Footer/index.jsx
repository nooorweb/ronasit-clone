import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { arr1, arr2, arr3, data } from "../Constants/const";

const Footer = () => {
  const [activei, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activei === index ? null : index);
  };

  let setacc = () => {
    SetHide(!hide);
  };

  return (
    <div className="md:px-20 px-4">
      <div className="mt-32 bg-primary text-secondary">
        <p className="pb-12">Contacts</p>
        <h1 className="font-semibold text-5xl md:text-7xl ">Get In Touch </h1>

        <div className="  hidden md:grid grid-cols-4 mt-24 gap-10 pl-5 ">
          <div className="flex flex-col gap-6 footer ">
            {arr1.map((service) => {
              return (
                <>
                  <p className="font-semibold">{service.title}</p>

                  {service.content.map((elem) => {
                    return (
                      <>
                        <a> {elem} </a>
                      </>
                    );
                  })}
                </>
              );
            })}

            <div className=" mt-32">
              <p className="font-semibold pb-3">Call</p>
              <a href="/#">03434546731</a>
            </div>
          </div>

          <div className="flex flex-col gap-6 footer">
            {arr2.map((dev) => {
              return (
                <>
                  <a className="font-bold"> {dev.title}</a>

                  {dev.content.map((elem) => {
                    return (
                      <>
                        <a>{elem}</a>
                      </>
                    );
                  })}
                </>
              );
            })}

            <div className=" mt-6 flex flex-col gap-2">
              <p className="font-semibold ">Write</p>
              <a href="/#">hello@ronasit.com</a>
              <a href="/#">TeleGram</a>
              <a href="/#">Whatsapp</a>
            </div>
          </div>
          <div className="flex flex-col gap-6 footer">
            {arr3.map((design) => {
              return (
                <>
                  <a className="font-bold">{design.title}</a>

                  {design.content.map((elem) => {
                    return (
                      <>
                        <a>{elem}</a>
                      </>
                    );
                  })}
                </>
              );
            })}

            <div className=" mt-32 flex flex-col gap-2 ">
              <p className="font-semibold pb-3">Legal Address</p>
              <a href="/#">10151</a>
              <a href="/#">Ahtri 12</a>
              <a href="/#">Tallinn, Estonia</a>
            </div>
          </div>

          <div className="flex flex-col ">
            <a className="font-bold  ">DevOps</a>
            <a className="pt-4">DevOps services</a>
          </div>
        </div>

        <div className="flex flex-col gap-7 mt-10 md:hidden h-fit">
          {data.map((d, index) => (
            <div className="flex flex-col" key={index}>
              <div
                className=" text-2xl font-medium flex justify-between gap-30  cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{d.title}</h3>
                <i
                  className={`fas fa-chevron-${
                    activei === index ? "up" : "down"
                  }`}
                />
              </div>

              {activei === index && (
                <div>
                  <ul className="flex flex-col gap-3">
                    {d.content.map((li, liIndex) => (
                      <li className="text-footer-size pt-3" key={liIndex}>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <div>
            <div className="flex justify-between ">
              <div>
                <p className="text-gray-400">Call</p>
                <p className="pt-4">+372 5399 9974</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Write</p>
                <p>hello@ronasit.com</p>
                <p>Telegram</p>
                <p>Whatsapp</p>
              </div>
            </div>
            <div className="mt-16 leading-8 text-gray-400 ">
              <p className="font-medium text-black">Legal Address</p>

              <p>10151</p>
              <p>Ahtri 12</p>
              <p>Tallinn ,Estonia</p>
            </div>
            <div className="">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
