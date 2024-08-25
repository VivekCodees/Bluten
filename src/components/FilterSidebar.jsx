import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowUp, IoMdClose } from "react-icons/io";

const FilterSidebar = () => {
    return (
      <div className="w-[250px] md:w-1/4 p-4 bg-gray-50 border-r border-gray-200 rounded-lg hidden lg:block">
        <h2 className="text-lg font-semibold mb-4 text-center pt-4 text-[#365758]">Filter</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-center py-5 text-[#365758]">Preis</h3>
          <input type="range" min="5" max="10" className="w-full accent-slate-500" />
          <div className="flex items-center justify-center gap-5 text-lg text-gray-600 mt-2">
            <span className="px-3 bg-[#ccc] rounded-xl">5 €</span>
            <span className="text-3xl">-</span>
            <span className="px-3 bg-[#ccc] rounded-xl">10 €</span>
          </div>
        <hr className="w-full h-[2px] mt-4 bg-[#ccc]"/>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2 gap-2 p-3 inline-flex items-center text-[#365758]">Hersteller {<IoIosArrowUp/>}</h3>
          <div className="space-y-2 text-[#365758]">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-slate-500" /> ADREXpharma
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-slate-500" /> Aurora
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked className="mr-2 accent-slate-500" /> Avay
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked className="mr-2 accent-slate-500" /> Bedrocan
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-slate-500" /> Cannamedical
            </label>
          </div>
          <button className="text-[#365758] text-sm text-center w-full border border-yellow-400 py-1 rounded-tl-full rounded-br-full mt-3">mehr anzeigen</button>
          <hr className="w-full h-[2px] my-4 bg-[#ccc]"/>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-center p-3 text-[#365758]">THC Gehalt</h3>
          <input type="range" min="11" max="18" className="w-full accent-slate-500" />
          <div className="flex justify-between text-sm text-[#365758] mt-2">
            <span className="px-3 bg-[#ccc] rounded-xl ">11%</span>
            <span className="px-3 bg-[#ccc] rounded-xl">18%</span>
          </div>
          <hr className="w-full h-[2px] my-4 bg-[#ccc]"/>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-center p-3 text-[#365758]">CBD Gehalt</h3>
          <input type="range" min="1" max="5" className="w-full accent-slate-500" />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span className="px-3 bg-[#ccc] rounded-xl">1%</span>
            <span className="px-3 bg-[#ccc] rounded-xl">5%</span>
          </div>
          <hr className="w-full h-[2px] my-4 bg-[#ccc]"/>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-center p-3 text-[#365758]">Genetik</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 cursor-pointer">
            <span className="px-4 py-2 bg-[#62C3C6] text-[#365758] rounded-md text-sm">Indica</span>
            <span className="px-4 py-2 bg-teal-100 text-[#365758] rounded-md text-sm">Sativa</span>
            <span className="px-4 py-2 bg-teal-100 text-[#365758] rounded-md text-sm">Hybrid</span>
          </div>
          <hr className="w-full h-[2px] my-4 bg-[#ccc]"/>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-center p-3 text-[#365758]">Bestrahltung</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 cursor-pointer">
            <span className="px-4 py-2 bg-[#62C3C6] text-[#365758] rounded-md text-sm">bestrahit</span>
            <span className="px-4 py-2 bg-teal-100 text-[#365758] rounded-md text-sm">nicht bestrahit</span>
          </div>
          <hr className="w-full h-[2px] my-4 bg-[#ccc]"/>
        </div>
        
        <div className="mb-6 flex items-center justify-center gap-3">
          <h3 className="font-semibold">Terpene</h3>
          <RiArrowDropDownLine className="text-5xl text-[#365758]"/>
        </div>
          <hr className="w-full h-[2px] my-4 bg-[#ccc]"/>
  
        <button className="w-full mt-4 text-[#365758] text-lg py-2 inline-flex items-center justify-center gap-5 ">
        {<IoMdClose/>} alle filter zurücksetzen 
        </button>
      </div>
    );
  };
  
  export default FilterSidebar;
  