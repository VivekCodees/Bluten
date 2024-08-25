import Image from 'next/image';

const Card = ({ imageSrc, title, cultivar, genetics, price }) => {
  return (
    <div className="bg-white rounded-tl-3xl rounded-br-3xl border shadow-md overflow-hidden max-w-xs w-full">
      <div className="relative">
        <Image
          src={imageSrc}
          width={310}
          height={150}
          alt="Product Image"
          className="w-full h-48 object-contain"
        />
        <span className="absolute top-3 left-3 bg-red-100 text-red-500 text-xs font-medium px-2 py-1 rounded-full">
          nicht lieferbar
        </span>
      </div>
      <div className="p-4 bg-teal-50">
        <span className="block text-teal-500 font-semibold">Canify</span>
        <div className="flex items-center justify-center gap-1 mt-2">
          <span className="bg-white text-teal-500 text-xs font-medium px-2 py-1 rounded-md">
            THC 18%
          </span>
          <span className="bg-white text-teal-500 text-xs font-medium px-2 py-1 rounded-md">
            CBD &lt;1%
          </span>
        </div>
        <h3 className="mt-4 text-teal-700 font-semibold">
          {title}
        </h3>
        <div className="mt-2">
          <div className="flex justify-between">
            <span className="text-gray-500 text-sm">Kultivar</span>
            <span className="text-teal-700 font-semibold text-sm">{cultivar}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 text-sm">Genetik</span>
            <span className="text-teal-700 font-semibold text-sm">{genetics}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-teal-700 font-bold text-lg">€ {price}*</span>
          <button className="bg-[#ECFEAA] text-xs md:text-sm lg:text-md text-[#365758] px-3 py-1 mt-2 lg:px-4 lg:py-2 rounded-tl-full rounded-br-full hover:bg-yellow-200">
            in den Warenkorb
          </button>
        </div>
        <span className="text-gray-500 text-sm mt-1 block">pro Gramm</span>
      </div>
    </div>
  );
};

export default Card;
