'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMdCart, IoMdSearch, IoMdMenu, IoMdClose } from 'react-icons/io';
import Rect from '../../public/one.png'
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-10 px-4 md:px-8 py-2 backdrop-blur-lg transition-all duration-1000 ${scrolled ? 'bg-opacity-90' : 'bg-opacity-0'}`}>
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center justify-between gap-1 px-4 py-1 md:w-[15%] lg:w-[25%] w-[30%] bg-[#EEF7F7] rounded-full">
          <h3 className="text-xs md:text-sm lg:text-md text-[#62C3C6]">Suchen</h3>
          <IoMdSearch className='hidden lg:block text-[#62C3C6]'/>
        </div>
        {/* Hamburger Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose className="text-2xl transition duration-300 ease-in-out" /> : <IoMdMenu className="text-2xl transition duration-300 ease-in-out" />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 flex-1 lg:text-sm justify-center">
          <Link href="/rezept-einloesen" className="text-teal-500  hover:text-teal-900 transition flex items-center gap-[2px] duration-300 ease-in-out">
            <Image
              src={Rect}
              width={10}
              height={10}
            />
            Rezept einlösen
          </Link>
          <Link href="/live-bestand" className="text-teal-500 hover:text-teal-900 flex items-center gap-[2px] transition duration-300 ease-in-out">
            <Image
              src={Rect}
              width={10}
              height={10}
            />
            Live Bestand
          </Link>
          <Link href="/videosprechstunde" className="text-teal-500 hover:text-teal-900 flex items-center gap-[2px] transition duration-300 ease-in-out">
            <Image
              src={Rect}
              width={10}
              height={10}
            />
            Videosprechstunde
          </Link>
          <Link href="/faqs" className="text-teal-500 hover:text-teal-900 transition flex items-center gap-[2px] duration-300 ease-in-out">
            <Image
              src={Rect}
              width={10}
              height={10}
            />
            FAQs
          </Link>
          <Link href="/kontakt" className="text-teal-500  hover:text-teal-900 flex items-center gap-[2px] transition duration-300 ease-in-out">
            <Image
              src={Rect}
              width={10}
              height={10}
            />
            Kontakt
          </Link>
        </div>

        {/* Desktop Cart and Login */}
        <div className="hidden md:flex items-center lg:text-sm space-x-4">
          <Link href="/cart" className="text-teal-500 hover:text-teal-900 text-2xl transition duration-300 ease-in-out">
            <IoMdCart />
          </Link>
          <Link
            href="/anmelden"
            className="px-4 py-2 bg-[#ECFEAA] text-teal-900 rounded-full hover:bg-yellow-200 rounded-tr-2xl rounded-bl-2xl transition duration-300 ease-in-out"
          >
            Anmelden
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? 'flex' : 'hidden'} flex-col items-center justify-center space-y-4 mt-4 transition-all duration-300 ease-in-out`}>
        <div className="flex flex-col items-center space-y-4">
          <Link href="/rezept-einloesen" className="text-[#365758] hover:text-teal-900 transition duration-300 ease-in-out">
            Rezept einlösen
          </Link>
          <Link href="/live-bestand" className="text-[#365758] hover:text-teal-900 transition duration-300 ease-in-out">
            Live Bestand
          </Link>
          <Link href="/videosprechstunde" className="text-[#365758] hover:text-teal-900 transition duration-300 ease-in-out">
            Videosprechstunde
          </Link>
          <Link href="/faqs" className="text-[#365758] hover:text-teal-900 transition duration-300 ease-in-out">
            FAQs
          </Link>
          <Link href="/kontakt" className="text-[#365758] hover:text-teal-900 transition duration-300 ease-in-out">
            Kontakt
          </Link>
          <Link href="/cart" className="text-[#365758] hover:text-teal-900 text-2xl transition duration-300 ease-in-out">
            <IoMdCart />
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 bg-yellow-100 text-teal-900 rounded-full hover:bg-yellow-200 rounded-tr-2xl rounded-bl-2xl transition duration-300 ease-in-out"
          >
            Anmelden
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
