import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between px-4 md:px-10 relative z-50">
      {/* LOGO */}
      <Link
        to="/"
        className="flex items-center gap-4 text-2xl font-bold transition-all duration-500 hover:opacity-80"
      >
        <Image src="logo.png" alt="Lama Logo" w={32} h={32} />
        <span className="animate-fade-in">The StoryNest</span>
      </Link>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden z-50">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          
          <div className="flex flex-col gap-[5.4px]">
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all duration-300 ${
                open ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg transition-all duration-500 ease-in-out transform ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Link
          to="/"
          className="transition hover:text-blue-800"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/posts?sort=trending"
          className="transition hover:text-blue-800"
          onClick={() => setOpen(false)}
        >
          Trending
        </Link>
        <Link
          to="/posts?sort=popular"
          className="transition hover:text-blue-800"
          onClick={() => setOpen(false)}
        >
          Most Popular
        </Link>
        <Link
          to="/about"
          className="transition hover:text-blue-800"
          onClick={() => setOpen(false)}
        >
          About
        </Link>
        <SignedOut>
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white hover:bg-blue-700 transition duration-300">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium animate-fade-in">
        <Link to="/" className="hover:text-blue-800 transition">Home</Link>
        <Link to="/posts?sort=trending" className="hover:text-blue-800 transition">Trending</Link>
        <Link to="/posts?sort=popular" className="hover:text-blue-800 transition">Most Popular</Link>
        <Link to="/about" className="hover:text-blue-800 transition">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white hover:bg-blue-700 transition duration-300">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
