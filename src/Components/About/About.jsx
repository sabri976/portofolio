import React from "react";
import AboutImg from "../../assets/kartun.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                A front-end developer is a programmer who is responsible for developing and designing the user interface of a website or application that interacts directly with users. They work with technologies such as HTML, CSS, and JavaScript to ensure the appearance and functionality of the site/app works according to user requirements. Here are some of the key duties and skills of a front-end developer
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Database developers are professionals responsible for designing, implementing, and maintaining database systems used to store, manage, and access data. They ensure data can be accessed efficiently, securely, and well organized. Database developers often work with database administrators (DBAs), back-end developers, and other teams to ensure that the data needed by an application or organization is always available and managed.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                A backend developer is a programmer who is responsible for handling the server logic, database, and application integration that occurs on the server side. They work “behind the scenes” to ensure data can be processed correctly, applications can interact with databases, and execute business logic that supports user interfaces developed by front-end developers. They also manage application performance, security, and scalability
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
