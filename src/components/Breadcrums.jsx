import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

function Breadcrums() {
  return (
    
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-20 md:py-20 w-full mt-10">
  {/* Breadcrumb Section */}
  <div className="flex items-center gap-2 text-xs lg:text-lg w-full md:w-auto md:text-left">
    <h2 className="text-[#62C3C6] font-extralight">Home</h2>
    <FaLongArrowAltRight className="text-[#62C3C6]" />
    <h2 className="text-[#62C3C6] font-extralight">Livebestand</h2>
    <FaLongArrowAltRight className="text-[#62C3C6]"/>
    <h2 className="lg:font-bold text-[#045A5C] font-semibold">Cannabis Bluten</h2>
  </div>

  {/* CTA Section */}
  <div className="text-center md:text-right w-full md:w-auto mt-10 md:mt-0">
    <h1 className="pb-2 text-sm text-[#365758]">GKV mit Kostenübernahme?</h1>
    <Link
      href="/perisoptinen"
      className="px-10 py-2 text-[#045A5C] rounded-full border border-[#62C3C6] hover:bg-yellow-100 rounded-tr-2xl rounded-bl-2xl text-sm"
    >
      Perisoptinen
    </Link>
  </div>
</div>

  
  );
}

export default Breadcrums



