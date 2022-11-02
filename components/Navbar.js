import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Transition } from "@headlessui/react"; //for smooth transition between tabs
import Link from "next/link"; //Alternativ3 for a tag. In next js we use Link for ref


// import { useRouter } from 'next/router'

const Navbar = () => {
// use to change the state for it false means when we click only its open otherwise not.
const [isOpen, setIsOpen] = useState(false);
const { systemTheme, theme, setTheme } = useTheme();


const toggleButton = () => {
const currentTheme = theme === "system" ? systemTheme : theme;
if (currentTheme === "dark") {
return (
<button className="bg-gray-200 mx-3 px-4 py-2 relative top-1 rounded-md text-yellow-500 ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    onClick={() => setTheme("light")}
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
</button>
);
} else {
return (
<button
  className="bg-gray-200 mx-3 px-4 py-2 relative top-1 rounded-md text-yellow-500 "
  onClick={() => setTheme("dark")}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
</button>
);
}
};

return (
<div>
{/* for main Navcontainer */}
<nav className="shadow-xl w-full ">
<div className="w-full ">
  <div className="flex items-center h-20 w-full">
    {/* for block section outer part */}
    <div className="flex items items-center mx-20 justify-between w-full">
      <div className="flex justify-center items-center flex-shrink-0">
        <h1 className="font-bold text-xl cursor-pointer">
          σ I G Σ A <span className="text-yellow-600"> Logo </span>
        </h1>
      </div>
      {/* for medium block we do not show tabs that's why written hidden and on medium i.e md we want them as block */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <Link activeClass="Home" href="/" className="cursor-pointer hover:bg-yellow-500 text-black  dark:text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">
             Sports
          </Link>
          <Link activeClass="Home" href="/Jackpot" className="cursor-pointer hover:bg-yellow-500 text-black  dark:text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          
              Jackpot
           
          </Link>
          <Link activeClass="Home" href="/Live" className="cursor-pointer hover:bg-yellow-500 text-black  dark:text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">
           
              Live
           
          </Link>
          <Link activeClass="More" href="/More" className="cursor-pointer hover:bg-yellow-500 text-black  dark:text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            
              More
            
          </Link>
         
          {toggleButton()}
        </div>
      </div>
    </div>
    {/* Now we work on mobile responsive */}
    <div className="mr-10 flex md:hidden">
      {/* it have some properties like when we click what will happen  on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="bg-yellow-600 inline-flex items-center justify-center p-2 rounder-md text-white hover:bg-yellow-600 focus: outline-none focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="sr-only">Open Main Menu</span>
        {!isOpen ? (
          <svg
            className="block h-6 w-6 "
            xmlns="http:www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24 "
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" //menu shape
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6 "
            xmlns="http:www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24 "
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12" //cross shape
            />
          </svg>
        )}
      </button>
    </div>
  </div>
</div>
{/* we include transition from headlessui */}
<Transition
  show={isOpen}
  enter="transition  ease-out duration-100 transform"
  enterFrom="opacity-0 scale-95"
  enterTo="opacity-100 scale-100"
  leave="transition ease-in duration-75 transform"
  leaveFrom="opacity-100 scale-100"
  leaveTo="opacity-0 scale-95"
>
  {(ref) => (
    //handle the mobile menu tabs
    <div className="md:hidden id=mobile-menu ">
      <div
        ref={ref}
        className="bg-white z-50 dark:bg-[#2C3333] px-2 pt-2 pb-3 space-y-1 sm:px-3"
      >
        <Link
          href="/home"
          activeClass="home"
          to="home"
          smooth={true}
          offset={50}
          duration={500}
          a className="cursor-pointer hover:bg-yellow-600 text-black dark:text-white  hover:text-white block px-3 py-2 rounded-md  text-base font-medium "
        >
           Sports
          
        </Link>
        <Link
          href="/Jackpot"
          activeClass="Jackpot"
          to="Jackpot"
          smooth={true}
          offset={50}
          duration={500}
          className="cursor-pointer hover:bg-yellow-600 text-black dark:text-white  hover:text-white block px-3 py-2 rounded-md  text-base font-medium"
        >
            Jackpot
       
        </Link>
        <Link
          href="/Live"
          activeClass="Live"
          to="Live"
          smooth={true}
          offset={50}
          duration={500}
          className="cursor-pointer hover:bg-yellow-600 text-black dark:text-white  hover:text-white block px-3 py-2 rounded-md  text-base font-medium "
        >
            Live
         
        </Link>
        <Link
          href="/Mores"
          activeClass="Mores"
          to="Mores"
          smooth={true}
          offset={50}
          duration={500}
          className="cursor-pointer hover:bg-yellow-600 text-black dark:text-white  hover:text-white block px-3 py-2 rounded-md  text-base font-medium "
        >
            More
         
        </Link>
        <Link
          href="/create"
          activeClass="create"
          to="create"
          smooth={true}
          offset={50}
          duration={500}
          className="cursor-pointer hover:bg-yellow-600 text-black dark:text-white  hover:text-white block px-3 py-2 rounded-md  text-base font-medium "
        >
            Create
          
        </Link>
        {toggleButton()}
      </div>
    </div>
  )}
</Transition>
</nav>
</div>
);
};

export default Navbar;
