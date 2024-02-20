import { Fragment } from "preact";
import React from "react";

const Registration = () => {
  return (
    <Fragment>
      <img
        src="src\assets\logo3.png"
        className="m-[0_auto] rounded-2xl h-[15rem] mb-1"
        alt="logo"
      />
      <form
        className="flex flex-col m-[0_auto] sm:w-[60%] md:w-[60%] lg:w-[30%] p-10 border-2 shadow-md shadow-[#77d17fc5] border-[#4b8638]
     rounded-xl drop-shadow-lg"
      >
        <h1 className="text-3xl text-[#2E5821] border-b-2 border-[#2E5821] m-[0_auto] pb-4">
          Create a new account
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="my-4 p-2 rounded-lg bg-[#CCFBBE] outline-none text-[#2E5821]
        placeholder:text-[#3E6033]"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 rounded-lg bg-[#CCFBBE] outline-none text-[#2E5821]
        placeholder:text-[#3E6033]"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="mb-4 p-2 rounded-lg bg-[#CCFBBE] outline-none text-[#2E5821]
         placeholder:text-[#3E6033]"
        />
        <button
          type="submit"
          className="bg-[#2E5821] mt-4 rounded-md w-[25%] m-[0_auto] p-2
         duration-200 hover:bg-[#213F18] active:bg-[#245814] active:scale-90 active:duration-75 drop-shadow-lg"
        >
          Register
        </button>
      </form>
    </Fragment>
  );
};

export default Registration;
