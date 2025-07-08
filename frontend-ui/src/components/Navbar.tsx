"use client";
import Link from "next/link";
import { rubik80s, karla } from "@/fonts";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex flex-col md:flex-row justify-center md:justify-between items-center px-4 py-4 bg-black/0 backdrop-blur-sm z-20 space-y-2 md:space-y-0">
      <div
        className={`${rubik80s.className} text-3xl font-bold tracking-wider `}
      >
        CR4FTED
      </div>

      <ul
        className={`${karla.className} text-lg flex flex-row justify-center space-x-6`}
      >
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
