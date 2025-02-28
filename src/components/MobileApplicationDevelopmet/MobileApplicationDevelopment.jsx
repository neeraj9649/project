import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faUsers,
  faMobileAlt,
  faDesktop,
  faGlobe,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import IndustriesWeServe from './IndustriesWeServe'
function MobileApplicationDevelopment() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-64"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=1920&h=400')",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=1920&h=400')",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-gray-600">SERVICE</p>
            <h1 className="text-3xl font-bold text-gray-800">
              MOBILE APPLICATION
            </h1>
          </div>
        </div>
      </div>
      <div className="p-8 w-full flex flex-col lg:flex-row ">
  <div className="container  lg:mx-11 lg:w-1/2 w-full">
    <div className="flex lg:justify-start justify-center">
      <div className="w-full lg:w-2/3">
        <div className="common-heading">
          <h2 className="text-3xl lg:text-5xl lg:text-left font-bold">
            <span className="gradient-text">Mobile Application</span>
            Development Company
          </h2>
        </div>
      </div>
    </div>
    <div className="mt-3 lg:px-0  ">
      <div className="lg:text-left text text-[#736a8e]">
        <p className="text-gray-600 mt-6 leading-relaxed">
          We at Versai Technology have mastered every aspect of mobile
          application development and provide services that are above
          average. Apps for Android, iOS, Cross-Platform, Hybrid, and
          Native platforms are part of our wide range of services.
          Developing a mobile app these days isn't a difficult task, but
          making it user-friendly and responsive is the main challenge.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          You may even come across some apps that have received bad
          reviews from users because of their interface or some other
          problem. Our daily lives have become increasingly dependent on
          mobile apps, which have become an integral part of our daily
          routines thanks to the rise in smartphone use.
        </p>
      </div>
    </div>
  </div>
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <FontAwesomeIcon
        icon={faRocket}
        className="text-4xl text-blue-500"
      />
      <h2 className="mt-4 text-2xl font-bold text-gray-900">1+</h2>
      <p className="text-gray-600">Years Experience</p>
    </div>
    <div className="bg-orange-100 p-6 rounded-lg shadow-md">
      <FontAwesomeIcon
        icon={faUsers}
        className="text-4xl text-orange-500"
      />
      <h2 className="mt-4 text-2xl font-bold text-gray-900">20+</h2>
      <p className="text-gray-600">Talented Squad</p>
    </div>
    <div className="bg-purple-100 p-6 rounded-lg shadow-md">
      <FontAwesomeIcon
        icon={faMobileAlt}
        className="text-4xl text-purple-500"
      />
      <h2 className="mt-4 text-2xl font-bold text-gray-900">10+</h2>
      <p className="text-gray-600">Apps Developed</p>
    </div>
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <FontAwesomeIcon
        icon={faDesktop}
        className="text-4xl text-blue-500"
      />
      <h2 className="mt-4 text-2xl font-bold text-gray-900">50%</h2>
      <p className="text-gray-600">Projects Delivered</p>
    </div>
    <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
      <FontAwesomeIcon
        icon={faGlobe}
        className="text-4xl text-yellow-500"
      />
      <h2 className="mt-4 text-2xl font-bold text-gray-900">5+</h2>
      <p className="text-gray-600">Countries Served</p>
    </div>
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <FontAwesomeIcon
        icon={faSmile}
        className="text-4xl text-blue-500"
      />
      <h2 className="mt-4 text-2xl font-bold text-gray-900">100%</h2>
      <p className="text-gray-600">Client Satisfaction</p>
    </div>
  </div>
</div>

      <div className="text-center py-16 bg-white text-gray-800">
        {/* Holo Text for "APP DEVELOPMENT" */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl  font-extrabold text-transparent stroke-1"
          style={{ WebkitTextStroke: "1px #e5e7eb" }}
        >
          APP DEVELOPMENT
        </h1>

        {/* Service Section Title */}
        <h2 className="gradient-textt text-3xl mx-2 font-bold mt-4">Our Services</h2>
        <p className="text-lg text-gray-500 mt-2 mx-2">
          Mobile apps which can work on all the platforms with functionality to
          meet the user's expectation without a trace of glitch.
        </p>
        <div className="mt-12 mx-2 lg:mx-11 flex flex-col md:flex-row gap-8 justify-center">
          {/* Android App Development */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-full sm:max-w-sm mx-auto border-4 border-gray-200 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/40x40?text=Android"
                alt="Android logo"
                className="w-10 h-10"
              />
              <h3 className="text-xl font-bold text-gray-900 ml-4">
                Android App Development
              </h3>
            </div>
            <p className="text-gray-600">
              We create Android apps that are faultless and exactly what you
              need for your business. We want to make sure that the app
              resonates with the intended audience and accomplishes its stated
              goal. We go to great lengths to ensure that the final product is
              of the highest quality by conducting extensive research and
              acquiring the necessary resources.
            </p>
          </div>

          {/* React Native App Development */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-full sm:max-w-sm mx-auto border-4 border-gray-200 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/40x40?text=React"
                alt="React logo"
                className="w-10 h-10"
              />
              <h3 className="text-xl font-bold text-gray-900 ml-4">
                React Native App Development
              </h3>
            </div>
            <p className="text-gray-600">
              It is now common practice to create user interfaces with React
              Native, a framework built on top of the JavaScript library.
              Single-page and mobile app development benefit greatly from it. It
              is our job as an IT service provider to ensure that our clients
              get the most up-to-date technologies available. As a result, our
              clients can be assured of the best possible outcomes.
            </p>
          </div>

          {/* iPhone App Development */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-full sm:max-w-sm mx-auto border-4 border-gray-200 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/40x40?text=Apple"
                alt="Apple logo"
                className="w-10 h-10"
              />
              <h3 className="text-xl font-bold text-gray-900 ml-4">
                iPhone App Development
              </h3>
            </div>
            <p className="text-gray-600">
              Making your app available on the iPhone raises the bar for app
              usage dramatically. With an ever-increasing number of people using
              iPhones, you have a lot more options for expanding your business
              via mobile apps. To ensure that your app is not only compatible
              but also highly productive on this platform, we handle all the
              necessary steps to make it happen.
            </p>
          </div>
        </div>
      </div>

     <IndustriesWeServe/>


    </div>
  );
}
export default MobileApplicationDevelopment;
