import Image from "next/image"
import Logo from '../../public/logo.png'
import { IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxSwitch } from "react-icons/rx";
import { RiListView } from "react-icons/ri";

function Bluten() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10">
      {/* Logo Section */}
      <div className="mb-4 md:mb-0 w-full md:w-auto flex justify-center md:justify-start">
        <Image src={Logo} width={100} alt="Logo" className="w-[80px] md:w-[100px]" />
      </div>
    
      {/* Search and Filter Section */}
      <div className="flex flex-wrap items-center justify-center gap-4 w-full">
        {/* Search Input */}
        <div className="flex items-center justify-between gap-1 px-4 py-1 w-full md:w-[340px] bg-[#EEF7F7] rounded-full">
          <h3 className="text-xs md:text-sm lg:text-md text-[#62C3C6]">Suchen</h3>
          <IoMdSearch />
        </div>
    
        {/* Sort By Dropdown */}
        <div className="flex items-center justify-center gap-1 px-4 py-1 w-full md:w-[175px] bg-[#EEF7F7] rounded-md">
          <h3 className="font-semibold text-xs md:text-sm lg:text-md text-[#365758]">Sortieren nach</h3>
          <RiArrowDropDownLine className="text-3xl md:text-4xl lg:text-5xl"/>
        </div>
    
        {/* Availability Toggle */}
        <div className="flex items-center justify-center gap-1 px-4 py-2 w-full md:w-[175px] bg-[#EEF7F7] rounded-md">
          <h3 className="font-semibold text-xs md:text-sm lg:text-md text-[#365758]">Verfügbarkeit</h3>
          <RxSwitch />
        </div>
    
        {/* List View Icon */}
        <div className="text-3xl md:text-4xl lg:flex items-center justify-center w-full md:w-auto hidden">
          <RiListView />
        </div>
      </div>
    </div>
    
      );
          
}

export default Bluten
