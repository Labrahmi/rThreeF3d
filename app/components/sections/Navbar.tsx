"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu as MenuIcon } from "lucide-react";

const MenuLinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Projects",
    href: "#",
  },
  {
    name: "Experience",
    href: "#",
  },
];

const Menu = () => {
  return (
    <div>
      <MenuIcon className="md:hidden block" />
      <div className="gap-4 hidden md:flex cursor-default">
        {MenuLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="dark:text-zinc-200 dark:hover:text-white transition-all duration-200 ease-in-out"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`m-2 min-h-20 flex justify-between items-center border border-transparent rounded-full sticky transition-all duration-200 top-4 ${
        isScrolled
          ? "border dark:border-zinc-800 border-zinc-200 dark:bg-customDark bg-white"
          : ""
      }`}
    >
      <a
        href="#"
        className="font-medium transition-all duration-200 ease-in-out dark:text-zinc-200 dark:hover:text-white"
      >
        {"Youssef Labrahmi"} 👨‍💻
      </a>
      <Menu />
      <button className="w-fit px-4 py-2 hover:bg-opacity-90 bg-gray-100 text-black invert dark:invert-0 border dark:border-transparent rounded-3xl hidden md:block transition-all duration-200 ease-in-out">
        Book a Call
      </button>
    </section>
  );
};

export default Navbar;
