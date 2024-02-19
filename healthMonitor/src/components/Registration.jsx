import React from "react";

function Registration() {
  return (
    <form
      className="flex flex-col m-[0_auto] w-[50%] min-w-[50%] p-10 bg-blue-300
     rounded-xl drop-shadow-2xl"
    >
      <h1 className="text-3xl m-[0_auto] pb-4">Create a new account</h1>
      <input
        type="text"
        placeholder="Username"
        className="mb-4 p-2 rounded-lg bg-blue-400  drop-shadow-sm outline-none text-blue-900
         placeholder:text-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-4 p-2 rounded-lg bg-blue-400 drop-shadow-sm outline-none text-blue-900
         placeholder:text-blue-500"
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="mb-4 p-2 rounded-lg bg-blue-400 drop-shadow-sm outline-none text-blue-900
         placeholder:text-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 mb-4 rounded-md w-[25%] m-[0_auto] p-2 drop-shadow-button
         duration-200 active:bg-blue-800 hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
}

export default Registration;
