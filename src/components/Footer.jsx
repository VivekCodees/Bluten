import React from "react";
import Rect from '../../public/one.png'
import Image from "next/image";

function Footer() {
    return (
        <>

            <div className="bg-[#1A8D91] w-full flex flex-col md:flex-row justify-around items-start p-10 md:p-20 space-y-8 md:space-y-0">

                <div className="p-5 md:mt-20">
                    <ul>
                        {/* Logo Should be here */}
                        <li className="text-white text-xs pb-2 font-semibold cursor-pointer">
                            AGB
                        </li>
                        <li className="text-white text-xs pb-2 font-semibold cursor-pointer">
                            Impressum
                        </li>
                        <li className="text-white text-xs pb-2 font-semibold cursor-pointer">
                            Datenschutz
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 lg:gap-4 text-xs text-white">
                        <Image src={Rect} alt="Rezept einlösen Icon" />
                        <h3>Rezept einlösen</h3>
                        <Image src={Rect} alt="Live Bestand Icon" />
                        <h3>Live Bestand</h3>
                    </div>
                    <div className="flex flex-wrap items-center mt-5 pt-2 gap-2 md:gap-4 lg:gap-4 tracking-tighter w-full text-xs text-white">
                        <Image src={Rect} alt="Videosprechstunde Icon" />
                        <h3>Videosprechstunde</h3>
                        <Image src={Rect} alt="FAQs Icon" />
                        <h3>FAQs</h3>
                        <Image src={Rect} alt="Kontakt Icon" />
                        <h3>Kontakt</h3>
                    </div>
                </div>

                <div className="ml-0 md:ml-5 p-5 w-full md:w-[192px]">
                    <ul>
                        <p className="text-white font-bold text-sm pb-4">Standort</p>
                        <li className="text-white text-xs pb-2 font-semibold cursor-pointer">
                            Bergstraße 49 - 5769469 Weinheim (3 Glocken Quartier)
                        </li>
                    </ul>
                </div>

                <div className="p-5">
                    <ul>
                        <p className="text-white font-bold text-sm lg:pb-4 pb-2 tracking-tighter">Telefon</p>
                        <li className="text-white text-xs lg:pb-2 font-semibold cursor-pointer">
                            0223 545 5250
                        </li>
                    </ul>
                </div>

                <div className="p-5 w-full md:w-[140px]">
                    <ul>
                        <p className="font-bold text-white text-sm pb-4">Öffnungszeiten</p>
                        <li className="text-gray-200 text-xs pb-2 font-semibold cursor-pointer">
                            Mo-Fr
                        </li>
                        <li className="text-white text-xs pb-2 font-semibold cursor-pointer">
                            9:00 - 18:00 Uhr
                        </li>
                        <li className="text-gray-200 text-xs pb-2 font-semibold cursor-pointer">
                            Sa
                        </li>
                        <li className="text-white text-xs pb-2 font-semibold cursor-pointer">
                            9:00 - 14:00 Uhr
                        </li>
                    </ul>
                </div>

            </div>


        </>
    );
}

export default Footer;