"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return <Navigation />;
}

const Navigation = () => {
  return (
    <header className="flex rounded max-w-full bg-Cape-Cod w-full justify-between mx-auto items-center py-4 md:flex sticky">
      <div className="flex justify-center mx-4 items-center md:flex-1 md:mx-4 md:justify-start md:items-start">
        <Image src="/logo.png" width={50} height={50} alt="Logo" />
      </div>
      <nav className="flex md:mx-4">
        <ul className="flex mx-2 my-2 gap-y-8 gap-x-4 collapse md:visible">
          <li>
            <a
              className="text-lg text-Moon-Mist hover:text-Leather active:text-Leather active:font-semibold transition-all ease-in-out duration-200"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-lg text-Moon-Mist hover:text-Leather active:text-Leather active:font-semibold transition-all ease-in-out duration-200"
              href="/"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-lg text-Moon-Mist hover:text-Leather active:text-Leather active:font-semibold transition-all ease-in-out duration-200"
              href="/"
            >
              Contact
            </a>
          </li>
        </ul>
        <DropdownButton />
      </nav>
    </header>
  );
};

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block md:hidden">
      <button onClick={toggleDropdown} className="px-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="0"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className={`w-6 h-6 stroke-Moon-Mist md:hidden active:stroke-Leather focus:stroke-Leather ${
            isOpen ? "hidden" : "visible"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {isOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-Leather md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="absolute mt-2 right-0 text-center bg-Leather border-2 border-Moon-Mist rounded shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-white active:bg-Leather-400 active:text-Moon-Mist border-b"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-white active:bg-Leather-400 active:text-Moon-Mist border-b"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-white active:bg-Leather-400 active:text-Moon-Mist "
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};
