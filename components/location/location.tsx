import {
  BsFillHouseDoorFill,
  BsChevronDown,
  BsSuitHeartFill,
} from "react-icons/bs";

export default function Location() {
  return (
    <div className="relative px-4 mt-[-6rem] z-50">
      <div className="flex items-center justify-between p-3 ">
        <div>
          <div className="flex items-center gap-1">
            <BsFillHouseDoorFill className="text-black" />
            <h3 className="text-black font-bold">Home</h3>
            <BsChevronDown className="text-black" />
          </div>

          <span className=" 2 text-black">
            Yas Village, Abu Dhabi, E-block
          </span>
        </div>

        <div className="3 flex items-center justify-center p-2 rounded-full bg-white">
          <BsSuitHeartFill className="text-[#1C259C] text-xl" />
        </div>
      </div>
    </div>
  );
}
