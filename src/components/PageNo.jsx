
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function PageNo() {
  return (
    <div className="page-no flex items-center justify-end gap-4 mr-10 pr-10 mb-20 cursor-pointer">
     <FaArrowLeft className="text-[#62C3C6]"/>
     <h2>1</h2>
     <h2>2</h2>
     <h2>3</h2>
     <h2>...</h2>
     <h2>12</h2>
     <FaArrowRight className="text-[#62C3C6]"/>
   </div>
  )
}

export default PageNo
