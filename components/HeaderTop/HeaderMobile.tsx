import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

export const HeaderMobile = () => {
  return (
    <div
      className="
              flex
              md:hidden
              gap-x-2
              items-center
            "
    >
      <button
        className="
                rounded-full 
                p-2
              bg-white 
                flex 
                items-center 
                justify-center 
                hover:opacity-75 
                transition
              "
      >
        <HiHome className="text-black" size={20} />
      </button>
      <button
        className="
              rounded-full 
              p-2
            bg-white 
              flex 
              items-center 
              justify-center 
              hover:opacity-75 
              transition
            "
      >
        <BiSearch className="text-black" size={20} />
      </button>
    </div>
  );
};
