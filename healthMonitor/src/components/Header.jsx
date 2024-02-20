import React from "react";

const Header = () => {
  const user = "Shaked";

  return (
    <header className="flex justify-between bg-[#569e5c] rounded-b-2xl drop-shadow-2xl">
      <a href="/">
        <img
          src="src\assets\logo3_header.png"
          className="h-[5rem] pl-4"
          alt="logo"
        />
      </a>
      <div className="flex">
        <div className="flex text-3xl mr-4 my-5 p-2 hover:bg-[#2b5f1b] cursor-pointer duration-150 rounded-3xl">
          {user}
          <img
            src="/src/assets/expand_arrow.png"
            className="h-[1rem] mt-3 ml-2"
          />
        </div>
        <img
          src="/src/assets/sun.png"
          className="h-[2.5rem] mr-4 mt-6 hover:bg-[#2b5f1b] cursor-pointer duration-150 rounded-full "
        />
      </div>
    </header>
  );
};

export default Header;
