import React, { useRef, useState } from "react";
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import "./App.css";
import ValidationTextFields from "./ValidationTextFields";

function App() {
  const login1 = useRef();
  const login2 = useRef();
  const translate = useRef();
  // const email = useRef();
  const [labelName, setLadelName] = useState("Email or phone");
  const [emailId, setEmailId] = useState("");
  const emailNextHandler = () => {
    setLadelName("Enter your password");
    // setEmailId(email.current.value);
    login1.current.className = "login-box hidden";
    login2.current.className = "login-box-2";
    translate.current.className = "new translate-x-0 transition-transform";
  };

  const getEmailId = (e) => {
    setEmailId(e);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container  sm:w-[450px] sm:h-[500px] border border-1 border-gray-200 shadow-sm rounded-md p-10 overflow-hidden">
        <div className="login-box" ref={login1}>
          <div className="logo">
            <h2 className="text-2xl tracking-[-.09rem] text-center">
              <span className="text-blue-600 font-medium">G</span>
              <span className="text-red-600 font-medium">o</span>
              <span className="text-orange-600 font-medium">o</span>
              <span className="text-blue-600 font-medium">g</span>
              <span className="text-green-600 font-medium">l</span>
              <span className="text-red-600 font-medium">e</span>
            </h2>
          </div>
          <div className="text text-center mt-2 text-2xl">Sign in</div>
          <div className="s-text mt-3 text-center capitalize">
            use your google account
          </div>
          <div className="input-box mt-10">
            {/* <input
              type="text"
              placeholder="Email or phone"
              className="w-full border border-1 border-gray-400 rounded-md p-2.5 text-lg placeholder:text-gray-700"
            /> */}
            <ValidationTextFields
              label={labelName}
              handleEmailChange={getEmailId}
            />
            <p className="capitalize text-[#1a73e8] p-1">
              <a href="#">forget email?</a>
            </p>
          </div>
          <div className="down-text mt-8">
            <p className="text-sm">
              Not your computer? Use Guest mode to sign in privately.
            </p>
            <a href="#" className="text-[#1a73e8]">
              Learn more
            </a>
          </div>
          <div className="btn-box mt-5 flex justify-between">
            <button className="left text-[#1a73e8] py-2 px-2 hover:bg-blue-50">
              create account
            </button>
            <button
              className="right bg-[#1a73e8] py-1.5 px-5 text-white rounded-md text-lg ac-btn"
              onClick={emailNextHandler}
            >
              Next
            </button>
          </div>
        </div>
        <div className="login-box-2 opacity-0" ref={login2}>
          <div className="logo">
            <h2 className="text-2xl tracking-[-.09rem] text-center">
              <span className="text-blue-600 font-medium">G</span>
              <span className="text-red-600 font-medium">o</span>
              <span className="text-orange-600 font-medium">o</span>
              <span className="text-blue-600 font-medium">g</span>
              <span className="text-green-600 font-medium">l</span>
              <span className="text-red-600 font-medium">e</span>
            </h2>
          </div>
          <div className="text text-center mt-2 text-2xl">Welcome</div>
          <div className="s-text m-auto mt-2 border border-1 border-gray-400 py-0.5 px-2 w-fit rounded-2xl">
            {emailId}
          </div>
          <p className="text mt-6 ml-2">To continue, first verify it's you</p>
          <div
            className="new translate-x-[30rem] transition-transform"
            ref={translate}
          >
            <div className="input-box mt-6">
              {/* <input
                type="text"
                placeholder="Enter your password"
                className="w-full border border-1 border-gray-400 rounded-md p-2.5 text-lg placeholder:text-gray-700"
              /> */}
              <ValidationTextFields label={labelName} />
              <input type="checkbox" name="checkbox" className="mt-4 ml-2" />
              <label htmlFor="checkbox" className="p-1">
                show password
              </label>
            </div>

            <div className="btn-box mt-6 flex justify-between">
              <button className="left text-[#1a73e8] py-2 px-2 hover:bg-blue-50 capitalize">
                forgot password?
              </button>
              <button className="right bg-[#1a73e8] py-1.5 px-5 text-white rounded-md text-lg">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex justify-center items-center min-h-screen">
    //   <div className="container w-full md:w-2/3 lg:w-1/2 xl:w-2/5 border border-1 border-gray-200 shadow-sm rounded-md p-5 md:p-10 overflow-hidden">
    //     <div className="login-box" ref={login1}>
    //       <div className="logo">
    //         <h2 className="text-2xl md:text-3xl tracking-[-.09rem] text-center">
    //           <span className="text-blue-600 font-medium">G</span>
    //           <span className="text-red-600 font-medium">o</span>
    //           <span className="text-orange-600 font-medium">o</span>
    //           <span className="text-blue-600 font-medium">g</span>
    //           <span className="text-green-600 font-medium">l</span>
    //           <span className="text-red-600 font-medium">e</span>
    //         </h2>
    //       </div>
    //       <div className="text text-center mt-2 text-2xl md:text-3xl">
    //         Sign in
    //       </div>
    //       <div className="s-text mt-3 text-center capitalize">
    //         use your google account
    //       </div>
    //       <div className="input-box mt-8">
    //         <ValidationTextFields label={labelName} />
    //         <p className="capitalize text-[#1a73e8] p-1">
    //           <a href="#">forget email?</a>
    //         </p>
    //       </div>
    //       <div className="down-text mt-6 md:mt-8">
    //         <p className="text-sm">
    //           Not your computer? Use Guest mode to sign in privately.
    //         </p>
    //         <a href="#" className="text-[#1a73e8]">
    //           Learn more
    //         </a>
    //       </div>
    //       <div className="btn-box mt-6 md:mt-8 flex flex-col md:flex-row justify-center md:justify-between items-center">
    //         <button className="left text-[#1a73e8] py-2 px-2 hover:bg-blue-50 capitalize md:py-3 md:px-3">
    //           create account
    //         </button>
    //         <button
    //           className="right bg-[#1a73e8] py-2 md:py-1.5 px-4 md:px-5 text-white rounded-md text-lg ac-btn"
    //           onClick={emailNextHandler}
    //         >
    //           Next
    //         </button>
    //       </div>
    //     </div>
    //     <div className="login-box-2 opacity-0" ref={login2}>
    //       <div className="logo">
    //         <h2 className="text-2xl md:text-3xl tracking-[-.09rem] text-center">
    //           <span className="text-blue-600 font-medium">G</span>
    //           <span className="text-red-600 font-medium">o</span>
    //           <span className="text-orange-600 font-medium">o</span>
    //           <span className="text-blue-600 font-medium">g</span>
    //           <span className="text-green-600 font-medium">l</span>
    //           <span className="text-red-600 font-medium">e</span>
    //         </h2>
    //       </div>
    //       <div className="text text-center mt-2 text-2xl md:text-3xl">
    //         Welcome
    //       </div>
    //       <div className="s-text m-auto mt-2 border border-1 border-gray-400 py-0.5 px-2 w-fit rounded-2xl">
    //         xyzabc@gmail.com
    //       </div>
    //       <p className="text mt-6 ml-2">To continue, first verify it's you</p>
    //       <div
    //         className="new translate-x-[30rem] transition-transform"
    //         ref={translate}
    //       >
    //         <div className="input-box mt-6">
    //           <ValidationTextFields label={labelName} />
    //           <input type="checkbox" name="checkbox" className="mt-4 ml-2" />
    //           <label htmlFor="checkbox" className="p-1">
    //             show password
    //           </label>
    //         </div>
    //         <div className="btn-box mt-6 flex flex-col md:flex-row justify-center md:justify-between items-center">
    //           <button className="left text-[#1a73e8] py-2 px-2 hover:bg-blue-50 capitalize md:py-3 md:px-3">
    //             forgot password?
    //           </button>
    //           <button className="right bg-[#1a73e8] py-2 md:py-1.5 px-4 md:px-5 text-white rounded-md text-lg">
    //             Next
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
