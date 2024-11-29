import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-black bg-wild-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-foreground  text-black "><Link href="/">Header</Link></h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className=" text-black  hover:text-wild-100 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className=" text-black  hover:text-wild-100 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
