"use client";


import Link from "next/link";
import { rubik80s ,markazi,karla} from "@/fonts";

import { FaInstagram, FaXTwitter, FaEnvelope } from "react-icons/fa6"; // or use react-icons

export default function Footer() {
  

  return (
    <footer className="py-4 px-6 bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Logo + @2025 */}
        <div>
          <div
            className={`${rubik80s.className} text-3xl font-bold tracking-wider drop-shadow`}
          >
            CR4FTED
          </div>
          <div className="text-sm mt-1 text-gray-400 text-center ">
            @2025 Crafted
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="text-center">
          <div className={`${markazi.className} font-semibold text-2xl`}>Social Links</div>
          <div className="flex space-x-4 mt-1 justify-center">
            <Link
              href="https://www.instagram.com/cr4fteddes1gns?igsh=bnMwNGx4YnhiNjdz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram size={20} />
            </Link>
            <a
  href="mailto:cr4fteddsigns@gmail.com"
  className="hover:text-blue-400"
>
  <FaEnvelope size={20} />
</a>

            <Link
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaXTwitter size={20} />
            </Link>
          </div>
        </div>

        {/* Right: Email */}
        <div className={`${karla.className} text-lg text-gray-300`}>
          contact@craftedhq.in
        </div>
      </div>
    </footer>
  );
}
