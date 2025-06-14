import Footer from "../components/Footer";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
   <>
        <div className="h-screen">
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            <div className="flex flex-col justify-center px-32">
              <h4 className="text-emerald-500 text-xl font-bold">CONTACT US</h4>
              <h1 className="text-4xl font-bold py-2">
                Let's Talk About Your Information
              </h1>
              <p className="pb-3">Call us for immediate support to this number</p>
              <p className="font-bold">+971548563542</p>
              <div className="text-2xl">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#0866FF" }}
                  className="me-3 "
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#029EEC" }}
                  className="me-3 "
                />
                <FontAwesomeIcon
                  icon={faPinterest}
                  style={{ color: "#B7081B" }}
                  className="me-3 "
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#007AB5" }}
                  className="me-3 "
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#BB0383" }}
                  className="me-3 "
                />
              </div>
            </div>
    
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: 'url("src/images/contact.avif")' }}
            >
                  <div className=" p-8  w-[70%] ">
                    <label className="block text-sm/6 font-medium text-white">
                      Name
                    </label>
        
                    <div class="mb-2">
                      <div class="flex items-center  bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                        <input
                          type="text"
                          class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                          placeholder="Enter your Full Name"
                        />
                      </div>
                    </div>
                    <label className="block text-sm/6 font-medium text-white">
                      Web Link
                    </label>
        
                    <div class="mb-2">
                      <div class="flex items-center  bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                        <input
                          type="text"
                          class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                          placeholder="Enter your Web Link"
                        />
                      </div>
                    </div>
                    <label className="block text-sm/6 font-medium text-white">
                      Message
                    </label>
        
                    <div class="mb-2">
                      <div class="flex items-center  bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                        <textarea
                          type="text"
                          class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                          placeholder="Write your information..."
                        />
                      </div>
                    </div>
                    <button className=" mt-3 rounded-full text-white bg-emerald-900 py-2 px-3 ">
                        Send Message
                    </button>
                  </div>
            </div>
          </div>
        </div>
   </>
  );
};

export default Contact;
